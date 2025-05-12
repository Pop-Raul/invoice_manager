# My Application

## Getting Started

To start the application, follow these steps:

1. **Clone this repository** and open both the front-end (FE) and back-end (BE) folders in your IDE of choice (e.g., VS Code or IntelliJ).

2. **Back-end** (in `../backend_code_test`):

   ```bash
   npm install
   npx prisma generate
   npm run start:dev
   ```

3. **Front-end**:

   ```bash
   npm install
   npm run dev
   ```

4. **Login**

   * Navigate to: `http://localhost:5173/login`
   * Use the following test credentials (seed data populated via Prisma for testing):

     ```
     Email:    raul_test@example.com
     Password: 123456
     ```

5. **API Features**

   * Endpoint for refresh token
   * Sign-up and logout endpoints
   * “Get all” and “Get by ID” endpoints
   * Most routes are protected with JWT (using Passport.js)

6. **Database**

   * We use a PostgreSQL Docker image. Start it with:

     ```bash
     docker compose up -d
     ```

7. **Front-end Layout**
   I’ve tried to recreate the mock-up layout as closely as possible, but ran out of time to match every design detail exactly.
