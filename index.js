import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    msg: "hello from the server",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on http://${"localhost"}:${PORT}`);
});
