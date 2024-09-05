<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DatosPersonales;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DatosPersonalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = new DatosPersonales();
            $data->guardar(
                $data->nombre =    $request->nombre ?? null,
                $data->apellido =    $request->apellido ?? null,
                $data->cedula =    $request->cedula ?? null,
                $data->id_provincia =    $request->provincia ?? null,
                $data->fecha_nacimiento =    $request->fecha_nacimiento ?? null,
                $data->email =    $request->email ?? null,
                $data->telefono =    $request->telefono ?? null,
                $data->discapacidad =    $request->discapacidad ?? null,
                $data->direccion =    $request->direccion ?? null,
                $data->estado_civil =    $request->estado_civil ?? null,
                $data->tipo_sangre =   $request->tipo_sangre ?? null
            );
            return response()->json([
                'status' => 'success',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function provincias(DatosPersonales $datosPersonales)
    {
        //select * from provincias con db
        try {
            $data = DB::table('provincia')->get();
            return response()->json([
                'status' => true,
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DatosPersonales $datosPersonales)
    {
        try {
            $data = DatosPersonales::findOrFail($datosPersonales->id_datos_personales);
            $dataUpdate = DatosPersonales::modificar(
                $data,
                $data->nombre =    $request->nombre ?? null,
                $data->apellido =    $request->apellido ?? null,
                $data->cedula =    $request->cedula ?? null,
                $data->id_provincia =    $request->id_provincia ?? null,
                $data->fecha_nacimiento =    $request->fecha_nacimiento ?? null,
                $data->email =    $request->email ?? null,
                $data->telefono =    $request->telefono ?? null,
                $data->discapacidad =    $request->discapacidad ?? null,
                $data->direccion =    $request->direccion ?? null,
                $data->estado_civil =    $request->estado_civil ?? null,
                $data->tipo_sangre =   $request->tipo_sangre ?? null
            );
            return response()->json([
                'status' => 'success',
                'data' => $dataUpdate
            ]);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DatosPersonales $datosPersonales)
    {
        //
    }
}
