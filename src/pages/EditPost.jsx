import React, { useEffect ,useState} from "react";
import service from "../appwrite/config";
import PostForm from "../components/PostForm";
import Container from "../components/container/Container";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const {slug} = useParams();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
