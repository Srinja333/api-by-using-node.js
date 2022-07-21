//const { json } = require('body-parser');
const Post=require('../models/post');
exports.getPosts=(req,res)=>{
   
    //res.json({
        //posts:[{title:"First Post"},{title:"second Post"}]
        
    //})
    const posts = Post.find()
        .select("_id title body")
        .then((posts)=>
        {
            res.json({posts});//here posts can be written as posts:posts
        })
        .catch(err =>console.log(err))
    };

    //console.log(typeof(Post));
    exports.createPost=(req,res)=>{
        const post =new Post(req.body);
        //console.log("CREATING POST:",req.body);
        
        //if use createPostValidator
        post.save().then(result => {
           res.json({
             post:result
           });
        });
    };