## MongoDB 생성을 위한 Docker Compose
1. docker 설치
2. docker-compose.yml 파일 내에서 \<root\> \<password\> 를 임의의 데이터베이스의 접근 계정으로 수정  
ex) admin / changeme
3. docker-compose.yml 파일 내에서 \<localpath\> 를 로컬의 데이터 저장할 경로로 수정  
ex) /Users/chojake/docker/mongodb
4. 해당 경로의 터미널에서 아래 커맨드 실행  
\> docker compose up -d  
5. localhost:8081 로 접속하여 memohive 데이터베이스 생성

위와 같은 절차를 다 거쳤다면
> mongodb://\<root>:\<password>@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin

위의 경로로 데이터베이스 접속 가능
