# Reflection Report

Working on this project helped me better understand how professional software development workflows are organized.

One of the first challenges I faced was learning how to use Git efficiently. While creating commits was straightforward, working with branches and resolving merge conflicts required more attention. Creating separate branches for styling and functionality showed me how different features can be developed independently before being merged into the main branch. Resolving a merge conflict also gave me practical experience handling situations that frequently occur in collaborative projects.

Setting up GitHub Actions was another valuable learning experience. At first, the YAML configuration seemed unfamiliar, but I gradually understood that every push automatically creates a temporary environment where dependencies are installed, the code is checked with ESLint, and unit tests are executed with Jest. This automation reduces the risk of introducing broken code into the repository and provides immediate feedback whenever something goes wrong.

Writing unit tests with Jest also changed the way I think about software quality. Instead of manually testing every calculator operation, I could verify that the application's core logic behaved correctly through automated tests. Combined with ESLint, this ensured that both the functionality and the quality of the code were continuously verified.

Overall, this project demonstrated how version control, continuous integration, and quality assurance complement each other. Git makes collaboration and history tracking possible, Jest validates application behavior, ESLint improves code quality, and GitHub Actions automates the entire verification process. Together, these tools create a more reliable and maintainable software development workflow.