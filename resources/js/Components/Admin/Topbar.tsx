import { Menu, Search, User } from 'lucide-react';
import { usePage } from '@inertiajs/react';

interface TopbarProps {
    onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
    const { props } = usePage();
    const appName = (props.theme as any)?.app_name || 'FRESHTICK';

    return (
        <header
            className="flex h-16 items-center px-4 shadow-md lg:px-8"
            style={{ backgroundColor: 'var(--primary-color)' }}
        >
            <button
                onClick={onMenuClick}
                className="mr-4 rounded-md p-1 text-white hover:bg-white/10 lg:hidden"
            >
                <Menu className="h-6 w-6" />
            </button>

            <div className="relative w-full max-w-sm lg:max-w-md">
                <input
                    type="text"
                    placeholder="Search Customer by Name/Phone/ID"
                    className="block w-full rounded border-none bg-white py-1.5 pl-3 pr-10 text-[13px] placeholder-gray-400 focus:outline-none focus:ring-0"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>
            </div>

            <div className="ml-auto flex items-center gap-6">
                <div className="hidden text-[13px] font-black tracking-wider text-white sm:block uppercase">
                    {appName}
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/30 transition-colors">
                    <User className="h-5 w-5" />
                </div>
            </div>
        </header>
    );
}
