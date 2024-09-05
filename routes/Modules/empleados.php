<?php

use App\Http\Controllers\API\DatosLaboralesController;
use App\Http\Controllers\API\DatosPersonalesController;
use Illuminate\Support\Facades\Route;

Route::get('v1/list/empleados',                                    [DatosLaboralesController::class, 'index']);
Route::post('v1/add/empleados',                                    [DatosLaboralesController::class, 'store']);
Route::post('v1/edit/empleados',                                   [DatosLaboralesController::class, 'update']);
Route::get('v1/list/provincias',                                   [DatosPersonalesController::class, 'provincias']);
