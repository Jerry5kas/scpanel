import { X, Navigation, Search, ChevronDown, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LocationLanguagePopupProps {
    onClose: (data?: { language: string, zone: string }) => void;
}

export default function LocationLanguagePopup({ onClose }: LocationLanguagePopupProps) {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedZone, setSelectedZone] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [mapLocation, setMapLocation] = useState('Kochi, Kerala');
    const [error, setError] = useState<string | null>(null);

    const languages = [
        { name: 'English', label: 'English' },
        { name: 'Malayalam', label: 'മലയാളം' },
        { name: 'Hindi', label: 'Hindi' }
    ];

    const zoneToAreas: Record<string, string[]> = {
        'Malipuram': ['Malipuram Junction', 'Beach Road', 'North Malipuram'],
        'Nayarambalam': ['Nayarambalam North', 'Nayarambalam South', 'Vypin Road'],
        'High Court': ['Marine Drive', 'Broadway', 'Shanmugham Road'],
        'Alathurpadi Malapuram': ['Main Town', 'West Hill', 'East Gate'],
        'Kaloor': ['Stadium Road', 'Pullepady', 'Deshabhimani Junction'],
        'Panampilly Nagar': ['Main Avenue', 'South Side', 'Giridhar Nagar']
    };

    const zones = Object.keys(zoneToAreas);

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    const handleConfirm = () => {
        if (!selectedZone && !searchQuery) {
            setError('Please select a zone or search for a location');
            return;
        }
        onClose({
            language: selectedLanguage,
            zone: selectedZone
        });
    };

    const handleSkip = () => {
        onClose();
    };

    const handleDetectLocation = () => {
        setError(null);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMapLocation(`${position.coords.latitude},${position.coords.longitude}`);
                    setShowMap(true);
                },
                (err) => {
                    setError('Please enable location access to fetch your current position.');
                }
            );
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    };

    const handleZoneChange = (zone: string) => {
        setSelectedZone(zone);
        setSelectedArea('');
        setMapLocation(`${zone}, Kochi, Kerala`);
        setShowMap(true);
        setError(null);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setError(null);
        if (query.length > 3) {
            setMapLocation(query);
            setShowMap(true);
        }
    };

    return (
        <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center p-0 md:p-6 backdrop-blur-md transition-all duration-500">
            <div 
                className={`relative w-full h-full md:h-[75vh] md:max-h-[580px] max-w-[850px] bg-white rounded-none md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 md:translate-y-20'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button - Premium Floating Style */}
                <button
                    onClick={handleSkip}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-[1010] bg-[var(--primary-color)] text-white p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all border-2 border-white"
                >
                    <X className="w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
                </button>

                {/* Illustration / Map Section (Top on mobile, Left on desktop) */}
                <div className="w-full md:w-[38%] h-48 md:h-full bg-[#FAFAFA] relative border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
                    <div className="absolute inset-0">
                        {!showMap ? (
                            <img 
                                src="/images/service-area.jpg" 
                                alt="Service Area"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full animate-in fade-in duration-700">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                                    className="grayscale-[20%] opacity-90"
                                ></iframe>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col items-center justify-start md:justify-center relative bg-white p-6 md:p-10">
                    <div className="w-full max-w-sm space-y-5 md:space-y-6">
                        {/* Logo & Language Section */}
                        <div className="flex flex-col items-center gap-4">
                            <img src="/images/logo.png" alt="FreshTick" className="h-7 md:h-8" />
                            
                            <div className="flex bg-gray-100 p-0.5 rounded-full border border-gray-200/50 shadow-inner w-fit">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.name}
                                        onClick={() => setSelectedLanguage(lang.name)}
                                        className={`px-4 py-1.5 rounded-full text-[11px] md:text-[12px] font-black transition-all ${
                                            selectedLanguage === lang.name
                                            ? 'bg-white text-[var(--primary-color)] shadow-sm' 
                                            : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Title Label */}
                        <div className="text-center">
                            <h2 className="text-[18px] md:text-[20px] font-black text-gray-800 tracking-tight">Select Your Location</h2>
                            <p className="text-[12px] font-bold text-gray-400 mt-1">Where can we reach you?</p>
                        </div>

                        {/* Interaction Area */}
                        <div className="space-y-4">
                            {/* Error Message */}
                            {error && (
                                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-[12px] font-bold animate-in fade-in slide-in-from-top-2">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <button 
                                onClick={handleDetectLocation}
                                className="w-full flex items-center justify-center gap-3 py-3.5 bg-[var(--primary-color)] text-white hover:brightness-110 active:scale-[0.98] transition-all rounded-2xl font-black text-[14px] shadow-lg shadow-emerald-700/10 group"
                            >
                                <Navigation className="w-4 h-4 fill-white animate-pulse" />
                                Detect My Location
                            </button>

                            <div className="relative flex items-center gap-4">
                                <div className="flex-1 h-[1px] bg-gray-100"></div>
                                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest bg-white px-2">OR</span>
                                <div className="flex-1 h-[1px] bg-gray-100"></div>
                            </div>

                            <div className="space-y-3">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider ml-1">Search Place</label>
                                    <div className="relative group">
                                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[var(--primary-color)] transition-colors" />
                                        <input 
                                            type="text" 
                                            placeholder="Enter street or area..."
                                            value={searchQuery}
                                            onChange={(e) => handleSearchChange(e.target.value)}
                                            className="w-full bg-gray-50 border-gray-100 focus:bg-white focus:border-[var(--primary-color)] focus:ring-4 focus:ring-emerald-50 rounded-2xl px-12 py-3.5 text-[14px] font-bold text-gray-700 transition-all placeholder:text-gray-300 shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1.5 text-left">
                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider ml-1">Zone</label>
                                        <div className="relative group">
                                            <select 
                                                value={selectedZone}
                                                onChange={(e) => handleZoneChange(e.target.value)}
                                                className="w-full bg-gray-50 border-gray-100 appearance-none focus:bg-white focus:border-[var(--primary-color)] rounded-2xl px-5 py-3.5 text-[13px] font-bold text-gray-700 cursor-pointer truncate pr-10 shadow-sm"
                                            >
                                                <option value="" disabled>Select Zone</option>
                                                {zones.map(zone => (
                                                    <option key={zone} value={zone}>{zone}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className={`space-y-1.5 text-left transition-all duration-300 ${!selectedZone ? 'opacity-40 grayscale pointer-events-none' : 'opacity-100'}`}>
                                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider ml-1">Area</label>
                                        <div className="relative group">
                                            <select 
                                                value={selectedArea}
                                                onChange={(e) => setSelectedArea(e.target.value)}
                                                disabled={!selectedZone}
                                                className={`w-full bg-gray-50 border-gray-100 appearance-none rounded-2xl px-5 py-3.5 text-[13px] font-bold text-gray-700 transition-all ${selectedZone ? 'hover:bg-white focus:border-[var(--primary-color)] cursor-pointer truncate pr-10 shadow-sm' : 'cursor-not-allowed'}`}
                                            >
                                                <option value="">Select Area</option>
                                                {selectedZone && zoneToAreas[selectedZone].map(area => (
                                                    <option key={area} value={area}>{area}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Action Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button 
                                onClick={handleConfirm}
                                className={`flex-[2] py-4 rounded-2xl md:rounded-3xl text-[14px] font-black transition-all active:scale-[0.98] ${
                                    selectedZone || searchQuery 
                                    ? 'bg-[var(--primary-color)] text-white shadow-xl shadow-emerald-900/20' 
                                    : 'bg-gray-100 text-gray-300'
                                }`}
                            >
                                Confirm Location
                            </button>
                            <button 
                                onClick={handleSkip}
                                className="flex-1 py-4 rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200/50 text-gray-400 text-[13px] font-bold transition-all hover:bg-gray-100 hover:text-gray-600 active:scale-[0.98]"
                            >
                                Skip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
