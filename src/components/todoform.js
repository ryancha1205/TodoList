import React,{ Component } from 'react';

class TodoForm extends Component{
constructor(props){
  super(props);
  this.state={
    text: '',
    todos:this.props.todo_data
  }
}


  updateText(event){
      console.log(event.target.value);
    this.setState({
      text:event.target.value
    })
  }


  addTodo(){
    this.props.addNewTodoFunc(this.state.text)  //add new text
    this.setState({
      text:''
    })
  }

  render(){
    return(
      <div>
      <input onChange={(event)=>this.updateText(event)}
             value={this.state.text}/>

           <button onClick={()=>this.addTodo()}>

             Add Todo</button>

      </div>
    );
  }
}
export default TodoForm;
