const express = require('express');

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

const { errorHandler } = require('./middlewares/errorHandler');

const User = require('./models/User');
const Post = require('./models/Post');
const sequelize = require('./utils/database');

const app = express();

app.use(express.json());

app.use('/api', postRoutes);
app.use(authRoutes);

app.use(errorHandler);

Post.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Post);

(async () => {
  try {
    await sequelize.sync();
    app.listen(5000);
  } catch (err) {
    console.log(err);
  }
})();
