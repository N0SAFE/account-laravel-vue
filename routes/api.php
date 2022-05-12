<?php

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\RegisterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public route here
Route::controller(RegisterController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
});

// route securise here
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('users', UserController::class);
});
