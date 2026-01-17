<?php

namespace App\Services;

use App\Models\OtpVerification;
use Illuminate\Support\Facades\Hash;

class SendOtpService
{
    public function send(string $phoneNumber): int
    {
        $otp = random_int(
            10 ** (config('auth.otp.length') - 1),
            (10 ** config('auth.otp.length')) - 1
        );

        OtpVerification::updateOrCreate(
            ['phone_number' => $phoneNumber],
            [
                'otp_hash' => Hash::make($otp),
                'expires_at' => now()->addMinutes(config('auth.otp.expiry_minutes')),
                'attempts' => 0,
            ]
        );

        // DEV MODE ONLY — DO NOT SEND SMS
        logger()->info("DEV OTP for {$phoneNumber}: {$otp}");

        return $otp; // returned ONLY for dev/testing
    }
}
