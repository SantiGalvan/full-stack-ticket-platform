<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return inertia('Categories/Index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'label' => 'required|string|min:5|max:25',
            'color' => 'required|string|min:7|max:7'
        ], [
            'label.required' => 'Il label della categoria è obbligatorio',
            'label.min' => 'Il label non può essere più corto di :min caratteri',
            'label.max' => 'Il label non può essere più corto di :max caratteri',
            'color.required' => 'Il colore della categoria è obbligatorio',
            'color.min' => 'Il colore deve avere 7 caratteri',
            'color.max' => 'Il colore deve avere 7 caratteri'
        ]);

        $data = $request->all();

        $category = Category::create($data);

        return to_route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return inertia('Categories/Edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'label' => ['required', 'string', 'min:5', 'max:25', Rule::unique('categories')->ignore($category->id)],
            'color' => ['required', 'string', 'min:7', 'max:7 ', Rule::unique('categories')->ignore($category->id)]
        ], [
            'label.required' => 'Il label della categoria è obbligatorio',
            'label.min' => 'Il label non può essere più corto di :min caratteri',
            'label.max' => 'Il label non può essere più corto di :max caratteri',
            'color.required' => 'Il colore della categoria è obbligatorio',
            'color.min' => 'Il colore deve avere 7 caratteri',
            'color.max' => 'Il colore deve avere 7 caratteri'
        ]);

        $data = $request->all();

        $category->fill($data);

        $category->update();

        return to_route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return to_route('categories.index');
    }
}
