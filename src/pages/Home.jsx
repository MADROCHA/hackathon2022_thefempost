import { useState } from "react"
import Main from "../components/Main"
import PostResume from "../components/PostResume"
import Search from "../components/Search"
import Title from "../components/Title"


const Home = () => {
  const [search, setSearch] = useState("")
  // fake post before connect to api
  const fakePosts = [
    { id: 1, title: 'Title 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 2, title: 'Title 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada nec velit in rhoncus. Donec pharetra accumsan fermentum. Suspendisse in libero in massa.'},
    { id: 3, title: 'Title 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim at diam pretium gravida in.'},
    { id: 4, title: 'Title 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim mi, ultrices.'},
  ]

  let searchedPosts = []

  if (search.length > 0) {
    searchedPosts = fakePosts.filter(post => {
      const titleLow = post.title.toLowerCase();
      const textLow = post.text.toLowerCase();
      const searchLow = search.toLowerCase();
      
      return titleLow.includes(searchLow) || textLow.includes(searchLow);
    });
  } else {
    searchedPosts = fakePosts;
  }
  
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Main>
        <Title h='1'>Blog - TheFemPost</Title>
        <div
          className="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          { (searchedPosts.length > 0) ? (
              searchedPosts.map(post => (
                <PostResume link={`/post/${post.id}`}>
                  <Title h='3'>{post.title}</Title>
                  <p>{post.text}</p>
                </PostResume>
              ))
            ) : (
              <p className="text-2xl sm:col-span-2 md:col-span-3 lg:col-span-4">
                Search doesn't match any post
              </p>
            )
          }
        </div>
      </Main>
      <Search onChange={(e) => onSearchValueChange(e)} />
    </>
  )
}

export default Home