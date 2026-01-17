<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Mass assignable attributes
     */
    protected $fillable = [
        'phone_number',
        'name',
        'role',
        'device_fingerprint',
        'preferred_language',
        'communication_consent',
        'status',
    ];

    /**
     * Hidden attributes (API safety)
     */
    protected $hidden = [
        // Nothing sensitive stored in users table
    ];

    /**
     * Attribute casting
     */
    protected $casts = [
        'communication_consent' => 'boolean',
    ];

    /*
    |--------------------------------------------------------------------------
    | RBAC HELPERS (IMPORTANT)
    |--------------------------------------------------------------------------
    */

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isDriver(): bool
    {
        return $this->role === 'driver';
    }

    public function isCustomer(): bool
    {
        return $this->role === 'customer';
    }
}
