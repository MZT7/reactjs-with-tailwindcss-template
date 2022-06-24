<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();
        // $title = 'Home';
        return response()->json($tasks, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // $field = $request->validate([

        //     'name' => 'required|string',

        // ]);

        $task = Task::create([
            'name' => $request->name,

        ]);

        $response = [
            'task' => $task,
            'msg' => 'successful',

        ];




        return response()->json($response, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $task->update([

            'name' => $request->name,

        ]);

        $response = [
            'msg' => 'successful',

        ];

        return response()->json($response, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();
        $response = [
            'msg' => 'successful',

        ];

        return response()->json($response, 201);
    }

    public function comments()
    {
        $comment_ids = Comment::where("post_id", $this->id)->get();

        $comment_id = $comment_ids->map(function ($item, $key) {
            return Comment::find($item->id);
        });
        return $comment_id;
    }


    public function comm()
    {
        $comment_ids = Comment::where("post_id", $this->id)->get();

        foreach ($comment_ids as $key => $value) {
            Comment::find($value->id);
        }
        // return $comment_id
    }
}
