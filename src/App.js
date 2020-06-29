import React from 'react';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
     React App
        <ul>
            {
                props.todos.map(el => <li key={el.title}>
                    {el.title}
                    {el.done ?  <button>Done</button> : null}
                </li>)
            }
        </ul>

    </div>
  );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps) (App);
