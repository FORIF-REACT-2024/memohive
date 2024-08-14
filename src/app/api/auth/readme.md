# 로그인 되어있는지 확인하는 방법

### Server Component
```
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

...

const session = await getServerSession(authOption)

if (!session) {
  redirect('/')
}
```
위의 session 변수 생김새
```
{
  user: {
    name: '초치',
    email: 'sj01120223@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK_gFPT4XwrGGTsZlTsJl80PByiDTMrEQ9p51d-Ojxczh-_Z0qH=s96-c'
  }
}
```

#### Custom Actions
로그인 되어있으면 '/boardlist/[id]' 로 보내버림
```
import { checkLogin } from '@actions/auth'

...

await checkLogin()
```
로그아웃 되어있으면 '/' 로 보내버림
```
import { checkLogout } from '@actions/auth'

...

await checkLogout()
```

### Client Component
```
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

...

const checkLogin = async () => {
  const session = await getSession()

  console.log(session)

  if (!session) {
    router.push('/')
  }

  return session
}

checkLogin()
```
위의 session 변수 생김새
```
{
    "user": {
        "name": "초치",
        "email": "sj01120223@gmail.com",
        "image": "https://lh3.googleusercontent.com/a/ACg8ocK_gFPT4XwrGGTsZlTsJl80PByiDTMrEQ9p51d-Ojxczh-_Z0qH=s96-c"
    },
    "expires": "2024-09-13T07:34:56.507Z"
}
```

## 페이지 중 authentication이 필요한 곳에 써야함(본인확인)
Server Component에서 체크 후 바로 redirect 혹은 url이 필요할 경우 오브젝트 형식으로 클라이언트 컴포넌트로 보낸 후 usePathname 사용해서 체크