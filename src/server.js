import express from "express";

const app = express();

app.set("view engine", "pug"); // pug 페이지들을 렌더하기 위해 pug설정
app.set("views", __dirname + "/views"); // views 폴더내에 pug파일이 있어서 경로 설정함
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
