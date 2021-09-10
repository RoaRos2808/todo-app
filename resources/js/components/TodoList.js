import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        const response = await axios.get("http://localhost:8000/api/todos");
        setTodos(response.data);
        // console.log(response.data);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h5 className="card-header">Todo Application</h5>
                        <div className="card-body">
                            <Link to="/add-todo" className="btn btn-primary">
                                Add Todo
                            </Link>
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Todo</th>
                                            <th scope="col">Description</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.map((todo) => {
                                            return (
                                                <tr key={todo.title}>
                                                    <td>{todo.title}</td>
                                                    <td>{todo.description}</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
