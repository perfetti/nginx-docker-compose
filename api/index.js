const express = require("express");
const app = express();
const port = 8181;

app.get("/", (req, res) => {
  res.send({ message: "alive" });
});

app.get("/summary", (req, res) => {
  res.send({
    source: "https://en.wikipedia.org/wiki/HTTP",
    summary: `HTTP, or Hypertext Transfer Protocol, is an application layer protocol used in the World Wide Web to facilitate data communication. It's the foundation for exchanging information between web browsers and servers. The protocol's functions include requests, responses, methods, and headers. HTTP has evolved over time, with versions 1.0, 1.1, 2, and 3 currently in use. HTTPS, a secure version of HTTP, is widely used for increased security. HTTP is a fundamental protocol in web communication, providing a structured method for data transfer and enabling the functionality of the internet.`,
  });
});

app.get("/books", (req, res) => {
  res.send([
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "Moby" },
    { id: 3, title: "War and Peace" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
