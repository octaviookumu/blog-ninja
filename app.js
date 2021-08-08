const express = require("express");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();
const port = 3000;

// connect to mongodb
const dbURI =
  "mongodb+srv://netninja:ninja1234@cluster0.1tbc4.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

// middleware
// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
