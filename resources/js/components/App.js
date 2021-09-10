import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Component } from "react";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import AddTodo from "./AddTodo";

function App() {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <TodoList />
                </Route>
                <Route path="/add-todo">
                    <AddTodo />
                </Route>
                <Route path="/edit-todo">
                    <EditTodo />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
