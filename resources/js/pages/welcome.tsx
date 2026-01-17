import AppCards from '@/Components/Home/AppCards';
import HeroBanner from '@/Components/Home/HeroBanner';
import PosterSection from '@/Components/Home/PosterSection';
import PromoBanner from '@/Components/Home/PromoBanner';
import SubscriptionPlans from '@/Components/Home/SubscriptionPlans';
import Footer from '@/Components/Layout/Footer';
import Header from '@/Components/Layout/Header';

export default function Welcome() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <HeroBanner />
            <SubscriptionPlans />
            <PosterSection />
            <AppCards />
            <PromoBanner />
            <Footer />
        </div>
    );
}
