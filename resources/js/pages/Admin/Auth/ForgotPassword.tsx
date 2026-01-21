import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function ForgotPassword() {
    return (
        <>
            <Head title="Forgot Password" />
            <div className="w-full max-w-sm rounded-2xl bg-white px-6 py-8 shadow-xl">
                <h1 className="text-center text-xl font-semibold text-gray-900">Forgot Password</h1>
                {/* Forgot password form */}
            </div>
        </>
    );
}

ForgotPassword.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
