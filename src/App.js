
import React , {Component} from 'react';
import TodoItems from './TodoItems/TodoItems';
import	AddItems from  './AddItems/AddItems'


class App extends Component {

  state = {
    items: [{id: 1,name :"Ahmed", age:"21"},
    {id: 2,name :"Tarek", age:"28"},
    {id: 3,name :"Ali", age:"30"},
    {id: 4,name :"Hamed", age:"25"},
      


    ]
  }

  handleAdd = (item)=>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items })

  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items });

  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItems handleAdd={this.handleAdd}/>
      </div>
    );
  }
 
}

export default App;
