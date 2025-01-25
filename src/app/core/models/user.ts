export interface User {
  id: number | null;
  username: string;
  email: string | null;
  role: 'admin' | 'user' | 'guest';
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  preferences: UserPreferences;
  lastLogin: string | null;
  isAuthenticated: boolean;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  language: string;
  notifications: NotificationPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
}
