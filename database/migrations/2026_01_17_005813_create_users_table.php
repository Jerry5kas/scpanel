<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('phone_number', 20)->unique();
            $table->string('name')->nullable();

            $table->enum('role', ['customer', 'driver', 'admin'])
                ->default('customer');

            $table->string('device_fingerprint')->nullable();

            $table->string('preferred_language', 10)->default('en');
            $table->boolean('communication_consent')->default(true);

            $table->enum('status', ['active', 'blocked'])
                ->default('active');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
