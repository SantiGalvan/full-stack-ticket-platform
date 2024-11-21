<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'label' => 'Bug',
                'color' => '#FF4500',
            ],
            [
                'label' => 'Richiesta di funzionalità',
                'color' => '#1E90FF',
            ],
            [
                'label' => 'Supporto tecnico',
                'color' => '#32CD32',
            ],
            [
                'label' => 'Feedback generale',
                'color' => '#FFD700',
            ],
            [
                'label' => 'Documentazione',
                'color' => '#8A2BE2',
            ],
            [
                'label' => 'Integrazioni',
                'color' => '#FF6347',
            ],
            [
                'label' => 'Account utente',
                'color' => '#4B0082',
            ],
            [
                'label' => 'Sicurezza',
                'color' => '#DC143C',
            ],
            [
                'label' => 'Pagamenti',
                'color' => '#228B22',
            ],
            [
                'label' => 'Altro',
                'color' => '#FF1493',
            ],
        ];

        foreach ($categories as $category) {

            $new_category = new Category();

            $new_category->fill($category);
            $new_category->save();
        }
    }
}
