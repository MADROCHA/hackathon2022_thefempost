import PostResume from "../components/PostResume"


const Home = () => {
  // fake post before connect to api
  const fakePosts = [
    { id: 1, title: 'Title 1', text: 'Lorem bla bla'},
    { id: 2, title: 'Title 2', text: 'Lorem bla bla'},
    { id: 3, title: 'Title 3', text: 'Lorem bla bla'},
    { id: 4, title: 'Title 4', text: 'Lorem bla bla'},
  ]

  return (
    <>
      <h1>Blog - TheFemPost</h1>
      <div>
        {
          fakePosts.map(post => (
            <PostResume link={`/post/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </PostResume>
          ))
        }
      </div>
    </>
  )
}

export default Home