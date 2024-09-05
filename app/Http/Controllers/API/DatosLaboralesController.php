<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DatosLaborales;
use App\Models\DatosPersonales;
use Illuminate\Http\Request;

class DatosLaboralesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $res = DatosLaborales::withDatosPersonales(true)->get();
        return response()->json(['status' => true, 'data' => $res], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cedula = DatosPersonales::where('cedula', $request->cedula)->first();
        $correo = DatosPersonales::where('email', $request->email)->first();
        if ($cedula) {
            return response()->json(['status' => false, 'message' => 'Cedula ya registrada'], 500);
        }
        if ($correo) {
            return response()->json(['status' => false, 'message' => 'Correo ya registrado'], 500);
        }
        try {
            $datosPersonal = new DatosPersonales();
            $datosPersonal->guardar(
                $datosPersonal->nombre =    $request->nombre ?? null,
                $datosPersonal->apellido =    $request->apellido ?? null,
                $datosPersonal->cedula =    $request->cedula ?? null,
                $datosPersonal->id_provincia =    $request->provincia ?? null,
                $datosPersonal->fecha_nacimiento =    $request->fecha_nacimiento ?? null,
                $datosPersonal->email =    $request->email ?? null,
                $datosPersonal->telefono =    $request->telefono ?? null,
                $datosPersonal->discapacidad =    $request->discapacidad ?? null,
                $datosPersonal->direccion =    $request->direccion ?? null,
                $datosPersonal->estado_civil =    $request->estado_civil ?? null,
                $datosPersonal->tipo_sangre =   $request->tipo_sangre ?? null
            );

            //get id_datos_personales
            $getKeyID = $datosPersonal->getKey();
            if ($getKeyID) {
                $data = new DatosLaborales();
                $data->guardar(
                    $data->fecha_ingreso =    $request->fecha_ingreso ?? null,
                    $data->cargo =    $request->cargo ?? null,
                    $data->estado =    $request->estado ?? null,
                    $data->departamento =    $request->departamento ?? null,
                    $data->seccion =    $request->seccion ?? null,
                    $data->division =    $request->division ?? null,
                    $data->sueldo =    $request->sueldo ?? null,
                    $data->jornada_parcial =    $request->jornada_parcial ?? null,
                    $data->categoria =    $request->categoria ?? null,
                    $data->id_datos_personales =   $getKeyID
                );
            }

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
    public function show(DatosLaborales $datosLaborales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $data = DatosLaborales::find($request->id_datos_laborales);
            $data->modificar(
                $data,
                $data->fecha_ingreso =    $request->fecha_ingreso ?? null,
                $data->cargo =    $request->cargo ?? null,
                $data->estado =    $request->estado ?? null,
                $data->departamento =    $request->departamento ?? null,
                $data->seccion =    $request->seccion ?? null,
                $data->division =    $request->division ?? null,
                $data->sueldo =    $request->sueldo ?? null,
                $data->jornada_parcial =    $request->jornada_parcial ?? null,
                $data->categoria =    $request->categoria ?? null
            );

            //modificar datos personales
            $datosPersonal = DatosPersonales::find($data->id_datos_personales);
            $datosPersonal->modificar(
                $datosPersonal,
                $datosPersonal->nombre =    $request->nombre ?? null,
                $datosPersonal->apellido =    $request->apellido ?? null,
                $datosPersonal->cedula =    $request->cedula ?? null,
                $datosPersonal->id_provincia =    $request->provincia ?? null,
                $datosPersonal->fecha_nacimiento =    $request->fecha_nacimiento ?? null,
                $datosPersonal->email =    $request->email ?? null,
                $datosPersonal->telefono =    $request->telefono ?? null,
                $datosPersonal->discapacidad =    $request->discapacidad ?? null,
                $datosPersonal->direccion =    $request->direccion ?? null,
                $datosPersonal->estado_civil =    $request->estado_civil ?? null,
                $datosPersonal->tipo_sangre =   $request->tipo_sangre ?? null
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
     * Remove the specified resource from storage.
     */
    public function destroy(DatosLaborales $datosLaborales)
    {
        //
    }
}
