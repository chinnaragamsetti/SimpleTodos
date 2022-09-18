import {Component} from 'react'
import ListProfile from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {finalTodosList: initialTodosList}

  deleteTodo = id => {
    const {finalTodosList} = this.state
    const filteredTodoList = finalTodosList.filter(each => each.id !== id)
    this.setState({
      finalTodosList: filteredTodoList,
    })
  }

  render() {
    const {finalTodosList} = this.state
    return (
      <div className="mainbg">
        <div className="innerbg">
          <h1 className="h">SimpleTodos</h1>
          <ul className="listsContainer">
            {finalTodosList.map(eachList => (
              <ListProfile
                listDetails={eachList}
                key={eachList.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
