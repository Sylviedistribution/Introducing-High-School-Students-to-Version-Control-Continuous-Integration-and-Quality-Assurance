# Quality Assurance Report

## Project

Calculator Checkpoint

---

## Unit Tests

The project includes automated unit tests using Jest.

The following functionalities are covered:

- Addition
- Subtraction
- Multiplication
- Division
- Percentage calculation
- Division by zero
- Generic calculation method

All tests pass successfully.

---

## Static Code Analysis

ESLint was integrated into the project.

The source code was checked for:

- undefined variables;
- syntax issues;
- unused variables;
- coding style consistency.

No linting errors remain in the final version.

---

## Continuous Integration

GitHub Actions was configured to automatically execute:

- dependency installation;
- ESLint verification;
- Jest unit tests.

Every push automatically validates the project.

---

## Version Control

Git was used throughout development.

Development was divided into two feature branches:

- feature/style
- feature/functions

Both branches were merged into the main branch after completion.

A merge conflict was intentionally generated and successfully resolved.

---

## Code Review

Development followed a Pull Request workflow.

Feature branches were reviewed before being merged into the main branch.

---

## Conclusion

The project satisfies the required quality assurance objectives by combining automated testing, static code analysis, version control, and continuous integration.