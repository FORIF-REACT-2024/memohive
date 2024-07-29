#### Docker 를 이용하여 로컬 DB 이용

[Docker](https://www.docker.com/) 를 설치합니다.

`docker-compose.yml` 파일과 `mongodb_replica` 폴더를 외부 임의의 경로에 복사합니다.

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
