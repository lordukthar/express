const express = require("express");
const request = require("request");
const cj = request.jar();

const app = express();
const port = 3000;

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

    Connection: "keep-alive",
  },
  Cookie: "cookieString",
  json: {},
  qs: {
    offset: 20,
  },
};

// example: http://localhost:3000/api/users/?api-key=foo
app.get("/users", function (req, res, next) {
  /* res.cookie("cookieName", "1", {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  }),*/

  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      console.log(body);
      res.send(body);
    } else {
      console.log(response.statusCode);
    }
  });

  // next();
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}
