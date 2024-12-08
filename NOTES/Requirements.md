# Reservation Tools Application Requirements

## Technical Requirements
### Dependencies
- Next.js (latest version)
- React (latest version)
- TypeScript (latest version)
- TailwindCSS (latest version)
- PostCSS (latest version)
- Autoprefixer (latest version)
- ESLint (latest version)
- NextAuth.js 5.0
- Prisma (latest version)
- Lodash (latest version)

### Type Definitions
- @types/node (latest version)
- @types/react (latest version)
- @types/react-dom (latest version)

### Database
- MySQL
- Must be Vercel-compatible
- Prisma schema for:
  - User management
  - Call records
  - Notes
  - Access control
  - Aviation data

### Deployment Requirements
- Vercel-compatible architecture
- Alternative deployment option: Linux server
- Environment variables management for:
  - Database credentials
  - Auth secrets
  - API keys

## Application Overview
A tool for reservation agents to manage phone calls.

## Core Features

### Authentication & Authorization (NextAuth 5.0)
1. User Authentication
   - Google OAuth
   - Email/Password
   - Registration form
   - Login/Logout functionality
   - User Profile management
   - Secure session management

2. Authorization Levels (Prisma-based)
   - Admin
     - Full access to all user data
     - User management via header dropdown
     - New user approval
   - User
     - Access to own data only
     - No dropdown access
   - Guest
     - Limited access
     - No access to protected data (call notes, user data)

### Data Management
- Call notes management with MySQL storage
- User data management through Prisma
- Protected data handling with role-based access
- Efficient data querying with Prisma
- Data utility functions using Lodash

### Aviation Data Management
1. Airports
   - Server-side search and filtering
   - Form-based search with submit button
   - Pagination (50 results per page)
   - Display fields:
     - IATA code
     - Name
     - City
     - Country
     - Type (with color coding)
     - Location (clickable coordinates)
   - Wikipedia links when available
   - Performance optimization for 80,000+ records

2. Airlines
   - Client-side filtering
   - Real-time search
   - Display fields:
     - Name
     - IATA code
     - Headquarters
     - Website
     - Logo
   - Continent-based color coding
   - Links to external resources

### Data Utility Functions
- Call notes management with MySQL storage
- User data management through Prisma
- Protected data handling with role-based access
- Efficient data querying with Prisma
- Data utility functions using Lodash
