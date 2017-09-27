# TODO list

Todo list a simple react components App
you can add items on typing what you want to add

# App

- App is the parent component,
- I added the children component TodoForm and TodoList
- set state of todos, In order to use the state
- I needed to fetch the state into the other components
### Transfer state to other components
```sh
$<TodoForm todo_data={this.state.todos}
addNewTodoFunc={this.addNewTodo.bind(this)}/>
$<Todolist todo_data={this.state.todos}/>
```
### TodoForm
-In order to make value of what I have typed
-Set state text as what I type

```
constructor(props){
  super(props);
  this.state={
    text: '',
    todos:this.props.todo_data
  }
}
<input onChange={(event)=>this.updateText(event)}
       value={this.state.text}/>
updateText(event){
    console.log(event.target.value);
  this.setState({
    text:event.target.value
  })
}
```

- Button function as fetch todos data from app Component
- and add data of what I have typed, using text
```
 <button onClick={()=>this.addTodo()}>
```
```
addTodo(){
  this.props.addNewTodoFunc(this.state.text)  //add new text
  this.setState({
    text:''
  })
}
```


### Usage
```
$npm start

```
Visit http://localhost:3000/
