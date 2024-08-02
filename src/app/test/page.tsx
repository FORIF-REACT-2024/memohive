import { getUser } from '@/app/actions/user'
import ChangeUserName from './component'

export default async function Test() {
  const user: string = await getUser('66aa522093d7601408509951').then((res) => {
    return res.data.username
  })

  return (
    <div className="w-full flex justify-center items-center flex-col mt-20">
      <div className="text-center">Test</div>
      <ChangeUserName name={user} />

      <div className="h-10" />
    </div>
  )
}
