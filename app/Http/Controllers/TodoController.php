<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

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
        $request->validate([
            'title' => 'required|max:20',
            'description' => 'required|max:30',
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

    public function show(Request $request, Todo $todo)
    {
        return response()->json($todo);
    }

    public function update(Request $request, Todo $todo)
    {
        $request->validate([
            'title' => 'nullable|string|max:20',
            'description' => 'nullable|string|max:30',
            'completed' => 'nullable|boolean'
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

    public function uploadImage(Request $request, Todo $todo)
    {
        $request->validate(['image'=>'required']);

        $extension = '.' . $request->file('image')->getClientOriginalExtension();
        $todo->update(['image_path' => $todo->id . $extension]);
        Storage::disk('public')->put($todo->id . $extension, file_get_contents($request->file('image')));

        return response(201);
    }
}
