// eslint-disable-next-line react/prop-types, no-unused-vars
function Filter({option, setOption}) {

  const handleChange = (event) => {
    setOption(event.target.value)
  }

  return (
    <div>
        <select name="animals" onChange={handleChange} value={option}>
        <option value="All">All</option>
          <option value="Cats">Cats</option>
          <option value="Dogs">Dogs</option>
        </select>
    </div>
  )
}

export default Filter