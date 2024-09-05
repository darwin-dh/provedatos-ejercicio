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
        Schema::create('datos_personales', function (Blueprint $table) {
            $table->increments('id_datos_personales');
            $table->string('nombre')->nullable();
            $table->string('apellido')->nullable();
            $table->string('cedula')->unique();
            $table->unsignedInteger('id_provincia')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('telefono')->nullable();
            $table->boolean('discapacidad')->default(false)->nullable();
            $table->text('direccion')->nullable();
            $table->string('estado_civil')->nullable();
            $table->string('tipo_sangre')->nullable();
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('id_provincia')->references('id_provincia')->on('provincia')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('datos_personales');
    }
};
