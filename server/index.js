const cors = require("cors");
const express = require("express");
const proxy = require("./proxy");
const fileUpload = require("express-fileupload");
const { body, check, param, validationResult } = require("express-validator");
// const middlewareWrapper = require('cors')

const PORT = 80;
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

// middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.get("/message", cors(corsOptions), async (req, res) => {
  res.send({ message: "We are the dunder Cats - hoo! " });
});

app.get("/members", cors(corsOptions), async (req, res) => {
  const members = await proxy.selectMembers();
  members ? res.send(members) : res.status(404).send({ message: "Not Found!" });
});

app.get(
  "/member/:id",
  cors(corsOptions),
  param("id").isNumeric(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const memberId = req.params["id"];
    const member = await proxy.selectMemberById(memberId);
    member ? res.send(member) : res.status(404).send({ message: "Not found." });
  }
);

app.get("/member", cors(corsOptions), async (req, res) => {
  const firstName = req.query.first_name;
  const lastName = req.query.last_name;
  const member = await proxy.selectMemberByName(firstName, lastName);
  res.send(member);
  // console.log(member)
});

app.post("/member", cors(corsOptions), async (req, res) => {
  const member = req.body;
  console.log(member);
  const newMember = await proxy.insertMember(member);
  res.send(newMember);
});

// app.post("/upload", cors(corsOptions), async (req, res) => {
//   let pic;
//   let uploadPath;

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }
//   pic = req.files.pic;
//   // console.log(pic);
//   uploadPath = __dirname + '/upload/' + pic.name

//   // Use mv() to place file on the server
//   pic.mv(uploadPath, async function(err){
//     if(err) return res.status(500).send(err);

//     const newPic = await pool.query("UPDATE members SET prof_pic = ? WHERE member_id = 20", [pic.name])

//     res.send('File uploaded!')
//   })
// });

app.listen(PORT, () => {
  console.log(`Express - we are up and running on port: ${PORT}`);
});
