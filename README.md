# GitHub User App

> For users who want to view a list of user names, search for users by username, and also view the repository of the selected user

This project was built using React, TypeScript, Redux and Bootstrap.

## Installation

1. Clone the repo

2. Go to the project root directory then:

   `npm install`

3. Then, you can run:

   `npm start`

4. You can run the test runner using:

   `npm test`

## Architecture

This project using Redux which was an implementation of state management.

    ├── src
    │   ├── __tests__
    │   ├── components
    │   ├── services
    │   ├── store
    │   └── types
    │   └── App.tsx
    │   └── index.tsx

- **`src/__tests__`**: Contains unit tests and integration tests.
- **`src/components`**: Contains React components.
- **`src/services`**: Contains API service functions.
- **`src/store`**: Contains Redux action creators, reducers.
- **`src/types`**: Contains models of data.
- **`src/App.tsx`**: Main component that handles routing.
- **`src/index.tsx`**: Entry point of the application.
