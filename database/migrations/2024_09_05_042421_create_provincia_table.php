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
        Schema::create('provincia', function (Blueprint $table) {
            $table->increments('id_provincia');
            $table->string('nombre_provincia');
            $table->string('capital_provincia');
            $table->text('descripcion_provincia');
            $table->decimal('poblacion_provincia', 10, 2);
            $table->decimal('superficie_provincia', 10, 2);
            $table->decimal('latitud_provincia', 10, 6);
            $table->decimal('longitud_provincia', 10, 6);
            $table->unsignedBigInteger('id_region');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('provincia');
    }
};
