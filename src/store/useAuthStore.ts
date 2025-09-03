import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types';

// Simulate API calls for demonstration
const simulateLogin = async (email: string, password: string): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple validation for demo
  if (email && password.length >= 6) {
    return {
      id: '1',
      email,
      name: email.split('@')[0],
      createdAt: new Date()
    };
  }
  return null;
};

const simulateSignup = async (email: string, password: string, name: string): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple validation for demo
  if (email && password.length >= 6 && name.length >= 2) {
    return {
      id: Math.random().toString(36).slice(2),
      email,
      name,
      createdAt: new Date()
    };
  }
  return null;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        try {
          const user = await simulateLogin(email, password);
          if (user) {
            set({ user, isAuthenticated: true });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login error:', error);
          return false;
        }
      },
      
      signup: async (email: string, password: string, name: string) => {
        try {
          const user = await simulateSignup(email, password, name);
          if (user) {
            set({ user, isAuthenticated: true });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Signup error:', error);
          return false;
        }
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);