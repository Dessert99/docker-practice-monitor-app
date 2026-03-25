const http = require('http');
const os = require('os'); //  운영체제 정보를 가져오는 Node.js 내장 모듈

const server = http.createServer((req, res) => {
    if (req.url === '/api/status') {
        // 서버의 상태 정보를 객체로 모은다.
        const status = {
            hostname: os.hostname(), // 호스트 이름
            totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`, // 시스템의 전체 RAM 용량을 GB 단위로 표시
            freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`, // 시스템에서 현재 사용 가능한 유휴 RAM 용량을 GB 단위로 표시
            uptime: `${(os.uptime() / 3600).toFixed(2)} Hours`, // 컴퓨터가 마지막으로 재부팅된 후 지금까지 작동한 시간을 시간 단위로 표시
        };

        res.writeHead(200, { 'Content-type': 'application/json; charset-utf-8' });
        res.end(JSON.stringify(status, null, 2));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('모니터링 서버가 작동 중입니다. /api/status 로 접속해보세요.');
    }
});

// 8080 포트에서 서버 실행
server.listen(8080, () => {
    console.log('머니터링 서버 도는 중t 8080');
});
