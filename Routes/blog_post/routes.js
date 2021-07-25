const BlogPost = require('../../Models/BlogPost/posts');

module.exports = function (app) {
	app.get('/posts', async function (req, res) {
		try {
			let posts = await BlogPost.find({});
			res.status(200).send({ message: 'Fetch Successfullys', posts: posts });
		} catch (e) {
			console.log(e);
			res.status(500).send({ message: 'Error Getting posts' });
		}
	});

	app.post('/posts/new', async function (req, res) {
		try {
			let postDetails = req.body;
			if (postDetails) {
				let post = new BlogPost(postDetails);
				let savedPost = await post.save();
				res.status(200).send({ message: 'Inserted Successfully' });
			}
		} catch (e) {
			res.status(500).send({ message: e });
		}
	});

	app.delete('/posts/delete/:id', async function (req, res) {
		try {
			let postId = req.params.id;
			await BlogPost.deleteOne({ _id: postId });
			let updatedPosts = await BlogPost.find({});
			res.status(200).send({ message: 'Deleted Successfully', posts: updatedPosts });
		} catch (e) {
			res.status(500).send({ message: e });
		}
	});

	app.put('/posts/edit/:id', async function (req, res) {
		try {
			let postId = req.params.id;
			let postChanges = req.body;
			await BlogPost.findOneAndUpdate({ _id: postId }, postChanges);
			res.status(200).send({ message: 'Edited Successfully' });
		} catch (e) {
			res.status(500).send({ message: e });
		}
	});
};
