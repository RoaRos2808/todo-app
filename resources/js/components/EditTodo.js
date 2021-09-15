import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditTodo() {
    const [id, setId] = useState(window.location.pathname.split("/").pop());
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [todo, setTodo] = useState();

    useEffect(() => {
        getTodo();
    }, []);

    async function getTodo() {
        const response = await axios.get(
            "http://localhost:8000/api/todos/" + id
        );
        setTodo(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
    }

    async function editTodo(id, title, description) {
        const response = await axios.put(
            "http://localhost:8000/api/todos/" + id,
            {
                title: title,
                description: description,
            }
        );
    }

    async function uploadImage(id, formData) {
        await axios
            .post("http://localhost:8000/api/todos/" + id, formData)
            .then(() => toast("Image uploaded"))
            .catch(() => toast("Image upload failed!"));
    }

    const selectedImageHandler = (e) => {
        if (e.target.files.length) {
            setImage(e.target.files[0]);
        }
    };

    const uploadClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        uploadImage(id, formData);
    };

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
                                            value={title}
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
                                            value={description}
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input
                                                            className="btn btn-secondary"
                                                            type="file"
                                                            onChange={(e) => {
                                                                selectedImageHandler(
                                                                    e
                                                                );
                                                            }}
                                                        ></input>
                                                    </td>
                                                    <td>
                                                        <a
                                                            className="btn btn-primary"
                                                            onClick={(e) => {
                                                                uploadClick(e);
                                                            }}
                                                        >
                                                            Upload Image
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
            <ToastContainer />
        </div>
    );
}
export default EditTodo;
