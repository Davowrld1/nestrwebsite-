// Properties Service
class PropertyService {
    // Get all properties with optional filters
    static getProperties(filters = {}) {
        let properties = Utils.getProperties();
        
        // Apply filters
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            properties = properties.filter(p => 
                p.title.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm) ||
                p.area.toLowerCase().includes(searchTerm) ||
                p.city.toLowerCase().includes(searchTerm) ||
                p.state.toLowerCase().includes(searchTerm)
            );
        }
        
        if (filters.state && filters.state !== 'all') {
            properties = properties.filter(p => p.state === filters.state);
        }
        
        if (filters.city && filters.city !== 'all') {
            properties = properties.filter(p => p.city === filters.city);
        }
        
        if (filters.type && filters.type !== 'all') {
            properties = properties.filter(p => p.type === filters.type);
        }
        
        if (filters.minPrice) {
            properties = properties.filter(p => p.price >= parseInt(filters.minPrice));
        }
        
        if (filters.maxPrice) {
            properties = properties.filter(p => p.price <= parseInt(filters.maxPrice));
        }
        
        if (filters.bedrooms) {
            properties = properties.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
        }

        return properties;
    }

    // Get property by ID
    static getPropertyById(id) {
        const properties = Utils.getProperties();
        return properties.find(p => p.id == id);
    }

    // Get user's properties (for landlords)
    static getUserProperties() {
        const user = Utils.getCurrentUser();
        if (!user || user.role !== 'landlord') return [];
        
        const properties = Utils.getProperties();
        return properties.filter(p => p.landlord_id === user.id);
    }

    // Create new property
    static async createProperty(propertyData) {
        try {
            Utils.showLoading();
            
            const user = Utils.getCurrentUser();
            if (!user || user.role !== 'landlord') {
                throw new Error('Only landlords can create properties');
            }

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const properties = Utils.getProperties();
            
            const newProperty = {
                id: Date.now(),
                ...propertyData,
                landlord_id: user.id,
                landlord_name: user.name,
                status: 'available',
                created_at: new Date().toISOString().split('T')[0],
                likes: [],
                views: 0,
                images: propertyData.images || []
            };

            properties.unshift(newProperty);
            Utils.saveProperties(properties);
            
            Utils.showNotification('Property listed successfully!', 'success');
            return newProperty;
        } catch (error) {
            Utils.showNotification(error.message, 'error');
            throw error;
        } finally {
            Utils.hideLoading();
        }
    }

    // Like/unlike property
    static likeProperty(propertyId) {
        const properties = Utils.getProperties();
        const property = properties.find(p => p.id == propertyId);
        const user = Utils.getCurrentUser();
        
        if (!property || !user) return;

        const likeIndex = property.likes.indexOf(user.id);
        if (likeIndex > -1) {
            // Unlike
            property.likes.splice(likeIndex, 1);
            Utils.showNotification('Property unliked', 'info');
        } else {
            // Like
            property.likes.push(user.id);
            Utils.showNotification('Property liked!', 'success');
        }

        Utils.saveProperties(properties);
        return property;
    }

    // Increment property views
    static incrementViews(propertyId) {
        const properties = Utils.getProperties();
        const property = properties.find(p => p.id == propertyId);
        
        if (property) {
            property.views = (property.views || 0) + 1;
            Utils.saveProperties(properties);
        }
    }

    // Get featured properties (most viewed/liked)
    static getFeaturedProperties(limit = 6) {
        const properties = Utils.getProperties();
        return properties
            .sort((a, b) => {
                const aScore = (a.views || 0) + (a.likes?.length || 0);
                const bScore = (b.views || 0) + (b.likes?.length || 0);
                return bScore - aScore;
            })
            .slice(0, limit);
    }
}// Simple Properties Service
console.log('Loading properties.js...');

class PropertyService {
    static init() {
        console.log('PropertyService initialized');
    }

    // Get all properties
    static getProperties() {
        try {
            return Utils.getProperties();
        } catch (error) {
            console.error('Error getting properties:', error);
            return [];
        }
    }
}

// Make PropertyService available globally
window.PropertyService = PropertyService;
console.log('PropertyService loaded successfully');