<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $shared_data =  [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];

        // Controllo se ci sono dati in sessione
        if (Session::has('message')) {
            $shared_data = [
                ...$shared_data,
                'flash' => [
                    'message' => session('message')
                ]
            ];
        }

        return $shared_data;
    }
}
