import { connect } from 'react-redux'
import { todoChecked, changeCurrentTodoValue, addTodo, deleteTodo, deleteAllTodo } from '../actions/todos'
import Todo from '../components/Todo/Todo'

const mapStateToProps = (state) => ({   
    todos: state.todos.currentTodos,
    currentTodoValue: state.todos.currentTodoValue
})

const mapDispatchToProps = (dispatch) => ({
    onTodoChecked: idItem => dispatch(todoChecked(idItem)),
    onChangeCurrentTodoValue: currentTodoValue => dispatch(changeCurrentTodoValue(currentTodoValue)),
    onAddTodo: title => dispatch(addTodo(title)),
    onDeleteTodo: id => dispatch(deleteTodo(id)),
    onDeleteAllTodo: () => dispatch(deleteAllTodo())
})

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default TodoContainer