# Secret Santa

A Secret Santa gift exchange application.

## Development Workflow

This project uses **GitFlow** for branch management. Please familiarize yourself with the workflow before contributing.

### Quick Start

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd secretSanta
   ```

2. Checkout the develop branch:
   ```bash
   git checkout develop
   git pull origin develop
   ```

3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes, commit, and push:
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   git push -u origin feature/your-feature-name
   ```

5. Create a Pull Request to the `develop` branch

### Branch Structure

- `main` - Production-ready code
- `develop` - Main development branch
- `feature/*` - New features (branch from `develop`)
- `release/*` - Release preparation (branch from `develop`)
- `hotfix/*` - Critical fixes (branch from `main`)

For detailed GitFlow instructions, see [GITFLOW.md](./GITFLOW.md)

## Contributing

1. Follow the GitFlow workflow
2. Write meaningful commit messages
3. Add tests for new features
4. Update documentation as needed
5. Create Pull Requests for all changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
