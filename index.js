import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  return res.json({
    msg: "i am done with this",
  });
});

app.listen(9000, "0.0.0.0", () => {
  console.log(`Server is up and running`);
});
