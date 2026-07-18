# Calculator Checkpoint – Version Control, Continuous Integration and Quality Assurance

## Project Overview

This project was developed as part of a Software Development checkpoint to demonstrate the use of modern software engineering practices.

The application is a simple calculator built with **HTML**, **CSS**, **JavaScript**, and **Node.js**. Although the application itself is intentionally simple, the project focuses on applying professional development workflows such as version control, automated testing, continuous integration, and code quality verification.

---

# Features

- Addition
- Subtraction
- Multiplication
- Division
- Percentage calculation
- Clear and Delete actions
- Keyboard support
- Responsive interface

---

# Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js
- Express
- Git
- GitHub
- GitHub Actions
- Jest
- ESLint

---

# Project Structure

```
.
├── .github/
│   └── workflows/
│       └── continuousIntegration.yml
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── test/
│   └── calculator.test.js
├── calculator.js
├── server.js
├── package.json
├── README.md
└── QA_REPORT.md
```

---

# Version Control

The project was developed incrementally using Git.

Several commits document the evolution of the application from the initial HTML layout to the final implementation.

Two feature branches were created:

- **feature/style**
- **feature/functions**

Each branch was merged into the main branch after development.

A merge conflict was intentionally created and manually resolved to demonstrate conflict resolution.

---

# Why use Git?

Git keeps track of every modification made to the project.

It allows developers to:

- work safely on separate branches;
- collaborate without overwriting each other's work;
- restore previous versions if necessary;
- review code before merging.

---

# Unit Testing

The calculator logic was separated into **calculator.js**.

This made it possible to write isolated unit tests using **Jest**.

The following operations are tested:

- Addition
- Subtraction
- Multiplication
- Division
- Percentage
- Division by zero
- Generic calculation function

---

# Why does `npm test` work?

Running

```bash
npm test
```

does not directly execute a JavaScript file.

Instead, npm looks inside **package.json** and executes the command associated with the **test** script.

Example:

```json
"scripts": {
  "test": "jest"
}
```

This means:

```
npm test
```

is equivalent to:

```
jest
```

Jest automatically searches the project for files named:

- `*.test.js`
- `*.spec.js`

It executes every matching test file without requiring the user to specify their path.

---

# Code Quality

ESLint is used to detect:

- syntax errors;
- undefined variables;
- unused variables;
- inconsistent coding style.

Running

```bash
npm run lint
```

helps maintain a clean and consistent codebase.

---

# Continuous Integration

GitHub Actions automatically validates every push.

The pipeline performs the following tasks:

1. Checkout the repository.
2. Install Node.js.
3. Install project dependencies.
4. Execute ESLint.
5. Execute Jest tests.

If every step succeeds, the workflow is marked as successful.

Otherwise, GitHub immediately reports the failure.

---

# Running the Project

Install dependencies

```bash
npm install
```

Start the application

```bash
npm start
```

Open

```
http://localhost:3000
```

---

# Running the Tests

```bash
npm test
```

---

# Running ESLint

```bash
npm run lint
```

---

# Screenshots

## Calculator

(Add calculator screenshot here)

## GitHub Actions

(Add GitHub Actions success screenshot here)

## Git Branches

(Add branches screenshot here)

---

# Author

IGS