# Project Context

## Project Overview
- **Project Name**: restools
- **Type**: Next.js Application
- **Current Version**: 0.1.0
- **Deployment Targets**: 
  - Vercel (primary)
  - Linux server (alternative)

## Technical Stack
- Next.js 15.0.3
- React 19.0.0-rc
- TypeScript
- Tailwind CSS
- Authentication: NextAuth.js 5.0
- Database: MySQL
- ORM: Prisma
- Utilities: Lodash

## Development History

### Session 2024-03-19
- Initial project setup with Next.js
- Project dependencies installed
- Basic configuration files created (next.config.ts, tailwind.config.ts, etc.)
- ESLint configuration established
- Key technical decisions made:
  - NextAuth 5.0 for authentication
  - Prisma as ORM with MySQL database
  - Lodash for utility functions
  - Vercel-compatible architecture

## Important Decisions
- Using TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Prisma for type-safe database access
- MySQL as primary database
- Vercel-first deployment architecture
- NextAuth 5.0 for authentication

## Known Issues/Warnings
- Several npm deprecation warnings noted but not critical:
  - inflight@1.0.6 (memory leak warning)
  - ESLint related deprecated packages
  - rimraf and glob older versions
- Development Environment:
  - Dropbox sync can interfere with npm operations in node_modules
  - Solution: Use provided scripts (see [Dropbox.md](./Dropbox.md))

## Development Environment
- See [Dropbox.md](./Dropbox.md) for detailed instructions on managing Dropbox sync during development
- Utility scripts available in `scripts/` directory for Dropbox control
