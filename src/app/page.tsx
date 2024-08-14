import RevealOnScroll from '@/components/landing/RevealOnScroll'
import Section1WordScroll from '@/components/landing/Section1WordScroll'
import Section4 from '@/components/landing/Section4'
import { checkLogin } from '@actions/auth'

export default async function Home() {
  await checkLogin()

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
              {/* <div className="flex flex-1 gap-4 h-full flex-col">
                <div className="opacity-20">마음</div>
                <div className="opacity-50">메모</div>
                <div>한마디</div>
                <div className="opacity-50">현재</div>
                <div className="opacity-20">미래</div>
              </div> */}
              <div className="flex flex-1 gap-4 h-full items-center justify-start">
                <Section1WordScroll />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex w-full justify-center h-landingsection bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-lola-950 to-conblue-950">
        <div className="flex flex-col justify-center items-center gap-32 md:max-w-container w-full text-white text-5xl font-extrabold">
          <RevealOnScroll classNames="w-full" duration={2000}>
            <div className="w-full text-left text-lola-300 break-keep">
              {' '}
              과거의 기억이 미래까지 이어지도록
            </div>
          </RevealOnScroll>

          <RevealOnScroll classNames="w-full" duration={2000}>
            <div className="w-full text-center text-conblue-100">
              {' '}
              현재 나의 마음이 미래의 나에게 전달되도록
            </div>
          </RevealOnScroll>

          <RevealOnScroll classNames="w-full" duration={2000}>
            <div className="w-full text-right text-conblue-300">
              {' '}
              지금의 벅참을 누구에게 표현할 수 있도록
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 3 */}
      <div className="flex w-full justify-center h-landingsection">
        <div className="flex flex-col justify-center items-center gap-24 md:max-w-container w-full text-5xl font-extrabold">
          <RevealOnScroll duration={2000}>
            <div className="bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-lola-400 to-conblue-400 inline-block text-transparent bg-clip-text">
              {' '}
              우리의 서비스는 이런 생각들에서 시작되었습니다
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* 4 */}
      <div className="flex w-full justify-center h-landingsection">
        <div className="flex flex-col justify-center items-center gap-24 md:max-w-container w-full text-5xl font-extrabold">
          <Section4 />
        </div>
      </div>

      {/* 4 */}
      <div className="flex w-full justify-center h-landingfooter bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-lola-100 to-conblue-100">
        <div className="flex flex-row justify-center items-center gap-24 md:max-w-container w-full">
          <div className="flex-1 text-left h-full lg:p-4 p-2">
            {' '}
            MemoHive
            <br />
            Made by. 조성진, 이송희
          </div>
          <div className="h-full flex flex-col align-bottom justify-end flex-1 text-right lg:p-4 p-2">
            <div>copyright ⓒ team_forif all rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
