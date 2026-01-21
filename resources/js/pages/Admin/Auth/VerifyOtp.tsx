import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function VerifyOtp() {
    return (
        <>
            <Head title="Verify OTP" />
            <div className="w-full max-w-sm rounded-2xl bg-white px-6 py-8 shadow-xl">
                <h1 className="text-center text-xl font-semibold text-gray-900">Verify OTP</h1>
                {/* OTP verification form */}
            </div>
        </>
    );
}

VerifyOtp.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
