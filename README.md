# MemoHive
MemoHive는 손쉬운 메모 작성과 공유를 위해 만들어진 Full Stack 서비스입니다.

## Getting Started
### DB 

#### MongoDB Atlas 이용
[MongoDB Atlas](https://cloud.mongodb.com/) 에서 클러스터를 만들고, 생성된 DB를 사용합니다.  

[MongoDB Atlas](https://cloud.mongodb.com/) 에서 제공된 아래의 형식을 가진 경로를 얻은 후, 데이터베이스 생성 시 기입했던 credential 정보(user, password)와 database 이름을 치환 후 사용합니다.  

```
mongodb+srv://<user>:<password>@******.******.mongodb.net/<database>?retryWrites=true&w=majority&appName=******
```

#### Docker 를 이용하여 로컬 DB 이용

[Docker](https://www.docker.com/) 를 설치합니다.

`DB/docker-compose.yml` 파일과 `DB/mongodb_replica` 폴더를 외부 임의의 경로에 복사합니다.

복사한 `docker-compose.yml` 파일 내에서 `root` 와 `password` 를 임의의 데이터베이스의 접근 계정으로 수정합니다.  
```
e.g.) user / password
```  
docker-compose.yml 파일 저장 후 해당 경로의 터미널에서 아래 커맨드 실행합니다.  
```
docker compose up -d
```

위와 같은 절차를 다 거쳤다면 아래의 경로로 데이터베이스에 접속 가능합니다.
```
mongodb://<root>:<password>@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin&directConnection=true
```


### Service

아래의 커맨드를 통해 필요한 모듈을 설치합니다.
```
# npm i
```

`.env` 파일을 생성한 후 DB 를 생성할 때 만들어진 데이터베이스 경로를 아래와 같이 넣어줍니다.
```
DATABASE_URL="<root>:<password>@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin&directConnection=true"
```
아래의 커맨드를 통해 Prisma 와 DB 를 초기화해줍니다.
```
npx prisma generate
npx prisma db push
```

[Next.js](https://nextjs.org/) 기반으로 만들어진 프로젝트를 아래의 방법 중 하나로 실행합니다.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# or (if next is installed globally)
next dev
```

[http://localhost:3000](http://localhost:3000) 에 접속하여 서비스를 사용합니다.