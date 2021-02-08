const Post = require('../models/Post');

const User = require('../models/User');

exports.getPosts = async (req, res) => {
  const fetchedPost = await User.getPosts();

  if (fetchedPost) {
    return res.status(200).json({
      message: 'Fetch success',
      data: fetchedPost,
    });
  }
};
