# CLAUDE.md - Secret Santa Project Guide

**Last Updated:** 2025-11-16
**Repository:** Spriy4nshu/secretSanta
**License:** MIT
**Status:** Initial Setup

## Project Overview

This repository contains a Secret Santa gift exchange application. The project is currently in its initial setup phase.

### Purpose
Secret Santa is a traditional gift-giving game where participants are randomly assigned another person to give a gift to, keeping the assignment secret until revealed. This application aims to facilitate digital Secret Santa exchanges.

### Current State
- **Phase:** Project Initialization
- **Main Branch:** Not yet established
- **Development Branch:** `claude/claude-md-mi1265jm5m4bjth6-01G9bdfdEzXkgSnjcd9SXt1n`
- **Codebase:** Empty (only LICENSE file present)

## Repository Structure

```
secretSanta/
├── LICENSE           # MIT License (Copyright 2025 Priyanshu)
└── CLAUDE.md        # This file
```

### Planned Structure (To Be Implemented)

```
secretSanta/
├── src/             # Source code
├── tests/           # Test files
├── docs/            # Documentation
├── .github/         # GitHub workflows and templates
├── config/          # Configuration files
├── LICENSE          # MIT License
├── README.md        # Project documentation
├── CLAUDE.md        # AI assistant guide (this file)
└── CONTRIBUTING.md  # Contribution guidelines
```

## Development Guidelines

### Branch Strategy

**Development Branches:**
- All feature development should happen on branches prefixed with `claude/`
- Branch naming: `claude/claude-md-<session-id>`
- Current active branch: `claude/claude-md-mi1265jm5m4bjth6-01G9bdfdEzXkgSnjcd9SXt1n`

**Important:**
- NEVER push directly to main/master without explicit permission
- Always use `git push -u origin <branch-name>` for pushing
- Branch names MUST start with `claude/` and end with matching session ID to avoid 403 errors

### Git Workflow

#### Committing Changes
```bash
# Stage relevant files
git add <files>

# Commit with descriptive message
git commit -m "$(cat <<'EOF'
Brief summary of changes

Detailed description if needed:
- Bullet point 1
- Bullet point 2
EOF
)"

# Verify commit
git status
```

#### Pushing Changes
```bash
# Push to feature branch
git push -u origin claude/<branch-name>

# If network errors occur, retry up to 4 times with exponential backoff:
# - Wait 2s, retry
# - Wait 4s, retry
# - Wait 8s, retry
# - Wait 16s, final retry
```

#### Fetching and Pulling
```bash
# Fetch specific branch
git fetch origin <branch-name>

# Pull with retry logic (same as push)
git pull origin <branch-name>
```

### Code Standards

#### General Principles
1. **Security First:** Avoid OWASP Top 10 vulnerabilities
   - Command injection
   - XSS (Cross-Site Scripting)
   - SQL injection
   - Insecure authentication
   - Sensitive data exposure

