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
        Schema::create('theme_settings', function (Blueprint $table) {
        $table->id();
        $table->string('app_name')->default('FreshTick');
        $table->string('primary_color')->default('#46ae97');
        $table->string('secondary_color')->default('#c4f5ea');
        $table->string('tertiary_color')->default('#cf992c');
        $table->timestamps();
    });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('theme_settings');
    }
};
