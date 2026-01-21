import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function OtpLogin() {
    return (
        <>
            <Head title="OTP Login" />
            <div className="w-full max-w-sm rounded-2xl bg-white px-6 py-8 shadow-xl">
                <h1 className="text-center text-xl font-semibold text-gray-900">OTP Login</h1>
                {/* OTP login form */}
            </div>
        </>
    );
}

OtpLogin.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
