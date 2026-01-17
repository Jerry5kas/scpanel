import { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function AuthSidePanel({ open, onClose }: Props) {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(58);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Side Panel */}
            <aside className="
                absolute right-0 top-0 h-full w-full sm:w-[420px]
                bg-white shadow-xl
                flex flex-col
            ">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold">
                        {step === 'phone' ? 'Login With OTP' : 'Verify OTP'}
                    </h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 px-6 py-6 space-y-6">

                    {step === 'phone' && (
                        <>
                            <p className="text-sm text-gray-600">
                                Don&apos;t have an account?{' '}
                                <span className="text-emerald-600 cursor-pointer">
                                    Sign Up
                                </span>
                            </p>

                            <div>
                                <label className="text-sm text-gray-600">
                                    Mobile Number
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="
                                        mt-1 w-full rounded-lg border
                                        px-4 py-3
                                        focus:ring-2 focus:ring-emerald-500
                                    "
                                    placeholder="Enter mobile number"
                                />
                            </div>

                            <button
                                onClick={() => {
                                    setStep('otp');
                                    setError('');
                                }}
                                className="
                                    w-full rounded-lg bg-emerald-600
                                    text-white py-3 font-medium
                                "
                            >
                                Send OTP
                            </button>

                            <button className="text-sm text-emerald-600">
                                Login with Password instead
                            </button>

                            {error && (
                                <p className="text-sm text-red-500">
                                    {error}
                                </p>
                            )}
                        </>
                    )}

                    {step === 'otp' && (
                        <>
                            <p className="text-sm text-gray-600">
                                OTP has been sent to +91 {phone}{' '}
                                <span
                                    className="text-emerald-600 cursor-pointer"
                                    onClick={() => setStep('phone')}
                                >
                                    Modify Number
                                </span>
                            </p>

                            {/* OTP Inputs */}
                            <div className="flex gap-3">
                                {otp.map((digit, i) => (
                                    <input
                                        key={i}
                                        value={digit}
                                        onChange={(e) => {
                                            const newOtp = [...otp];
                                            newOtp[i] = e.target.value.slice(-1);
                                            setOtp(newOtp);
                                        }}
                                        className="
                                            w-12 h-12 text-center text-lg
                                            rounded-lg border
                                            focus:ring-2 focus:ring-emerald-500
                                        "
                                    />
                                ))}
                            </div>

                            <div className="text-sm text-gray-600">
                                {timer > 0 ? (
                                    <>Resend OTP in : <span className="text-emerald-600">{timer}</span></>
                                ) : (
                                    <span className="text-emerald-600 cursor-pointer">
                                        Resend OTP
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={() => setError('Incorrect OTP.')}
                                className="
                                    w-full rounded-lg bg-emerald-600
                                    text-white py-3 font-medium
                                "
                            >
                                Confirm
                            </button>

                            {error && (
                                <p className="text-sm text-red-500">
                                    {error}
                                </p>
                            )}
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 text-xs text-center text-gray-500 border-t">
                    All Rights Reserved | Powered By Rekart
                </div>
            </aside>
        </div>
    );
}
