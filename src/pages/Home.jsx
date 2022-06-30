import Main from "../components/Main"
import PostResume from "../components/PostResume"
import Title from "../components/Title"


const Home = () => {
  // fake post before connect to api
  const fakePosts = [
    { id: 1, title: 'Title 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 2, title: 'Title 2', text: 'Lorem bla bla'},
    { id: 3, title: 'Title 3', text: 'Lorem bla bla'},
    { id: 4, title: 'Title 4', text: 'Lorem bla bla'},
  ]

  return (
    <Main>
      <Title h='1'>Blog - TheFemPost</Title>
      <div
        className="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {
          fakePosts.map(post => (
            <PostResume link={`/post/${post.id}`}>
              <Title h='3'>{post.title}</Title>
              <p>{post.text}</p>
            </PostResume>
          ))
        }
      </div>
    </Main>
  )
}

export default Home