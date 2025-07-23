import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">User: {post.userId}</h6>
        <p className="card-text">{post.body}</p>

        <div className="mb-2">
          <strong>Reactions:</strong><br />
          Likes: {post.reactions?.likes ?? post.reactions ?? 0} | Dislikes: {post.reactions?.dislikes ?? 0}
        </div>

        <div className="mb-2">
          <strong>Tags:</strong>
          <ul>
            {post.tags?.map((tag, index) => (
              <li key={index}>#{tag}</li>
            ))}
          </ul>
        </div>

        <button
          className="btn btn-danger"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
