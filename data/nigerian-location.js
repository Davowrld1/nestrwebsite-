// Nigerian states and cities data
const nigerianLocations = {
  states: [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
    "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"
  ],
  
  cities: {
    "Lagos": ["Lekki", "Victoria Island", "Ikeja", "Surulere", "Yaba", "Apapa", "Agege", "Maryland", "Gbagada"],
    "Abuja": ["Wuse", "Garki", "Maitama", "Asokoro", "Gwarinpa", "Kubwa", "Lugbe", "Nyanya"],
    "Rivers": ["Port Harcourt", "Obio-Akpor", "Eleme", "Oyigbo", "Rumuokoro", "Rumuola"],
    "Edo": ["Benin City", "GRA", "Ugbowo", "Ekheuan", "Ugbor", "Siluko", "Ikpoba Hill"],
    "Oyo": ["Ibadan", "Bodija", "UI Area", "Mokola", "Agodi", "Challenge", "Sango"],
    "Kano": ["Kano Municipal", "Nassarawa", "Fagge", "Dala", "Gwale"],
    "Kaduna": ["Kaduna North", "Kaduna South", "Igabi", "Chikun"],
    "Enugu": ["Enugu North", "Enugu South", "Nsukka", "Agbani"],
    "Delta": ["Asaba", "Warri", "Ughelli", "Sapele", "Agbor"]
  }
};

// Mock data for frontend development
const mockData = {
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
      lga: "Benin City",
      street: "Ugbowo Road",
      images: [],
      landlord_id: 2,
      features: ["24/7 Security", "Constant Water", "Furnished", "WiFi Ready"],
      contact: "+2348098765432",
      created_at: "2024-01-15",
      status: "available",
      likes: []
    },
    {
      id: 2,
      title: "Single Room Self-Contain in GRA",
      description: "Cozy self-contained room with kitchenette and private bathroom. Quiet neighborhood.",
      price: 90000,
      type: "room",
      bedrooms: 1,
      bathrooms: 1,
      state: "Edo",
      lga: "Benin City",
      street: "GRA",
      images: [],
      landlord_id: 2,
      features: ["Quiet Area", "Private Bathroom", "Kitchenette", "Security"],
      contact: "+2348098765432",
      created_at: "2024-01-10",
      status: "available",
      likes: []
    }
  ],
  
  notifications: {}
};