<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatosPersonales extends Model
{
    use HasFactory;
    protected $hidden     = ['created_at', 'updated_at'];
    protected $table      = "datos_personales";
    protected $primaryKey = "id_datos_personales";

    public function guardar(
        $nombre,
        $apellido,
        $cedula,
        $id_provincia,
        $fecha_nacimiento,
        $email,
        $telefono,
        $discapacidad,
        $direccion,
        $estado_civil,
        $tipo_sangre
    ) {
        $this->nombre           = $nombre;
        $this->apellido         = $apellido;
        $this->cedula           = $cedula;
        $this->id_provincia     = $id_provincia;
        $this->fecha_nacimiento = $fecha_nacimiento;
        $this->email            = $email;
        $this->telefono         = $telefono;
        $this->discapacidad     = $discapacidad;
        $this->direccion        = $direccion;
        $this->estado_civil     = $estado_civil;
        $this->tipo_sangre      = $tipo_sangre;

        if ($this->save()) {
            return $this;
        } else {
            throw new \Exception('Error al guardar');
        }
    }
    public static function modificar(
        DatosPersonales $sucursal,
        $nombre,
        $apellido,
        $cedula,
        $id_provincia,
        $fecha_nacimiento,
        $email,
        $telefono,
        $discapacidad,
        $direccion,
        $estado_civil,
        $tipo_sangre
    ) {
        $sucursal->nombre           = $nombre;
        $sucursal->apellido         = $apellido;
        $sucursal->cedula           = $cedula;
        $sucursal->id_provincia     = $id_provincia;
        $sucursal->fecha_nacimiento = $fecha_nacimiento;
        $sucursal->email            = $email;
        $sucursal->telefono         = $telefono;
        $sucursal->discapacidad     = $discapacidad;
        $sucursal->direccion        = $direccion;
        $sucursal->estado_civil     = $estado_civil;
        $sucursal->tipo_sangre      = $tipo_sangre;

        if ($sucursal->save()) {
            return $sucursal;
        } else {
            throw new \Exception('Error al guardar');
        }
    }
    //scope with provincia
    //scope
    public function scopeWithProvincia($query, $op)
    {
        if ($op)
            return $query->with(['provincia']);
    }
    public function provincia()
    {
        return $this->hasOne(Provincias::class, 'id_provincia', 'id_provincia');
    }
}
