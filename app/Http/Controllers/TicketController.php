<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = Ticket::all();
        return inertia('Tickets/TicketsIndex', compact('tickets'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        $users = User::whereIsAdmin(false)->get();
        return inertia('Tickets/Create', compact('categories', 'users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:5|max:50|string',
            'description' => 'required|string|min:10',
            'user' => 'required|exists:users,id',
            'category' => 'required|exists:categories,id'
        ], [
            'title.required' => 'Il titolo del ticket è obbligatorio',
            'title.min' => 'Il titolo non può essere più corto di :min caratteri',
            'title.max' => 'Il titolo non può essere più corto di :max caratteri',
            'description.required' => 'La descrizione del ticket è obbligatoria',
            'descriptio.min' => 'La descrizione non può essere più corto di :min caratteri',
            'user.required' => 'L\'opeartore è obbligatorio',
            'user.exists' => 'Operatore non valido',
            'category.required' => 'La categoria è obbligatoria',
            'category.exists' => 'Categoria non valida'
        ]);

        $data = $request->all();

        $new_ticket = new Ticket();

        $new_ticket->fill($data);

        $new_ticket->slug = Str::slug($new_ticket->title);

        $new_ticket->user_id = $data['user'];

        $new_ticket->category_id = $data['category'];

        $new_ticket->save();

        return to_route('tickets.show', $new_ticket->slug);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $ticket = Ticket::whereSlug($slug)->first();
        return inertia('Tickets/TicketShow', compact('ticket'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $ticket = Ticket::whereSlug($slug)->first();
        $categories = Category::all();
        $users = User::whereIsAdmin(false)->get();

        return inertia('Tickets/Edit', compact('ticket', 'users', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
