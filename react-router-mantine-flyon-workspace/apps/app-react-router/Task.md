# Task 5: Role-Based Team Workspace

## Objective
Build a **Role-Based Team Workspace** web application that tests real-world backend and frontend engineering skills, including authentication, authorization, data modeling, and UI discipline.

This is a **multi-user application**.  
**No AI APIs** may be used inside the app.

---

## Tech Stack (Mandatory)
- React
- React Router 7 (data routers, loaders, actions)
- TypeScript
- Prisma
- SQLite

---

## Functional Requirements

### 1. Authentication
- Email + password login
- Session-based authentication using cookies
- Logout support
- Protected routes (unauthenticated users must not access workspace data)

---

### 2. Workspace & Membership
- Users can belong to one or more workspaces
- Each workspace has members with one of the following roles:
  - `owner`
  - `admin`
  - `member`
  - `viewer`

---

### 3. Projects (Workspace-Scoped)
Each workspace contains projects.

Each project must include:
- `id`
- `name`
- `description`
- `createdAt`

---

### 4. Role-Based Permissions (Critical)

Permissions must be enforced **on the backend (loaders and actions)**, not only in the UI.

| Action | Owner | Admin | Member | Viewer |
|------|------|-------|--------|--------|
| Create project | ✅ | ✅ | ❌ | ❌ |
| View project | ✅ | ✅ | ✅ | ✅ |
| Edit project | ✅ | ✅ | ❌ | ❌ |
| Delete project | ✅ | ❌ | ❌ | ❌ |

Unauthorized actions must:
- Be rejected server-side
- Return appropriate HTTP errors (e.g. 403)

---

### 5. UI Requirements
- Login page
- Workspace selection page
- Project list per workspace
- UI must reflect permissions:
  - Disabled buttons
  - Hidden actions where appropriate
- Graceful empty and error states

---

## Technical Expectations
- Correct use of React Router 7 loaders and actions
- Clean Prisma schema with proper relations
- Centralized permission checks (avoid duplication)
- No business logic embedded directly in UI components
- Clear separation between:
  - Authentication
  - Authorization
  - Domain logic
  - UI

---

## Deliverables
1. Prisma schema
2. Authentication strategy
3. Permission enforcement strategy
4. Route and component structure
5. Explanation of architectural tradeoffs

Focus on **clarity, correctness, and maintainability** over completeness.

---

## Constraints
- Do NOT use AI APIs
- Do NOT skip backend authorization
- Do NOT hardcode permissions in UI components
- Do NOT rely on UI-only access control
