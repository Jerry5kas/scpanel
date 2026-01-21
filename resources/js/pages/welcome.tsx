import AppCards from '@/Components/Home/AppCards';
import HeroBanner from '@/Components/Home/HeroBanner';
import PosterSection from '@/Components/Home/PosterSection';
import PromoBanner from '@/Components/Home/PromoBanner';
import SubscriptionPlans from '@/Components/Home/SubscriptionPlans';

export default function Welcome() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroBanner />
            <SubscriptionPlans />
            <PosterSection />
            <AppCards />
            <PromoBanner />
        </div>
    );
}
