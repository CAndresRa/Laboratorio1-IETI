import React from 'react';
import {Todo} from './Todo'
export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      const data = this.props.todoList.map((information, index) => {
        return( <Todo
                    key = {index}
                    text = {information.text}
                    priority = {information.priority}
                    dueDate = {information.dueDate} />
        );
      }); 

      return (
        <ul>
          {data}
        </ul>
      );
    }

}
