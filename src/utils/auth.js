// Authentication utility for admin access

class AuthService {
  constructor() {
    this.tokenKey = 'admin_token';
    this.userKey = 'admin_user';
    this.loginTimeKey = 'admin_login_time';
    this.sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);
    const loginTime = localStorage.getItem(this.loginTimeKey);
    
    if (!token || !loginTime) {
      return false;
    }

    // Check if session has expired (24 hours)
    const currentTime = Date.now();
    const loginTimestamp = parseInt(loginTime);
    
    if (currentTime - loginTimestamp > this.sessionTimeout) {
      this.logout();
      return false;
    }

    return true;
  }

  // Get current user
  getCurrentUser() {
    if (!this.isAuthenticated()) {
      return null;
    }
    
    return localStorage.getItem(this.userKey);
  }

  // Login user
  login(username, password) {
    // Simple authentication - in production, this would be server-side
    const validCredentials = {
      username: 'arturo',
      password: 'aiagentrep2024'
    };

    if (username === validCredentials.username && password === validCredentials.password) {
      const token = btoa(`${username}:${Date.now()}`);
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.userKey, username);
      localStorage.setItem(this.loginTimeKey, Date.now().toString());
      
      return { success: true, user: username };
    }
    
    return { success: false, error: 'Invalid credentials' };
  }

  // Logout user
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.loginTimeKey);
  }

  // Get session info
  getSessionInfo() {
    if (!this.isAuthenticated()) {
      return null;
    }

    const loginTime = parseInt(localStorage.getItem(this.loginTimeKey));
    const currentTime = Date.now();
    const timeRemaining = this.sessionTimeout - (currentTime - loginTime);

    return {
      user: this.getCurrentUser(),
      loginTime: new Date(loginTime),
      timeRemaining: Math.max(0, timeRemaining),
      isExpired: timeRemaining <= 0
    };
  }

  // Extend session
  extendSession() {
    if (this.isAuthenticated()) {
      localStorage.setItem(this.loginTimeKey, Date.now().toString());
      return true;
    }
    return false;
  }
}

// Create and export singleton instance
const authService = new AuthService();

export default authService; 