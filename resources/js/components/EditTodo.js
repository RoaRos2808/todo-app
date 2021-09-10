import React from 'react';

function EditTodo() 
{
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h5 class="card-header">Edit Todo</h5>
                        <div class="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Title </label>
                                    <input className="form-control" type ="text" />
                                </div>
                                <div className="form-group">
                                    <label>Description </label>
                                    <textarea className="form-control" type ="text" />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditTodo;