import React,{ Component } from 'react';

class TodoList extends Component{

  render(){
    return(
      <div>
        <ul>
          {this.props.todo_data.map((data,i)=>
            <li key={i}>{data}</li>
          )}
        </ul>
      </div>

    );
  }
}

export default TodoList;
