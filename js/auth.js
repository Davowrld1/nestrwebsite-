// Enhanced Authentication Service
console.log('Loading auth.js...');

class AuthService {
    static init() {
        console.log('AuthService initialized');
        this.updateNavigation();
    }

    // Login user
    static async login(email, password) {
        try {
            Utils.showLoading();
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const users = Utils.getUsers();
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Remove password from user object before storing
                const { password: _, ...userWithoutPassword } = user;
                Utils.setCurrentUser(userWithoutPassword);
                Utils.showNotification('Login successful!', 'success');
                this.updateNavigation();
                return userWithoutPassword;
            } else {
                throw new Error('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            Utils.showNotification(error.message, 'error');
            return null;
        } finally {
            Utils.hideLoading();
        }
    }

    // Register new user
    static async register(userData) {
        try {
            Utils.showLoading();
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const users = Utils.getUsers();
            
            // Check if user already exists
            if (users.find(u => u.email === userData.email)) {
                throw new Error('User with this email already exists');
            }

            // Validate data
            if (!Utils.validateEmail(userData.email)) {
                throw new Error('Please enter a valid email address');
            }

            if (!Utils.validatePhone(userData.phone)) {
                throw new Error('Please enter a valid Nigerian phone number');
            }

            // Create new user
            const newUser = {
                id: Date.now(),
                ...userData,
                created_at: new Date().toISOString().split('T')[0]
            };

            // Add to users array
            users.push(newUser);
            Utils.saveUsers(users);

            // Remove password from user object before storing
            const { password: _, ...userWithoutPassword } = newUser;
            Utils.setCurrentUser(userWithoutPassword);
            
            Utils.showNotification('Account created successfully!', 'success');
            this.updateNavigation();
            return userWithoutPassword;
        } catch (error) {
            console.error('Registration error:', error);
            Utils.showNotification(error.message, 'error');
            return null;
        } finally {
            Utils.hideLoading();
        }
    }

    // Logout user
    static logout() {
        try {
            Utils.removeCurrentUser();
            Utils.showNotification('Logged out successfully', 'info');
            this.updateNavigation();
            if (window.Router) {
                Router.navigate('/');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    // Update navigation based on auth state
    static updateNavigation() {
        try {
            const navAuth = document.getElementById('navAuth');
            if (!navAuth) {
                console.warn('navAuth element not found');
                return;
            }

            const user = Utils.getCurrentUser();
            
            if (user) {
                navAuth.innerHTML = `
                    <div class="user-menu">
                        <span class="user-greeting">Hello, ${Utils.escapeHtml(user.name)}</span>
                        <div class="dropdown">
                            <button class="dropdown-toggle">
                                👤
                            </button>
                            <div class="dropdown-menu">
                                <a href="#${user.role}" class="dropdown-item">Dashboard</a>
                                <a href="#profile" class="dropdown-item">Profile</a>
                                <button onclick="AuthService.logout()" class="dropdown-item">Logout</button>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                navAuth.innerHTML = `
                    <a href="#login" class="nav-link">Login</a>
                    <a href="#signup" class="btn btn-primary">Sign Up</a>
                `;
            }
        } catch (error) {
            console.error('Error updating navigation:', error);
        }
    }
}

// Make AuthService available globally
window.AuthService = AuthService;
console.log('AuthService loaded successfully');