import { Link } from "react-router-dom"


const PostResume = ({
  children,
  link,
}) => {
  return (
    <Link to={link}>
      <article
        className="flex flex-col justify-between h-full gap-5 p-5 bg-white border border-violet-light hover:bg-violet-light/10"
      >
        <div className="space-y-3 overflow-hidden h-36">
          {children}
        </div>
        <p className="text-right">Read more...</p>
      </article>
    </Link>
  )
}

export default PostResume