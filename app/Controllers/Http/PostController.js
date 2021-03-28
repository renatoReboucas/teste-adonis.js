'use strict'
const Post = use("App/Models/Post");
// import Post from 'App/Models/Post'
class PostController {
  async index({ request }) {
    // const data = request.only('nome')
    const posts = await Post.all();
    return posts;
  }
  async store({ request }) {
    const data = request.only(["title", "description"]);
    const post = await Post.create(data);
    return post;
  }
  async show({ params }) {
    const post = await Post.findOrFail(params.id);
    return post;
  }
  async update({ params, request }) {
    const post = await Post.findOrFail(params.id);
    const data = request.only(["title", "description"]);
    post.merge(data);
    await post.save();
    return post;
  }
  async destroy({ params }) {
    const post = await Post.findOrFail(params.id);
    await post.delete()
    // return post;
  }
}

module.exports = PostController
