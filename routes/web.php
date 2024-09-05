<?php

use App\Events\PublicMessage;
use Illuminate\Support\Facades\Route;


Route::get('/{path?}', function () {
    return view('app');
})->where('any', '.*');
