import { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="app-layout">
            <header>{/* App header */}</header>
            <main>{children}</main>
            <footer>{/* App footer */}</footer>
        </div>
    );
}
