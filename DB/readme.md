## MongoDB 생성을 위한 Docker Compose
1. docker 설치
2. docker-compose.yml 파일 내에서 \<root\> \<password\> 를 임의의 데이터베이스의 접근 계정으로 수정  
ex) user / password
3. docker-compose.yml 파일 내에서 \<localpath\> 를 로컬의 데이터 저장할 경로로 수정  
ex) /Users/chojake/docker/mongodb
4. 터미널에서 아래의 커맨드를 실행하여 key 생성  
\> openssl rand -base64 756 > ./mongodb.key  
생성한 키를 3 에서 지정한 localpath/key/ 에 저장  
5. 해당 경로에 docker-compose.yml 파일 저장 후 해당 경로의 터미널에서 아래 커맨드 실행  
\> docker compose up -d  
6. 도커에서 mongo1 컨테이너의 open in terminal 클릭하여 터미널 실행
7. 아래 커맨드 실행하여 mongosh 접속  
\> mongosh -u root(2에서지정) -p password(2에서지정)  
8. 아래 커맨드 실행하여 replica set의 이름과 멤버 지정  
\> rs.initiate({_id: "myReplicaSet", members:[{_id:0, host:"mongo1"}, {_id:1, host:"mongo2"}, {_id:2, host:"mongo3"}]});  
7. localhost:8081 로 접속하여 memohive 데이터베이스 생성

위와 같은 절차를 다 거쳤다면 아래의 경로로 데이터베이스 접속 가능
> mongodb://root:password@localhost:27017/memohive?retryWrites=true&w=majority&authSource=admin&directConnection=true

!! 현재 윈도우에서는 로컬로 저장한 키에 대하여 wsl 에서 권한을 받지 못해 mongo 인스턴스에서 key를 읽지 못하는 문제가 발생
