const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
app.use(express.json());
// const data2 = {
//   id: 1001,
//   first_name: "Test First Name",
//   last_name: "Test Last Name",
//   email: "ydalesco0@test.com",
//   gender: "Genderfluid",
//   ip_address: "164.215.194.36",
//   age: 65,
// };
// let data3 = {
//   ...data,
//   ...data2,
// };

//get => whenenver you want to get some data from the servers
// post => whenenver you want to create some data from the servers
// patch => whenenver you want to update some data from the servers
// delete => whenenver you want to delete some data from the servers
app.get("/", function (req, res) {
  return res.send("Welcome to Home page");
});
app.get("/users", function (req, res) {
  return res.send(data);
});

app.post("/users", function (req, res) {
  console.log(req.body);
  data2 = req.body;
  data3 = {
    ...data,
    ...data2,
  };
  return res.status(200).json(data3);
});
app.patch("/users/:id", function (req, res) {
  let id = req.params.id;
  let body = req.body;

  let name = body.first_name;

  let req_object;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      req_object = data[i];
      break;
    }
  }
  req_object.first_name = name;

  return res.status(200).json({
    updated: req_object,
  });
});
app.delete("/users/:id", function (req, res) {
  let id = req.params.id;
  let body = req.body;

  let name = body.first_name;

  let req_object;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      req_object = data[i];
      break;
    }
  }

  delete req_object.first_name;

  return res.status(200).json({
    updated: req_object,
  });
});
app.listen(5000, () => {
  console.log("port:5000");
});
