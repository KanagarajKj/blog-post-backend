const postActions = require("../module/post");


module.exports.addPost = async (req, res)=> {
try {
  const { fullName, postHeading, description } = req.body;
  let data = await postActions.addPost(fullName, postHeading, description);
  return res.json(data);
} catch (error) {
  res.status(422).json({
    errors: {
      body: ['Post Registration Failed! ', error.message],
      code: [error.code],
    },
  });
}
}

module.exports.getPost = async (req,res)=> {
    try {
      const data = await postActions.getAllPost();
      return res.json(data);
    } catch (error) {
      res.status(422).json({
        errors: {
          body: ['Get Post Failed! ', error.message],
          code: [error.code],
        },
      });
    }
}