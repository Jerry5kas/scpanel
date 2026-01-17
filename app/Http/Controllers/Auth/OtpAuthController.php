<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\SendOtpService;
use App\Services\VerifyOtpService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OtpAuthController extends Controller
{
    public function send(Request $request, SendOtpService $service)
    {
        $request->validate([
            'phone_number' => 'required|string|min:10|max:15',
        ]);

        $otp = $service->send($request->phone_number);

        return response()->json([
            'message' => 'OTP sent (DEV)',
            'dev_otp' => $otp, // REMOVE IN PROD
        ]);
    }

    public function verify(Request $request, VerifyOtpService $service)
    {
        $request->validate([
            'phone_number' => 'required',
            'otp' => 'required',
        ]);

        $user = $service->verify(
            $request->phone_number,
            $request->otp,
            $request->header('X-Device-Fingerprint')
        );

        // 🔐 IMPORTANT: Web login (session-based)
        Auth::login($user, remember: true);

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
        ]);
    }
}
