import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function EditTodo() {
    const id = window.location.pathname.split("/").pop();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function editTodo(id, title, description) {
        // console.log(title);
        console.log(id);
        const response = await axios.put(
            "http://localhost:8000/api/todos/" + id,
            {
                id: id,
                title: title,
                description: description,
            }
        );
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
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
                                                editTodo(
                                                    id,
                                                    title,
                                                    description
                                                );
                                            }}
                                            type="button"
                                            className="btn btn-success"
                                        >
                                            Save
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditTodo;
