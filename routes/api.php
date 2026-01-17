<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\OtpAuthController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/auth/send-otp', [OtpAuthController::class, 'send']);
Route::post('/auth/verify-otp', [OtpAuthController::class, 'verify']);

