import { Head, useForm } from '@inertiajs/react';

import AuthLayout from '@/Layouts/AuthLayout';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <>
            <Head title="Admin Login" />
            <div className="flex w-full items-center justify-center px-4">
                <div className="w-full max-w-sm rounded-2xl bg-white px-6 py-8 shadow-xl">
                    <div className="mb-6 flex justify-center">
                        <img src="/images/logo.png" alt="Admin" className="h-12" />
                    </div>
                    <h1 className="text-center text-xl font-semibold text-gray-900">Admin Login</h1>
                    <p className="mt-1 text-center text-sm text-gray-500">Sign in to continue</p>
                    <form onSubmit={submit} className="mt-6 space-y-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Email/Phone</label>
                            <input
                                type="text"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:outline-none"
                                style={{ '--tw-ring-color': 'var(--primary-color)' } as any}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:outline-none"
                                style={{ '--tw-ring-color': 'var(--primary-color)' } as any}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-xl py-3 font-bold text-white transition shadow-lg hover:brightness-110 disabled:opacity-50"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            {processing ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <div className="mt-6 text-center text-xs text-gray-400">© {new Date().getFullYear()} Admin</div>
                </div>
            </div>
        </>
    );
}

Login.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
