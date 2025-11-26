// App Configuration with Error Handling
console.log('Loading config.js...');

try {
    const CONFIG = {
        APP_NAME: 'StudentRent',
        VERSION: '1.0.0',
        API_BASE: '/api',
        USE_MOCK_DATA: true,
        DEMO_ACCOUNTS: {
            student: { email: 'student@demo.com', password: 'demo123', role: 'tenant' },
            landlord: { email: 'landlord@demo.com', password: 'demo123', role: 'landlord' }
        }
    };

    // Nigerian States and Cities Data
    const NIGERIAN_LOCATIONS = {
        states: [
            "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
            "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
            "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
            "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
            "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"
        ],
        
        cities: {
            "Lagos": ["Lekki", "Victoria Island", "Ikeja", "Surulere", "Yaba", "Apapa", "Agege", "Maryland"],
            "Abuja": ["Wuse", "Garki", "Maitama", "Asokoro", "Gwarinpa", "Kubwa", "Lugbe"],
            "Rivers": ["Port Harcourt", "Obio-Akpor", "Eleme", "Oyigbo", "Rumuokoro"],
            "Edo": ["Benin City", "GRA", "Ugbowo", "Ekheuan", "Ugbor", "Siluko"],
            "Oyo": ["Ibadan", "Bodija", "UI Area", "Mokola", "Agodi", "Challenge"]
        }
    };

    // Mock Data for Development
    const MOCK_DATA = {
        users: [
            {
                id: 1,
                name: "Demo Student",
                email: "student@demo.com",
                password: "demo123",
                role: "tenant",
                phone: "+2348012345678",
                created_at: "2024-01-01"
            },
            {
                id: 2,
                name: "Demo Landlord",
                email: "landlord@demo.com",
                password: "demo123",
                role: "landlord",
                phone: "+2348098765432",
                created_at: "2024-01-01"
            }
        ],
        
        properties: [
            {
                id: 1,
                title: "Spacious 2-Bedroom Apartment near UNIBEN",
                description: "Well-furnished apartment with constant water and electricity. Close to University of Benin. 24/7 security.",
                price: 180000,
                type: "apartment",
                bedrooms: 2,
                bathrooms: 2,
                state: "Edo",
                city: "Benin City",
                area: "Ugbowo",
                address: "Ugbowo Road",
                images: [],
                landlord_id: 2,
                landlord_name: "Demo Landlord",
                features: ["24/7 Security", "Constant Water", "Furnished", "WiFi Ready"],
                contact: "+2348098765432",
                created_at: "2024-01-15",
                status: "available",
                likes: [],
                views: 0
            }
        ]
    };

    // Make variables global
    window.CONFIG = CONFIG;
    window.NIGERIAN_LOCATIONS = NIGERIAN_LOCATIONS;
    window.MOCK_DATA = MOCK_DATA;

    console.log('Config loaded successfully');
} catch (error) {
    console.error('Error loading config:', error);
}