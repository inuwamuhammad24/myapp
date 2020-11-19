import React from 'react'
import TodoItem from './TodoItems'

class TodoList extends React.Component {
    render() {
        return (
            <>
                {this.props.todos.map(todo => 
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        delTodo={this.props.delTodo} 
                    />
                )}
            </>
        )
    }
}

export default TodoList