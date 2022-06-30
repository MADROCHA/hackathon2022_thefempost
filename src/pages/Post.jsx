import { useParams, Link } from "react-router-dom"
import Main from "../components/Main";


const Post = () => {
  const params = useParams();

  return (
    <Main>
      <Link to="/">Go home</Link>
      <div>Post {params.id}</div>
    </Main>
  )
}

export default Post