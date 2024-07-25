import React, { useEffect } from "react";
import service from "../appwrite/config";
import PostCard from "../components/PostCard";
import { useState } from "react";
import Container from "../components/container/Container";
import { useNavigate } from "react-router-dom";

function AllPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log(posts);
      }
    });
  },[navigate]);

  return (
    <div>
     <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                    {console.log(post)}
                        <PostCard 
                        featuredImage={post.featuredImage}
                        $id={post.$id}
                        title={post.title}
                         />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  );
}

export default AllPost;
