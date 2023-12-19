import style from '../styles/Filter.module.css'

// eslint-disable-next-line react/prop-types
function Filter({option, setOption}) {

  const handleChange = (event) => {
    setOption(event.target.value)
  }

  return (
    <div className={style.filters}>
        <select name="animals" onChange={handleChange} value={option}>
        <option value="All">All</option>
          <option value="Cats">Cats</option>
          <option value="Dogs">Dogs</option>
        </select>
    </div>
  )
}

export default Filter