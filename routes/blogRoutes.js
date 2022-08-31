const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const blogController = require("../controllers/blogController");

// blog routes
router.get("/create", blogController.blog_create_get);

router.get("/", blogController.blog_index);

//handle post request
router.post("/", blogController.blog_create_post);

router.get("/:id", blogController.blog_detail);

router.delete("/:id", blogController.blog_delete);

// router.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.get("/single-blog", (req, res) => {
//   Blog.findById("5ea99b49b8531f40c0fde689")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
