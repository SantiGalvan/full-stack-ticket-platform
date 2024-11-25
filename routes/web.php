<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rotte Index dei ticket
    Route::get('/tickets', [TicketController::class, 'index'])->name('tickets.index');

    // Rotta Create dei Tickets
    Route::get('/tickets/create', [TicketController::class, 'create'])->name('tickets.create');

    // Rotta Show dei Tickets
    Route::get('/tickets/{slug}', [TicketController::class, 'show'])->name('tickets.show');

    // Rotta Edit dei Tickets
    Route::get('/tickets/{slug}/edit', [TicketController::class, 'edit'])->name('tickets.edit');

    // Rotta Store dei Tickets
    Route::post('/tickest', [TicketController::class, 'store'])->middleware([HandlePrecognitiveRequests::class])->name('tickets.store');

    // Rotta Update dei Tickets
    Route::put('/tickets/{ticket}', [TicketController::class, 'update'])->name('tickets.update');

    // Rotta delle Categories (Index, Create, Edit, Destroy)
    Route::resource('categories', CategoryController::class)->except('show', 'store');

    // Rotta Store delle Categories
    Route::post('/categories', [CategoryController::class, 'store'])->middleware([HandlePrecognitiveRequests::class])->name('categories.store');
});



require __DIR__ . '/auth.php';
