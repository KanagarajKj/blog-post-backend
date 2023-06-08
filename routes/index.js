const express =require("express");
const router = express.Router();
const PostController = require("../controllers/post");

router.post("/addpost", PostController.addPost);
router.get('/getallpost', PostController.getPost);

module.exports = router;