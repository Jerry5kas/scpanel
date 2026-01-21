<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThemeSetting extends Model
{
    protected $fillable = [
        'app_name',
        'primary_color',
        'secondary_color',
        'tertiary_color',
    ];
}
