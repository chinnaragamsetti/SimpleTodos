// Write your code here
import './index.css'

const ListProfile = props => {
  const {listDetails, deleteTodo} = props
  const {title, id} = listDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="listContainer">
      <h1 className="h2">{title}</h1>
      <button className="butt" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default ListProfile
