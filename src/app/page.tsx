export default function Home() {
  return (
    <div className="w-full flex justify-center flex-col">
      {/* 1 */}
      <div className="flex justify-center h-landingsection">
        <div className="md:max-w-container w-full">
          <div className="flex lg:flex-row flex-col h-full">
            <div className="flex-1 flex justify-center items-center w-full h-full">
              Memo 컴포넌트 추가되면 수정 예정
            </div>

            <div className="flex-1 flex flex-row gap-4 text-5xl font-extrabold justify-center items-center">
              <div className="flex flex-1 h-full justify-end items-center">
                누군가의
              </div>
              <div className="flex flex-1 gap-4 h-full flex-col justify-center items-start">
                <div className="opacity-20">마음</div>
                <div className="opacity-50">메모</div>
                <div>한마디</div>
                <div className="opacity-50">현재</div>
                <div className="opacity-20">미래</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex w-full justify-center h-landingsection bg-gray-900">
        <div className="flex flex-col justify-center items-center gap-24 md:max-w-container w-full text-white text-5xl font-extrabold">
          <div className="w-full text-left text-lola-300 break-keep">
            {' '}
            과거의 기억이 미래까지 이어지도록
          </div>
          <div className="w-full text-center text-conblue-100">
            {' '}
            현재 나의 마음이 미래의 나에게 전달되도록
          </div>
          <div className="w-full text-right text-conblue-300">
            {' '}
            지금의 벅참을 누구에게 표현할 수 있도록
          </div>
        </div>
      </div>
    </div>
  )
}
