# wix-registration-system

Lightweight skeleton for a wix-registration-system package. This package will contain integration code and helpers for handling Wix registration flows.

## Purpose

Provide a centralized implementation to handle Wix registration webhooks/flows and mapping Wix payloads to the application's internal user model so other services in the monorepo can reuse registration logic.

## Next steps

- Implement the RegistrationSystem class and Wix API integration in src/
- Add CI/build steps for the package (if monorepo uses a build tool like pnpm/workspaces or lerna)
- Add more unit and integration tests
- Document usage and public API

## Development

- Install dev dependencies: typescript, jest, ts-jest, @types/jest, etc.
- Build: npm run build
- Test: npm run test
