import { useParams, Link } from "react-router-dom"


const Post = () => {
  const params = useParams();

  return (
    <>
      <Link to="/">Go home</Link>
      <div>Post {params.id}</div>
    </>
  )
}

export default Post