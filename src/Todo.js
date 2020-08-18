import React from 'react';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <li>
            <div>
              <br/>
              <p>{this.props.text}</p>
              <p>{this.props.priority}</p>
              <p>{this.props.dueDate.toString()}</p>
            </div>
            <br/>
          </li>
        );
    }

}
