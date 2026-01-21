<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@freshtick.in'],
            [
                'phone_number' => '9087654321',
                'name' => 'Admin',
                'role' => 'admin',
                'password' => Hash::make('admin1233'),
                'status' => 'active',
            ]
        );

        $this->call(ThemeSettingSeeder::class);
    }
}
