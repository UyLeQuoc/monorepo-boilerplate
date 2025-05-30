# Technical Context

## Technology Stack

### Frontend
- Next.js 15
- Shadcn UI
- TypeScript
- React
- GraphQL Code Generator

### Backend
- NestJS
- GraphQL
- TypeScript
- PostgreSQL

### Development Tools
- Node.js
- npm
- Concurrently for development
- Git for version control
- GraphQL Code Generator CLI

## Development Setup
1. Node.js environment
2. PostgreSQL database
3. npm for package management
4. Git for version control
5. GraphQL Code Generator configuration

## Technical Constraints
- Node.js version compatibility
- PostgreSQL version requirements
- Browser compatibility for frontend
- API versioning strategy
- GraphQL schema synchronization

## Dependencies
### Root Dependencies
- concurrently: ^9.1.2

### Frontend Dependencies (apps/web)
- Next.js 15
- Shadcn UI
- TypeScript
- React
- @graphql-codegen/cli
- @graphql-codegen/client-preset
- @graphql-codegen/typescript
- @graphql-codegen/typescript-operations

### Backend Dependencies (apps/api)
- NestJS
- GraphQL
- TypeScript
- PostgreSQL client

## Development Scripts
- `npm run dev`: Run both frontend and backend concurrently
- `npm run dev:api`: Run backend only
- `npm run dev:web`: Run frontend only
- `npm run codegen`: Generate GraphQL types and operations 