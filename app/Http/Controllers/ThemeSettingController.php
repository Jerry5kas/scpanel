<?php

namespace App\Http\Controllers;

use App\Models\ThemeSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ThemeSettingController extends Controller
{
    public function edit()
    {
        $theme = ThemeSetting::first();
        return Inertia::render('ThemeSetting/Edit', compact('theme'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'app_name' => 'required|string|max:255',
            'primary_color' => 'required|string|max:7',
            'secondary_color' => 'required|string|max:7',
            'tertiary_color' => 'required|string|max:7',
        ]);

        ThemeSetting::first()->update($request->only([
            'app_name',
            'primary_color',
            'secondary_color',
            'tertiary_color',
        ]));

        return redirect()->back()->with('success', 'Theme updated.');
    }
}