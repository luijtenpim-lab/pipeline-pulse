
## Recruitment Dashboard — "Hiring Labs"

### Design
Dark-themed dashboard matching the reference image: dark gray/navy backgrounds, card-based layout, blue accent colors, clean typography, and a collapsible icon sidebar.

### Pages & Navigation
- **Sidebar**: Collapsible with icons — Dashboard, Job Positions, Applicants, Interviews
- **Dashboard** (main page) — the overview described below
- **Job Positions, Applicants, Interviews** — placeholder pages for now

### Dashboard Sections

1. **Overview KPI Cards** — Success Rate (%), Total Applicants, Open Positions, Offers Made. Cards with colored left borders (orange, green, blue, yellow) as in the reference.

2. **Interviews Donut Chart** — Using Recharts, showing Unscheduled / Scheduled / Pending Review / Completed with total count in center. Tooltip on hover.

3. **Filters** — "Last Month" time filter button + "All Roles" dropdown at top right.

4. **Open Positions Table** — Columns: Position, Role, Applicants. Sortable headers + "View All" button + "+" add button.

5. **Recent Activity Table** — Columns: Role, Time, Status (badges: Proceed=green, Reject=red, Pending=gray). "View All" button.

6. **Company branding footer** in sidebar (logo + name + role).

### AI Chatbot
- Floating chat button (bottom-right) that opens a chat panel
- Uses Lovable Cloud edge function calling Lovable AI gateway
- Answers questions about dashboard data (e.g., "What's our highest-demand role?")
- Chat history persisted in Supabase so users can return to past conversations

### Data Layer (Lovable Cloud — added later)
For now, use realistic sample/mock data with the same shape as future DB tables:
- `candidates` (id, name, role, status, applied_at)
- `positions` (id, title, role, applicants_count, status)
- `interviews` (id, candidate_id, position_id, stage, scheduled_at)
- `decisions` (id, role, status, created_at)

Data will be structured so that when backend is added, metrics are computed from real data.

### Tech
- React + TypeScript + Tailwind (dark theme via CSS variables)
- Recharts for donut chart
- Shadcn sidebar, table, badge, button components
- Lovable Cloud for AI chatbot edge function + chat history storage
