import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

function TodoList()
{
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h5 class="card-header">Todo Application</h5>
                        <div class="card-body">
                            <Link to="/add-todo" class="btn btn-primary">Add Todo</Link>
                            <div class="table-responsive">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                        <th scope="col">Todo</th>
                                        <th scope="col">Description</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
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
