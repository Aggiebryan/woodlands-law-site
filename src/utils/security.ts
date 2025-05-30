
// Security utilities for form submissions and validation

interface SubmissionTracker {
  count: number;
  lastSubmission: number;
  blocked: boolean;
}

class FormSecurityManager {
  private submissions: Map<string, SubmissionTracker> = new Map();
  private readonly maxSubmissions = 3; // Max submissions per time window
  private readonly timeWindow = 5 * 60 * 1000; // 5 minutes in milliseconds
  private readonly blockDuration = 15 * 60 * 1000; // 15 minutes block

  /**
   * Check if a form submission is allowed based on rate limiting
   */
  canSubmit(formType: string, userIdentifier?: string): boolean {
    const key = `${formType}-${userIdentifier || 'anonymous'}`;
    const now = Date.now();
    const tracker = this.submissions.get(key);

    if (!tracker) {
      // First submission for this user/form combination
      this.submissions.set(key, {
        count: 1,
        lastSubmission: now,
        blocked: false
      });
      return true;
    }

    // Check if user is currently blocked
    if (tracker.blocked && (now - tracker.lastSubmission) < this.blockDuration) {
      return false;
    }

    // Reset if time window has passed
    if ((now - tracker.lastSubmission) > this.timeWindow) {
      tracker.count = 1;
      tracker.lastSubmission = now;
      tracker.blocked = false;
      return true;
    }

    // Check if within rate limit
    if (tracker.count >= this.maxSubmissions) {
      tracker.blocked = true;
      return false;
    }

    // Allow submission and increment counter
    tracker.count++;
    tracker.lastSubmission = now;
    return true;
  }

  /**
   * Get remaining submissions before rate limit
   */
  getRemainingSubmissions(formType: string, userIdentifier?: string): number {
    const key = `${formType}-${userIdentifier || 'anonymous'}`;
    const tracker = this.submissions.get(key);
    
    if (!tracker) return this.maxSubmissions;
    if (tracker.blocked) return 0;
    
    return Math.max(0, this.maxSubmissions - tracker.count);
  }

  /**
   * Clean up old tracking data
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, tracker] of this.submissions.entries()) {
      if ((now - tracker.lastSubmission) > this.blockDuration) {
        this.submissions.delete(key);
      }
    }
  }
}

// Create singleton instance
export const formSecurityManager = new FormSecurityManager();

// Clean up old data every 10 minutes
setInterval(() => {
  formSecurityManager.cleanup();
}, 10 * 60 * 1000);

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

/**
 * Validate email format with additional security checks
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeInput(email);
  
  return emailRegex.test(sanitized) && 
         sanitized.length <= 254 && // RFC 5321 limit
         !sanitized.includes('..') && // No consecutive dots
         !sanitized.startsWith('.') && 
         !sanitized.endsWith('.');
};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  const sanitized = sanitizeInput(phone);
  const numbersOnly = sanitized.replace(/\D/g, '');
  
  return phoneRegex.test(sanitized) && 
         numbersOnly.length >= 10 && 
         numbersOnly.length <= 15;
};

/**
 * Generate a simple hash for user identification (for rate limiting)
 */
export const generateUserHash = (email: string, phone: string): string => {
  const combined = `${email.toLowerCase()}-${phone.replace(/\D/g, '')}`;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
};
