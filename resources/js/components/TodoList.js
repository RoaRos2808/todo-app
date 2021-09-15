import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import EditTodo from "./EditTodo";

function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        const response = await axios.get("http://localhost:8000/api/todos");
        setTodos(response.data);
    }

    async function deleteTodo(id) {
        await axios.delete("http://localhost:8000/api/todos/" + id);
        getTodos();
    }

    async function toggleTodo(todo) {
        await axios.put("http://localhost:8000/api/todos/" + todo.id, {
            completed: !todo.completed,
        });
        getTodos();
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
                                            <th scope="col"></th>
                                            <th scope="col">Todo</th>
                                            <th scope="col">Description</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.map((todo) => {
                                            return (
                                                <tr key={todo.id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                todo.completed
                                                            }
                                                            onChange={() => {
                                                                toggleTodo(
                                                                    todo
                                                                );
                                                            }}
                                                        ></input>
                                                    </td>
                                                    <td>{todo.title}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.completed}</td>
                                                    <td>
                                                        {todo.image_path && (
                                                            <img
                                                                width="100"
                                                                height="100"
                                                                className="image"
                                                                src={
                                                                    "/storage/" +
                                                                    todo.image_path
                                                                }
                                                                onError={(e) =>
                                                                    (e.target.src =
                                                                        "")
                                                                }
                                                            ></img>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={
                                                                "/edit-todo/" +
                                                                todo.id
                                                            }
                                                            className="btn btn-secondary"
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <a
                                                            onClick={() => {
                                                                deleteTodo(
                                                                    todo.id
                                                                );
                                                            }}
                                                            className="btn btn-danger"
                                                        >
                                                            Delete
                                                        </a>
                                                    </td>
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
