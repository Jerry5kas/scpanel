import { ReactNode, useState } from 'react';

import Sidebar from '@/Components/Admin/Sidebar';
import Topbar from '@/Components/Admin/Topbar';

interface Props {
    children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 transform bg-white transition-all duration-300 lg:static lg:translate-x-0 ${isCollapsed ? 'lg:w-20' : 'lg:w-64'
                    } ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'}`}
            >
                <Sidebar
                    isCollapsed={isCollapsed}
                    onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* Main */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
