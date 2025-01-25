
import { User } from '@syndicus/core/models/user';

export const MOCK_USERS = {
  loggedIn: {
    id: 1,
    username: 'Sara Tavernier',
    email: 'sarataverniers@gmail.com',
    role: 'admin',
    firstName: 'Sara',
    lastName: 'Vanremoortele',
    profilePicture: 'https://avatar.iran.liara.run/public',
    preferences: {
      theme: 'dark',
      language: 'en',
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    },
    lastLogin: '2025-01-23T18:30:00Z',
    isAuthenticated: true
  } as User,
  anonymous: {
    id: null,
    username: 'guest',
    email: null,
    role: 'guest',
    firstName: null,
    lastName: null,
    profilePicture: null,
    preferences: {
      theme: 'light',
      language: 'en',
      notifications: {
        email: false,
        sms: false,
        push: false
      }
    },
    lastLogin: null,
    isAuthenticated: false
  } as User
}