2. **Code Quality:**
   - Write clean, readable code
   - Follow DRY (Don't Repeat Yourself)
   - Use meaningful variable and function names
   - Add comments for complex logic

3. **Testing:**
   - Write unit tests for new features
   - Maintain test coverage above 80%
   - Test edge cases and error conditions

#### File Operations
- **Read:** Use `Read` tool for viewing files (not `cat`)
- **Edit:** Use `Edit` tool for modifications (not `sed/awk`)
- **Write:** Use `Write` tool for new files (not `echo >` or heredoc)
- **Search:** Use `Grep` tool for content search (not `grep/rg`)
- **Find:** Use `Glob` tool for file patterns (not `find/ls`)

### Technology Stack

**To Be Determined** - The technology stack has not been established yet. Common options for Secret Santa applications:

**Backend Options:**
- Node.js + Express
- Python + Flask/Django
- Ruby on Rails
- Go + Gin/Echo
- Java + Spring Boot

**Frontend Options:**
- React
- Vue.js
- Angular
- Svelte
- Plain HTML/CSS/JavaScript

**Database Options:**
- PostgreSQL
- MySQL
- MongoDB
- SQLite
- Firebase/Supabase

**Deployment Options:**
- Docker + Docker Compose
- Kubernetes
- Heroku
- Vercel/Netlify
- AWS/GCP/Azure

## Key Features (Planned)

### Core Functionality
1. **User Management:**
   - Create and manage participant accounts
   - Email/password authentication
   - Profile management

2. **Secret Santa Groups:**
   - Create gift exchange groups
   - Invite participants
   - Set budget limits
   - Configure exchange dates

3. **Assignment Logic:**
   - Random assignment algorithm
   - Prevent self-assignment
   - Handle exclusion rules (e.g., family members)
   - Re-shuffle capability

4. **Communication:**
   - Email notifications
   - Anonymous messaging between Secret Santa pairs
   - Reminder system

5. **Wishlist Management:**
   - Create and edit wishlists
   - Add links to products
   - Set preferences

### Security Considerations
- Secure password storage (bcrypt/argon2)
- HTTPS only
- CSRF protection
- Rate limiting
- Input validation and sanitization
- Secure session management
- Anonymous assignment preservation

## AI Assistant Workflow

### When Starting a New Task

1. **Read the Context:**
   - Check this CLAUDE.md file
   - Review README.md if it exists
   - Check recent commits
   - Review open issues/PRs

2. **Plan Your Work:**
   - Use `TodoWrite` tool for multi-step tasks
   - Break down complex tasks into smaller steps
   - Mark tasks as in_progress/completed

3. **Understand Before Acting:**
   - Explore codebase using `Task` tool with `subagent_type=Explore`
   - Read relevant files
   - Search for existing patterns

### Implementation Checklist

- [ ] Read relevant files before editing
- [ ] Follow existing code patterns
- [ ] Add appropriate error handling
- [ ] Write or update tests
- [ ] Update documentation
- [ ] Check for security vulnerabilities
- [ ] Run tests and builds
- [ ] Commit with descriptive messages
- [ ] Push to correct branch

### Common Tasks

#### Adding a New Feature
```markdown
1. Explore existing codebase structure
2. Design the feature (create TodoList)
3. Implement core functionality
4. Add error handling
5. Write tests
6. Update documentation
7. Run test suite
8. Commit and push
```

#### Fixing a Bug
```markdown
1. Reproduce the bug
2. Identify root cause
3. Write a failing test
4. Fix the issue
5. Verify test passes
6. Check for similar issues
7. Commit and push
```

#### Code Review
```markdown
1. Check for security vulnerabilities
2. Verify error handling
3. Review test coverage
4. Check code style consistency
5. Validate documentation
6. Test functionality
```

## Conventions

### Naming Conventions

**Files and Directories:**
- Use kebab-case for directories: `user-management/`
- Use camelCase or kebab-case for files: `userController.js` or `user-controller.js`
- Test files: `*.test.js` or `*.spec.js`

**Code:**
- Variables: camelCase (`userName`, `isActive`)
- Constants: UPPER_SNAKE_CASE (`MAX_USERS`, `API_KEY`)
- Classes: PascalCase (`UserManager`, `SecretSantaGroup`)
- Functions: camelCase (`getUserById`, `assignSecretSanta`)

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example:**
```
feat: Add user registration endpoint

Implement POST /api/users/register endpoint with:
- Email validation
- Password hashing with bcrypt
- Duplicate email check
- JWT token generation

Closes #42
```

### Documentation Standards

- Keep README.md updated with setup instructions
- Document all public APIs
- Add JSDoc/docstrings for functions
- Maintain changelog for releases
- Update this CLAUDE.md as project evolves

## Testing Strategy

### Test Types

1. **Unit Tests:**
   - Test individual functions/methods
   - Mock external dependencies
   - Fast execution

2. **Integration Tests:**
   - Test component interactions
   - Use test database
   - Test API endpoints

3. **End-to-End Tests:**
   - Test complete user flows
   - Simulate real user behavior
   - Run in staging environment

### Test Coverage Goals
- **Minimum:** 80% code coverage
- **Critical paths:** 100% coverage
- **Edge cases:** Always test
- **Error handling:** Always test

## Deployment

### Environment Variables

**Required (To Be Determined):**
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: Secret for token signing
- `SMTP_HOST`: Email server host
- `SMTP_PORT`: Email server port
- `SMTP_USER`: Email username
- `SMTP_PASS`: Email password
- `APP_URL`: Application base URL

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No security vulnerabilities
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Monitoring/logging configured
- [ ] Backup strategy in place
- [ ] Rollback plan prepared

## Troubleshooting

### Common Issues

**Git Push Fails with 403:**
- Ensure branch name starts with `claude/` and ends with session ID
- Verify remote URL is correct
- Check network connectivity

**Tests Failing:**
- Check environment variables
- Verify database is running
- Clear cache and reinstall dependencies
- Check for port conflicts

**Build Errors:**
- Clear build cache
- Update dependencies
- Check for syntax errors
- Verify configuration files

## Resources

### Documentation
- Project README: `/README.md` (to be created)
- API Documentation: `/docs/api.md` (to be created)
- Contributing Guide: `/CONTRIBUTING.md` (to be created)

### External Resources
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Semantic Versioning](https://semver.org/)

## Project Roadmap

### Phase 1: Foundation (Current)
- [x] Initialize repository
- [x] Add LICENSE
- [x] Create CLAUDE.md
- [ ] Create README.md
- [ ] Choose technology stack
- [ ] Set up project structure
- [ ] Configure development environment

### Phase 2: Core Features
- [ ] User authentication system
- [ ] Group creation and management
- [ ] Assignment algorithm
- [ ] Email notifications
- [ ] Basic UI

### Phase 3: Enhanced Features
- [ ] Wishlist management
- [ ] Anonymous messaging
- [ ] Mobile responsiveness
- [ ] Advanced exclusion rules
- [ ] Admin dashboard

### Phase 4: Polish & Deploy
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation completion
- [ ] Production deployment

## Notes for AI Assistants

### Best Practices

1. **Always Read First:** Use `Read` tool before editing any file
2. **Use TodoWrite:** Track multi-step tasks proactively
3. **Parallel Operations:** Run independent tasks simultaneously
4. **Security Mindset:** Always consider security implications
5. **Test Everything:** Run tests before committing
6. **Clear Communication:** Explain changes to the user
7. **Follow Patterns:** Maintain consistency with existing code

### Anti-Patterns to Avoid

- ❌ Creating files unnecessarily (prefer editing existing)
- ❌ Using bash for file operations (use dedicated tools)
- ❌ Pushing to wrong branch
- ❌ Skipping tests
- ❌ Committing without description
- ❌ Ignoring security vulnerabilities
- ❌ Making assumptions (ask if unclear)

### When in Doubt

1. **Explore First:** Use Task tool with Explore agent
2. **Ask Questions:** Clarify requirements with user
3. **Check Patterns:** Look at existing code
4. **Test Thoroughly:** Better safe than sorry
5. **Document Decisions:** Leave clear comments

## Changelog

### 2025-11-16 - Initial Setup
- Created repository
- Added MIT License
- Created CLAUDE.md guide

---

**Note:** This document should be updated as the project evolves. All AI assistants should review this file before starting work on the repository.
