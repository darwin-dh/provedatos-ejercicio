<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provincias extends Model
{
    use HasFactory;
    use HasFactory;
    protected $hidden     = ['created_at', 'updated_at'];
    protected $table      = "provincia";
    protected $primaryKey = "id_provincia";
}
