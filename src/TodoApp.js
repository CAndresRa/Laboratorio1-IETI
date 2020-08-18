import React from 'react';
import {TodoList} from './TodoList'
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [{text:"Learn React", priority:5, dueDate: new Date() },
        {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
        {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }],
      text : '',
      priority : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
  }

  handleChangeText(event) {
   this.setState({ text: event.target.value });
   console.log(this.state.text);
  }

  handleChangePriority(event) {
    this.setState({ priority: event.target.value });
    console.log(this.state.priority);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      text : this.state.text,
      priority : this.state.priority,
      dueDate : new Date()
    }
    this.setState(prev => ({
      items: [...prev.items, newItem]
    }))
    console.log(this.state.items);

  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-TEXT">
             Text
          </label>
          <input  onChange={this.handleChangeText} id="text" required="true"/>
          <label htmlFor="new-PRIORITY">
            Priority
          </label>
          <input type="Number" onChange={this.handleChangePriority} id="priority" required="true"/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

}
