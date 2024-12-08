# AI Assistant Training Notes

## Purpose
This file contains training statements and updates for the AI assistant to maintain context and understanding of the project as it evolves.

## CRITICAL INSTRUCTION
- Update Requirements.md and Training.md after EVERY significant change
- These documents MUST stay current to maintain context between sessions
- These notes are the source of truth for new AI sessions
- Never skip documentation updates, even for small changes
- Document all technical decisions and their rationale

## Communication Style
- Provide brief, direct responses
- No need to restate questions
- Focus on solutions and actions

## Coding Standards
- Use latest package versions
- Follow "textbook coding" principles:
  - Well-organized components and libraries
  - Current React/Next.js best practices
  - Clean architecture and separation of concerns
  - Proper TypeScript usage
  - Modern ES6+ syntax

## Session History

### Session 2024-12-06
- Implemented NextAuth 5.0 authentication with Google provider
- Set up client-side session management in NavBar using next-auth/react
- Created server-side Profile component with auth() from @/auth
- Added NextAuthProvider for proper session management
- Authentication flow includes:
  - Login/Logout toggle in NavBar
  - Protected Profile page with redirect
  - Display of user information (name, email, image)

### Session 2024-12-06 (continued)
- Implemented aviation data features:
  1. Airports:
     - Server-side search with form submission
     - Pagination (50 results per page)
     - Performance optimized for 80,000+ records
     - Added Wikipedia links and map coordinates
     - Type-based color coding for airport categories
     - Error handling and loading states

  2. Airlines:
     - Client-side filtering with real-time search
     - Continent-based color coding
     - Logo display and website links
     - Headquarters and IATA code display

- Technical Decisions:
  - Server-side filtering for large datasets (airports)
  - Client-side filtering for smaller datasets (airlines)
  - Form-based search to prevent excessive API calls
  - Consistent styling with Tailwind CSS
  - Error boundaries and loading states

## Key Instructions
1. Maintain and update these training notes as new features are added or requirements change
2. Track all significant changes and decisions in the project
3. Keep notes organized by session date for clear chronological progression
4. Include technical details that may be relevant for future development

## Project Priorities
1. Authentication and authorization implementation
2. Role-based access control (Admin/User/Guest)
3. Call management system development
4. Data security and access control

## Current Status
- Basic authentication flow implemented
- Pending: Role-based authorization
- Pending: Email/password authentication
- Pending: Admin user management
- Pending: Call management features
