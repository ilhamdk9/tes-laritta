<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FibonacciController;
use App\Http\Controllers\SortArrayController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/fibonacci/{count}', [FibonacciController::class, 'generateFibonacci']);
Route::post('/api/sortarray', [SortArrayController::class, 'generateSortArray']);
