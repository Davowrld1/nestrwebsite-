// Enhanced Utility Functions with Error Handling
console.log('Loading utils.js...');

class Utils {
    static init() {
        console.log('Utils initialized');
    }

    // Show loading state
    static showLoading() {
        try {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.style.display = 'block';
                loading.innerHTML = '<div class="loading-spinner">Loading...</div>';
            }
        } catch (error) {
            console.error('Error showing loading:', error);
        }
    }

    // Hide loading state
    static hideLoading() {
        try {
            const loading = document.getElementById('loading');
            if (loading) loading.style.display = 'none';
        } catch (error) {
            console.error('Error hiding loading:', error);
        }
    }

    // Show notification
    static showNotification(message, type = 'info', duration = 5000) {
        try {
            // Remove existing notifications
            const existing = document.querySelectorAll('.notification');
            existing.forEach(notif => notif.remove());

            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <span class="notification-message">${this.escapeHtml(message)}</span>
                    <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `;

            // Add to document
            document.body.appendChild(notification);

            // Auto remove after duration
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, duration);

        } catch (error) {
            console.error('Error showing notification:', error);
            // Fallback to alert
            alert(message);
        }
    }

    // Format price in Nigerian Naira
    static formatPrice(price) {
        try {
            if (!price && price !== 0) return '₦0';
            const numPrice = typeof price === 'string' ? parseFloat(price) : price;
            return '₦' + numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } catch (error) {
            console.error('Error formatting price:', error);
            return '₦0';
        }
    }

    // Escape HTML to prevent XSS
    static escapeHtml(text) {
        try {
            if (!text) return '';
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        } catch (error) {
            console.error('Error escaping HTML:', error);
            return text || '';
        }
    }

    // Validate email
    static validateEmail(email) {
        try {
            if (!email) return false;
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        } catch (error) {
            console.error('Error validating email:', error);
            return false;
        }
    }

    // Validate Nigerian phone number
    static validatePhone(phone) {
        try {
            if (!phone) return false;
            const re = /^(\+234|0)[789][01]\d{8}$/;
            return re.test(phone.replace(/\s/g, ''));
        } catch (error) {
            console.error('Error validating phone:', error);
            return false;
        }
    }

    // Get current user from localStorage
    static getCurrentUser() {
        try {
            const user = localStorage.getItem('current_user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    // Set current user in localStorage
    static setCurrentUser(user) {
        try {
            if (!user) {
                localStorage.removeItem('current_user');
                return;
            }
            localStorage.setItem('current_user', JSON.stringify(user));
        } catch (error) {
            console.error('Error setting current user:', error);
        }
    }

    // Remove current user from localStorage
    static removeCurrentUser() {
        try {
            localStorage.removeItem('current_user');
        } catch (error) {
            console.error('Error removing current user:', error);
        }
    }

    // Check if user is authenticated
    static isAuthenticated() {
        return this.getCurrentUser() !== null;
    }

    // Check if user is landlord
    static isLandlord() {
        const user = this.getCurrentUser();
        return user && user.role === 'landlord';
    }

    // Check if user is tenant
    static isTenant() {
        const user = this.getCurrentUser();
        return user && user.role === 'tenant';
    }

    // Get properties from localStorage
    static getProperties() {
        try {
            const data = localStorage.getItem('studentrent_data');
            if (!data) {
                this.initializeData();
                return MOCK_DATA.properties || [];
            }
            const parsed = JSON.parse(data);
            return parsed.properties || [];
        } catch (error) {
            console.error('Error getting properties:', error);
            this.initializeData();
            return MOCK_DATA.properties || [];
        }
    }

    // Save properties to localStorage
    static saveProperties(properties) {
        try {
            const data = JSON.parse(localStorage.getItem('studentrent_data')) || MOCK_DATA;
            data.properties = properties;
            localStorage.setItem('studentrent_data', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving properties:', error);
            return false;
        }
    }

    // Get users from localStorage
    static getUsers() {
        try {
            const data = localStorage.getItem('studentrent_data');
            if (!data) {
                this.initializeData();
                return MOCK_DATA.users || [];
            }
            const parsed = JSON.parse(data);
            return parsed.users || [];
        } catch (error) {
            console.error('Error getting users:', error);
            this.initializeData();
            return MOCK_DATA.users || [];
        }
    }

    // Save users to localStorage
    static saveUsers(users) {
        try {
            const data = JSON.parse(localStorage.getItem('studentrent_data')) || MOCK_DATA;
            data.users = users;
            localStorage.setItem('studentrent_data', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving users:', error);
            return false;
        }
    }

    // Initialize mock data
    static initializeData() {
        try {
            if (!localStorage.getItem('studentrent_data')) {
                localStorage.setItem('studentrent_data', JSON.stringify(MOCK_DATA));
                console.log('Mock data initialized');
            }
        } catch (error) {
            console.error('Error initializing data:', error);
        }
    }

    // Debounce function for search
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Safe query selector
    static $(selector) {
        try {
            return document.querySelector(selector);
        } catch (error) {
            console.error('Error querying selector:', selector, error);
            return null;
        }
    }

    // Safe query selector all
    static $$(selector) {
        try {
            return document.querySelectorAll(selector);
        } catch (error) {
            console.error('Error querying selector all:', selector, error);
            return [];
        }
    }
}

// Make utils available globally
window.Utils = Utils;
console.log('Utils loaded successfully');