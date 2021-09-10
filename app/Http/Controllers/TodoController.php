<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Todo::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        info($request->all());
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            // 'completed' => 'boolean'
        ]);
        $todo = Todo::create($request->all());

        return response()->json($todo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function completedtoggle(Request $request, Todo $todo)
    {
        $todo->update([
            'completed' => !$todo->completed
        ]);

        return response()->json(200);
    }

    public function update(Request $request, Todo $todo)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'completed' => 'boolean'
        ]);
        $todo->update($request->all());

        return response()->json($todo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function delete(Todo $todo)
    {
        $todo->delete();

        return response()->json(200);
    }
}
