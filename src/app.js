const express = require("express");
require("./db/mongoose");

const device_metadata = require("./models/device_metadata");
const gate_metadata = require("./models/gate_metadata");
const traffic_metadata = require("./models/traffic_data_metadata");

const app = express();

app.use(express.json());

app.post("/devices/register", (req, res) => {
  console.log(req.body);

  const device = new device_metadata(req.body);

  device
    .save()
    .then(() => {
      res.status(200).send(device);
    })
    .catch(e => {
      res.status(400).send(e._message);
    });
});

app.get("/", (req, res) => {
  res.json({ "message:": "Welcome!" });
});

app.get("/devices", (req, res) => {
  device_metadata
    .find()
    .then(devices => {
      res.send(devices);
    })
    .catch(e => {
      res.send(e);
    });
});

app.get("/gates", (req, res) => {
  gate_metadata
    .find()
    .then(gates => {
      res.send(gates);
    })
    .catch(e => {
      res.send(e);
    });
});

app.get("*", (req, res) => {
  res.send("<h1>404</h1><hr><p>The page you requested does not exist.</p>");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server up and running on port", port);
});
