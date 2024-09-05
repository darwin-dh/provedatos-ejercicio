<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatosLaborales extends Model
{
    use HasFactory;

    protected $hidden     = ['created_at', 'updated_at'];
    protected $table      = "datos_laborales";
    protected $primaryKey = "id_datos_laborables";

    public function guardar(
        $fecha_ingreso,
        $cargo,
        $estado,
        $departamento,
        $seccion,
        $division,
        $sueldo,
        $jornada_parcial,
        $categoria,
        $id_datos_personales
    ) {
        $this->fecha_ingreso             = $fecha_ingreso;
        $this->cargo                     = $cargo;
        $this->estado                    = $estado;
        $this->departamento              = $departamento;
        $this->seccion                   = $seccion;
        $this->division                  = $division;
        $this->sueldo                    = $sueldo;
        $this->jornada_parcial           = $jornada_parcial;
        $this->categoria                 = $categoria;
        $this->id_datos_personales       = $id_datos_personales;

        if ($this->save()) {
            return $this;
        } else {
            throw new \Exception('Error al guardar');
        }
    }

    public static function modificar(
        DatosLaborales $datos,
        $fecha_ingreso,
        $cargo,
        $estado,
        $departamento,
        $seccion,
        $division,
        $sueldo,
        $jornada_parcial,
        $categoria
    ) {
        $datos->fecha_ingreso   = $fecha_ingreso;
        $datos->cargo           = $cargo;
        $datos->estado          = $estado;
        $datos->departamento    = $departamento;
        $datos->seccion         = $seccion;
        $datos->division        = $division;
        $datos->sueldo          = $sueldo;
        $datos->jornada_parcial = $jornada_parcial;
        $datos->categoria       = $categoria;

        if ($datos->save()) {
            return $datos;
        } else {
            throw new \Exception('Error al modificar');
        }
    }
    //scope
    public function scopeWithDatosPersonales($query, $op)
    {
        if ($op)
            return $query->with(['personales']);
    }
    public function personales()
    {
        return $this->hasOne(DatosPersonales::class, 'id_datos_personales', 'id_datos_personales')->withProvincia(true);
    }
}
