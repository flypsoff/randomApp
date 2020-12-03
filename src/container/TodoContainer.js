import { connect } from 'react-redux'
import { todoChecked, changeCurrentTodoValue, addTodo, deleteTodo } from '../actions'
import Todo from '../components/Todo/Todo'

const mapStateToProps = (state) => ({   
    todos: state.todos.currentTodos,
    currentTodoValue: state.todos.currentTodoValue
})

const mapDispatchToProps = (dispatch) => ({
    onTodoChecked: idItem => {dispatch(todoChecked(idItem))},
    onChangeCurrentTodoValue: currentTodoValue => dispatch(changeCurrentTodoValue(currentTodoValue)),
    onAddTodo: text => dispatch(addTodo(text)),
    onDeleteTodo: id => dispatch(deleteTodo(id))
})

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default TodoContainer