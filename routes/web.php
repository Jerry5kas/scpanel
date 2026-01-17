<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/subscriptions', function () {
    return Inertia::render('Subscribe');
})->name('subscriptions');

Route::get('/products', function () {
    return Inertia::render('products/Category', ['category' => 'ghee']);
})->name('products');

Route::get('/products/{category}', function ($category) {
    return Inertia::render('products/Category', ['category' => $category]);
})->name('products.category');
