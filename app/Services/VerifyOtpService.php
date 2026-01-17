<?php

namespace App\Services;

use App\Models\OtpVerification;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class VerifyOtpService
{
    public function verify(string $phoneNumber, string $otp, ?string $deviceFingerprint = null): User
    {
        $record = OtpVerification::where('phone_number', $phoneNumber)->first();

        if (!$record || now()->gt($record->expires_at)) {
            throw new \Exception('OTP expired');
        }

        if ($record->attempts >= config('auth.otp.max_attempts')) {
            throw new \Exception('Too many attempts');
        }

        if (!Hash::check($otp, $record->otp_hash)) {
            $record->increment('attempts');
            throw new \Exception('Invalid OTP');
        }

        $user = User::firstOrCreate(
            ['phone_number' => $phoneNumber],
            [
                'role' => 'customer',
                'status' => 'active',
                'device_fingerprint' => $deviceFingerprint,
            ]
        );

        $record->delete();

        return $user;
    }
}
