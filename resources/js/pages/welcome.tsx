import HeroBanner from '@/Components/Home/HeroBanner';
import TrendingCategories from '@/Components/Home/TrendingCategories';
import SubscriptionPlans from '@/Components/Home/SubscriptionPlans';
import FeaturedPromos from '@/Components/Home/FeaturedPromos';
import WorkProcessSection from '@/Components/Home/WorkProcessSection';
import SupportCard from '@/Components/Home/SupportCard';

export default function Welcome() {
    return (
        <div className="bg-[#FBFCFD] min-h-screen overflow-x-hidden px-1">
            <HeroBanner />
            <SubscriptionPlans />
            <FeaturedPromos />
            {/* <SupportCard /> */}
            <TrendingCategories />
            <WorkProcessSection />
        </div>
    );
}
