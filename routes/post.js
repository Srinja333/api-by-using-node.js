const express=require('express');

const {getPosts,createPost}=require('../controllers/post');

const router=express.Router();

const validator=require('../validator');//donot need to give index


router.get('/',getPosts);
router.post('/post',validator.createPostValidator,createPost);


module.exports=router;