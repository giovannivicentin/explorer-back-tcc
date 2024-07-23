# Food Explorer Backend

Backend application for the Food Explorer digital menu, built using Node.js.

## About

Food Explorer's backend is developed as a part of the digital menu app project. It uses Node.js to handle server-side operations, including user authentication, data management, and API services for the frontend. Key features include CRUD operations for dishes and ingredients, secure user authentication, and database interactions.

## Features

- Clean and organized folder structure for maintainability.
- User authentication system.
- CRUD operations for dishes and ingredients.
- Secure database interactions.
- API services for frontend integration.
- Responsive design support.

## How to Run

### Prerequisites

Ensure the following tools are installed on your machine:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with npm

A code editor like [VSCode](https://code.visualstudio.com/) is recommended for editing the project files.

### Backend Setup

```bash
git clone https://github.com/giovannivicentin/explorer-back-tcc
cd explorer-back-tcc
npm install
npm run migrate
npm run seed
npm run dev
# The server starts at http://localhost:3333
```

### Frontend Setup

```bash
git clone https://github.com/giovannivicentin/explorer-front-tcc
cd explorer-front-tcc
npm install
npm run dev
# The application will be available at http://127.0.0.1:5173/
```

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: SQLite
- **Authentication**: JWT
- **File Uploads**: Multer
- **Environment Variables**: dotenv
- **Testing**: Jest
- **Linting**: ESLint
- **Development Tools**: Nodemon, Sucrase, PM2

## Author

[Giovanni Vicentin](https://github.com/giovannivicentin)

## License

This project is licensed under the [MIT License](./LICENSE).