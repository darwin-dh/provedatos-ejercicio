<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('datos_laborales', function (Blueprint $table) {
            $table->id('id_datos_laborables');
            $table->date('fecha_ingreso')->nullable();
            $table->string('cargo')->nullable();
            $table->string('departamento')->nullable();
            $table->string('seccion')->nullable();
            $table->string('division')->nullable();
            $table->decimal('sueldo', 10, 2)->nullable()->default(460);
            $table->boolean('jornada_parcial')->nullable()->default(false);
            $table->string('categoria')->nullable();
            $table->unsignedInteger('id_datos_personales')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('datos_labolares');
    }
};
