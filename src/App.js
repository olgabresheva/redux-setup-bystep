import React, {useState} from 'react';
import {connect} from "react-redux";

function App(props) {

    const [todo, setTodo] = useState('');

    const addToDo = () => {
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <div className="App">
            React App<br/>
            <input type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
            <button onClick={addToDo}>Add Task</button>
            <ul>
                {
                    props.todos.map(el => <li key={el.title}>
                        {el.title}
                        {el.done ? <button>Done</button> : null}
                    </li>)
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({
        type: 'ADD_TODO',
        payload: todo})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
