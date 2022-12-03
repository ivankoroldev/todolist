import React from "react";
import './App.scss';
import ToDoList from "./components/ToDoList";

class App extends React.Component {

  render() {
    return (
        <div className={'wrapper'}>
            <div className="header">
                <div className="container">
                    <span className="fake-logo">TODOLIST</span>
                </div>
            </div>
            <div className="mainContentWrap">
                <ToDoList/>
            </div>
        </div>
    )
  }
}

export default App;
