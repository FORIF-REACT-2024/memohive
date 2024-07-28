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

#### Docker를 이용하여 로컬 DB 이용

[Docker](https://www.docker.com/) 를 설치합니다.

`DB/docker-compose.yml` 파일을 외부 경로에 복사합니다.

복사한 `docker-compose.yml` 파일 내에서 `root` 와 `password` 를 임의의 데이터베이스의 접근 계정으로 수정합니다.  
```
e.g.) user / password
```  
`docker-compose.yml` 파일 내에서 `localpath` 를 로컬의 DB 데이터 저장할 경로로 수정  
```
e.g.) /Users/chojake/docker/mongodb
```

터미널에서 아래의 커맨드를 실행하여 key를 생성합니다.  
```
# openssl rand -base64 756 > ./mongodb.key
```
생성한 키를 위에서 지정한 `localpath` 내의 `/key` 폴더에 에 저장합니다.  

해당 경로에 docker-compose.yml 파일 저장 후 해당 경로의 터미널에서 아래 커맨드 실행합니다.  
```
# docker compose up -d
```

도커에서 mongo1 컨테이너의 open in terminal 클릭하여 터미널 실행합니다.

아래 커맨드 실행하여 mongosh 접속합니다.  
```
# mongosh -u root(2에서지정) -p password(2에서지정)
```

아래 커맨드 실행하여 replica set의 이름과 멤버를 지정합니다.
```
# rs.initiate({
    _id: "myReplicaSet", 
    members:[
      {_id:0, host:"mongo1"}, 
      {_id:1, host:"mongo2"}, 
      {_id:2, host:"mongo3"}
    ]
  });
```

localhost:8081 로 접속하여 memohive 데이터베이스를 생성합니다.

위와 같은 절차를 다 거쳤다면 아래의 경로로 데이터베이스에 접속 가능합니다.
```
mongodb://root:password@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin&directConnection=true
```

> 현재 윈도우에서는 로컬로 저장한 키에 대하여 wsl 에서 권한을 받지 못해 mongo 인스턴스에서 key를 읽지 못하는 문제가 발생중입니다. wsl 내에 키를 복사하여 사용하거나 wsl 에 윈도우를 권한 설정과 함께 마운트하여 사용하시기 바랍니다.

### Service
`.env` 파일을 생성한 후 DB 를 생성할 때 만들어진 데이터베이스 경로를 아래와 같이 넣어줍니다.
```
DATABASE_URL="root:password@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin&directConnection=true"
```

아래의 커맨드를 통해 필요한 모듈을 설치합니다.
```
# npm i
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