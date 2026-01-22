<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ThemeSettingController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/subscriptions', function () {
    return Inertia::render('Subscribe');
})->name('subscriptions');

Route::get('/cart', function () {
    return Inertia::render('Cart');
})->name('cart');

Route::get('/more', function () {
    return Inertia::render('More');
})->name('more');

Route::get('/products', function () {
    return Inertia::render('products/Category', ['category' => 'ghee']);
})->name('products');

Route::get('/products/{category}', function ($category) {
    return Inertia::render('products/Category', ['category' => $category]);
})->name('products.category');

Route::get('/deliveries', function () {
    return Inertia::render('Deliveries');
})->name('deliveries');

Route::get('/wallet', function () {
    return Inertia::render('Wallet');
})->name('wallet');

Route::get('/verify-otp', function () {
    return Inertia::render('Admin/Auth/VerifyOtp');
})->name('admin.otp.verify');

Route::get('/forgot-password', function () {
    return Inertia::render('Admin/Auth/ForgotPassword');
})->name('admin.forgot.password');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('customer.login');

Route::middleware(['web', 'guest.admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
});

Route::middleware(['web', 'auth.admin', 'ensure.admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', [ThemeSettingController::class, 'edit'])->name('settings');
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
    Route::get('/theme', [ThemeSettingController::class, 'edit'])->name('theme.edit');
    Route::put('/theme', [ThemeSettingController::class, 'update'])->name('theme.update');
});
