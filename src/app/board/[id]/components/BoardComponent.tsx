'use client'

import { createMemo, getBoardMemos, updateMemo } from '@/app/actions/memo'
import { Board, Memo } from '@/lib/types'
import { useEffect, useState } from 'react'
import _ from 'lodash'

import MemoComponent from './MemoComponent'

const memocolors = ['yellow', 'green', 'purple', 'pink']

export default function BoardComponent({
  initialMemo,
  boardId,
  boardInfo,
}: {
  initialMemo: Memo[]
  boardId: string
  boardInfo: Board
}) {
  const tempmemo = _.cloneDeep(initialMemo)
  const tempmemohistory = _.cloneDeep(initialMemo)

  const [memos, setMemos] = useState<Memo[]>(tempmemo)
  const [memoHistory, setMemoHistory] = useState<Memo[]>(tempmemohistory)
  const [loading, setLoading] = useState<boolean>(false)

  const handleMemoState = (updatedMemos: Memo[]) => {
    console.log('handleMemoState Called')
    setMemos(updatedMemos)
    console.log(memos)
  }

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      console.log('debounce called')
      console.log(memos)
      console.log(memoHistory)

      setLoading(true)

      memos.forEach(async (memo) => {
        const prev = memoHistory.find((prevmemo) => memo.id === prevmemo.id)
        if (prev !== undefined) {
          if (prev.document !== memo.document) {
            console.log('difference detected')
            const update = await updateMemo(memo.id, memo.document ?? '')
            if (update.code === '200') {
              console.log(`memo ${memo.id} udpated to ${memo.document}`)
            } else {
              console.log(update)
            }
          }
        }
      })

      console.log('debounce ended')
      setMemoHistory(memos)

      setLoading(false)
    }, 1000) // 1s 디바운스 지연 시간
    // 이전에 설정한 타이머를 클리어하여 디바운스 취소
    return () => clearTimeout(delayDebounceTimer)
  }, [memos])

  return (
    <div className="flex flex-row w-full mx-20 bg-conblue-50 rounded-lg">
      <div className="flex flex-col gap-4 items-center mx-10 my-14">
        <div className="text-conblue-700 text-5xl">{boardInfo.title}</div>
        <div className="text-conblue-400 text-xl">{boardInfo.summary}</div>
        <div className="flex flex-col gap-4 bg-white rounded-lg drop-shadow-xl items-center px-2 py-2">
          <button type="button" className="font-light text-center">
            +
          </button>

          {memocolors.map((color, index) => {
            return (
              <button
                disabled={loading}
                key={index}
                type="button"
                className={`bg-memo-${color}-button font-light rounded-full text-center w-10 h-10`}
                onClick={async () => {
                  setLoading(true)

                  const add = await createMemo(
                    '66a7735e87b8299713d7ba04',
                    boardId,
                    'sample memo',
                    color,
                  )

                  if (add.code === '200') {
                    const getMemos = await getBoardMemos(boardId)
                    if (getMemos.code === '200') {
                      setMemos(getMemos.data)
                      setMemoHistory(getMemos.data)
                    } else {
                      console.log(getMemos)
                    }
                  } else {
                    console.log(add)
                  }

                  setLoading(false)
                }}
              >
                ‎
              </button>
            )
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 py-10 pr-10">
        {memos?.map((memo: Memo, index: number) => {
          return (
            <div key={index}>
              <MemoComponent
                memo={memo}
                memos={memos}
                handleMemoUpdate={handleMemoState}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
