
const Search = ({
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="fixed bottom-0 w-full p-5 border-t outline-none border-violet-light focus:bg-violet-light/10"
      onChange={onChange}
    />
  )
}

export default Search