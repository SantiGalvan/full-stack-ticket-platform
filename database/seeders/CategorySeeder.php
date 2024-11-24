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
                'color' => '#8B0000',
            ],
            [
                'label' => 'Funzionalità',
                'color' => '#303C6C',
            ],
            [
                'label' => 'Supporto tecnico',
                'color' => '#3C6166',
            ],
            [
                'label' => 'Feedback generale',
                'color' => '#4E3629',
            ],
            [
                'label' => 'Documentazione',
                'color' => '#301934',
            ],
            [
                'label' => 'Integrazioni',
                'color' => '#654321',
            ],
            [
                'label' => 'Account utente',
                'color' => '#2F4F4F',
            ],
            [
                'label' => 'Sicurezza',
                'color' => '#3B0D0C',
            ],
            [
                'label' => 'Pagamenti',
                'color' => '#18453B',
            ],
            [
                'label' => 'Altro',
                'color' => '#4B0082',
            ],
        ];

        foreach ($categories as $category) {

            $new_category = new Category();

            $new_category->fill($category);
            $new_category->save();
        }
    }
}
