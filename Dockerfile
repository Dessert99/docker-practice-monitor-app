# 베이스 이미지 설정. node:18이 깔려있는 리눅스를 통째로 가져온다. -> 이것 또한 node 도커 이미지를 가져온 것.
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY server.js .

# 포트 노출 안내
EXPOSE 8080

# 실행 명령어 지정
CMD ["node", "server.js"]