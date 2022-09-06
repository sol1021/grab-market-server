var http = require("http");
//내 컴퓨터 주소 기본값으로 127.0.0.1이다.
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method == "POST") {
      res.end("생성되었습니다!");
    }
  }
});

//listen은 포트번호와 호스트네임으로 요청을 기다린다는 뜻
server.listen(port, hostname);

console.log("grab market server on");
