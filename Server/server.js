var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Server is up & running!");
});

const items = [
  {
    title: "Title 1",
    content: "This is content 1",
  },
  {
    title: "Title 2",
    content: "This is content 2",
  },
  {
    title: "Title 3",
    content: "This is content 3",
  },
  {
    title: "Title 4",
    content: "This is content 4",
  },
];
app.get("/api/v1/items", (req, res) => {
  const reqDetails = {
    Component: req.query.component,
    host: req.headers.host,
    referer: req.headers.referer,
    origin: req.headers.origin,
    sec_fetch_mode: req.headers["sec-fetch-mode"],
    sec_fetch_site: req.headers["sec-fetch-site"],
  };
  console.log("Request Details: ", reqDetails);
  res.send(items);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server is listening at port: ${port}`);
});
