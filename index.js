import express from "express";
const app = express();

app.use(express.json());

import connectDb from "./dbConfig.js";

connectDb();

import user from "./user.model.js";
app.get("/", async (req, res, next) => {
  try {
    //const users = await user.find();
    //console.log("done", users);
    return res.json({ msg: "2222its done bro" });
  } catch (Error) {
    console.log(Error);
  }
  //   return res.json({
  //     msg: "i am done with github actions temp hi rajmander",
  //   });
});

app.get("/welcome", (req, res, next) => {
  return res.json({ msg: req.body });
});

app.post("/mypost", (req, res, next) => {
  return res.json({ msg: "i m fine" });
});

app.delete("/mydelete", (req, res, next) => {
  return res.json({ msg: "delete it" });
});

app.put("/myput", (req, res, next) => {
  return res.json({ msg: "i am put" });
});

app.listen(9000, "0.0.0.0", () => {
  console.log(`Server is up and running`);
});
// new
// always
