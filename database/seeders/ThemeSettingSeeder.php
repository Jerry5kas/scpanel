<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ThemeSetting;

class ThemeSettingSeeder extends Seeder
{
    public function run(): void
    {
        ThemeSetting::firstOrCreate(
            ['id' => 1],
            [
                'app_name' => 'FreshTick',
                'primary_color' => '#46ae97',
                'secondary_color' => '#c4f5ea',
                'tertiary_color' => '#cf992c',
            ]
        );
    }
}
