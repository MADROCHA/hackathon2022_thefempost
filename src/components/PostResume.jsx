import { Link } from "react-router-dom"


const PostResume = ({
  children,
  link,
}) => {
  return (
    <Link to={link}>
      <article>
        {children}
      </article>
    </Link>
  )
}

export default PostResume