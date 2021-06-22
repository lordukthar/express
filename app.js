/* const express = require("express");
const request = require("request");
var cookieSession = require("cookie-session");
const cj = request.jar();

const api = require("./api/getUsers.jsx");

const api_2 = require("./api/getUsersWithCookies.jsx");

const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

const apiOptions = {
  server: "http://localhost:8080/",
};

const requestOptions = {
  url: "http://localhost:8080/users",
  method: "GET",
  headers: {
    "Apa-Bapa": "aaaa",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",
    "Set-Cookie": "cookieString",
    Cookie: "kyes",

    Connection: "keep-alive",
  },
  Cookie: "cookieString",
  json: {},
  qs: {
    offset: 20,
  },
};

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

// example: http://localhost:3000/api/users/?api-key=foo
app.get("/users", function (req, res, next) {
  api.getUsers(req, res, next);
});

app.get("/users_with_cookies", function (req, res, next) {
  api_2.getUsersWithCookies(req, res, next);
});


if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}
 */

var cookieSession = require("cookie-session");
var express = require("express");

var app = express();

var cors = require("cors");
app.use(cors());

app.set("trust proxy", 1); // trust first proxy

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.get("/", function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1;
  req.session.jsessonid = (req.session.jsessonid || 0) + 1;

  // Write response
  res.end(req.session.views + " views");
});

app.listen(3000);
