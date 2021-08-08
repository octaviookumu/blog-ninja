const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");

// blog routes
router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

// Make sure you place the blogs/create GET route ABOVE the /blogs/:id GET route in the code.
// Otherwise express will fire the / blogs /: id handler for requests to / blogs / create
// i.e it thinks create is an id
router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
