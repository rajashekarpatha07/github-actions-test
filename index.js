import express from "express";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    msg: "hello from the server",
  });
});

app.listen(8080, ()=>{
    console.log("server is listing on post 8080")
})