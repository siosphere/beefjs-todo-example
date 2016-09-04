import * as React from "react";

export class Middle extends React.Component<{}, {}>
{
    render()
    {
        return <div className="middle">
            <div className="container">
                {this.props.children}
                <div>TODO write content</div>
                <button onClick="App.createTodo()">Create a Todo</button>
            </div>
        </div>
    }

}