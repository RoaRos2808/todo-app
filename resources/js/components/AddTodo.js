import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function addTodo(title, description) {
        const response = await axios.post("http://localhost:8000/api/todos", {
            title: title,
            description: description,
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h5 className="card-header">Add Todo</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Title </label>
                                    <input
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description </label>
                                    <textarea
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            addTodo(title, description);
                                        }}
                                        type="button"
                                        className="btn btn-success"
                                    >
                                        Add
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddTodo;
