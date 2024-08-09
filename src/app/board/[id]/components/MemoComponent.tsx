'use client'

import { Memo } from '@/lib/types'

export default function MemoComponent({
  memo,
  memos,
  handleMemoUpdate,
}: {
  memo: Memo
  memos: Memo[]
  handleMemoUpdate: (updatedMemos: Memo[]) => void
}) {
  return (
    <div className={`text-sm p-4 bg-memo-${memo.color} rounded-lg`}>
      <textarea
        className={`text-memo-${memo.color}-text bg-transparent break-words whitespace-normal h-60 w-48 resize-none`}
        value={memo.document ?? ''}
        onChange={async (e) => {
          const newMemos = memos.map((_memo) =>
            _memo.id === memo.id
              ? { ...memo, document: e.target.value }
              : _memo,
          )
          console.log('newMemos')
          console.log(newMemos)
          handleMemoUpdate(newMemos)
          console.log('memos')
          console.log(memos)
        }}
      />
    </div>
  )
}
