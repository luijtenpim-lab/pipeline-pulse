export interface Candidate {
  id: string;
  name: string;
  role: string;
  status: "applied" | "screening" | "interview" | "offer" | "hired" | "rejected";
  appliedAt: string;
}

export interface Position {
  id: string;
  title: string;
  role: string;
  applicantsCount: number;
  status: "open" | "closed" | "on-hold";
}

export interface Interview {
  id: string;
  candidateId: string;
  positionId: string;
  stage: "unscheduled" | "scheduled" | "pending_review" | "completed";
  scheduledAt: string | null;
}

export interface Decision {
  id: string;
  role: string;
  candidateName: string;
  status: "proceed" | "reject" | "pending";
  createdAt: string;
}

export const candidates: Candidate[] = [
  { id: "c1", name: "Sarah Johnson", role: "UI/UX Designer", status: "hired", appliedAt: "2026-03-01" },
  { id: "c2", name: "Michael Chen", role: "Frontend Developer", status: "interview", appliedAt: "2026-03-05" },
  { id: "c3", name: "Emma Wilson", role: "Backend Developer", status: "offer", appliedAt: "2026-03-08" },
  { id: "c4", name: "James Brown", role: "Product Manager", status: "screening", appliedAt: "2026-03-10" },
  { id: "c5", name: "Olivia Davis", role: "Data Analyst", status: "applied", appliedAt: "2026-03-12" },
  { id: "c6", name: "William Martinez", role: "DevOps Engineer", status: "interview", appliedAt: "2026-03-14" },
  { id: "c7", name: "Sophia Taylor", role: "UI/UX Designer", status: "rejected", appliedAt: "2026-03-02" },
  { id: "c8", name: "Daniel Anderson", role: "Frontend Developer", status: "hired", appliedAt: "2026-02-28" },
  { id: "c9", name: "Isabella Thomas", role: "Backend Developer", status: "interview", appliedAt: "2026-03-15" },
  { id: "c10", name: "Liam Jackson", role: "QA Engineer", status: "offer", appliedAt: "2026-03-18" },
  { id: "c11", name: "Ava White", role: "Product Manager", status: "applied", appliedAt: "2026-03-20" },
  { id: "c12", name: "Noah Harris", role: "Data Analyst", status: "screening", appliedAt: "2026-03-22" },
  { id: "c13", name: "Mia Clark", role: "Frontend Developer", status: "interview", appliedAt: "2026-03-25" },
  { id: "c14", name: "Ethan Lewis", role: "UI/UX Designer", status: "applied", appliedAt: "2026-03-27" },
  { id: "c15", name: "Charlotte Robinson", role: "DevOps Engineer", status: "hired", appliedAt: "2026-02-20" },
  { id: "c16", name: "Lucas Walker", role: "Backend Developer", status: "screening", appliedAt: "2026-03-28" },
  { id: "c17", name: "Amelia Young", role: "QA Engineer", status: "interview", appliedAt: "2026-03-29" },
  { id: "c18", name: "Mason King", role: "Frontend Developer", status: "rejected", appliedAt: "2026-03-03" },
  { id: "c19", name: "Harper Wright", role: "Product Manager", status: "offer", appliedAt: "2026-03-30" },
  { id: "c20", name: "Alexander Scott", role: "Data Analyst", status: "applied", appliedAt: "2026-03-31" },
];

export const positions: Position[] = [
  { id: "p1", title: "Senior UI/UX Designer", role: "Design", applicantsCount: 45, status: "open" },
  { id: "p2", title: "Frontend Developer", role: "Engineering", applicantsCount: 67, status: "open" },
  { id: "p3", title: "Backend Developer", role: "Engineering", applicantsCount: 52, status: "open" },
  { id: "p4", title: "Product Manager", role: "Product", applicantsCount: 38, status: "open" },
  { id: "p5", title: "Data Analyst", role: "Analytics", applicantsCount: 29, status: "open" },
  { id: "p6", title: "DevOps Engineer", role: "Engineering", applicantsCount: 31, status: "open" },
  { id: "p7", title: "QA Engineer", role: "Engineering", applicantsCount: 24, status: "on-hold" },
  { id: "p8", title: "Marketing Lead", role: "Marketing", applicantsCount: 41, status: "closed" },
];

export const interviews: Interview[] = [
  { id: "i1", candidateId: "c2", positionId: "p2", stage: "scheduled", scheduledAt: "2026-04-05T10:00:00" },
  { id: "i2", candidateId: "c6", positionId: "p6", stage: "scheduled", scheduledAt: "2026-04-06T14:00:00" },
  { id: "i3", candidateId: "c9", positionId: "p3", stage: "pending_review", scheduledAt: "2026-04-01T09:00:00" },
  { id: "i4", candidateId: "c13", positionId: "p2", stage: "unscheduled", scheduledAt: null },
  { id: "i5", candidateId: "c17", positionId: "p7", stage: "unscheduled", scheduledAt: null },
  { id: "i6", candidateId: "c1", positionId: "p1", stage: "completed", scheduledAt: "2026-03-20T11:00:00" },
  { id: "i7", candidateId: "c8", positionId: "p2", stage: "completed", scheduledAt: "2026-03-18T15:00:00" },
  { id: "i8", candidateId: "c15", positionId: "p6", stage: "completed", scheduledAt: "2026-03-15T10:00:00" },
  { id: "i9", candidateId: "c3", positionId: "p3", stage: "pending_review", scheduledAt: "2026-04-02T13:00:00" },
  { id: "i10", candidateId: "c10", positionId: "p7", stage: "scheduled", scheduledAt: "2026-04-07T16:00:00" },
];

export const decisions: Decision[] = [
  { id: "d1", role: "UI/UX Designer", candidateName: "Sarah Johnson", status: "proceed", createdAt: "2026-04-03T08:30:00" },
  { id: "d2", role: "Frontend Developer", candidateName: "Michael Chen", status: "pending", createdAt: "2026-04-03T07:15:00" },
  { id: "d3", role: "Backend Developer", candidateName: "Emma Wilson", status: "proceed", createdAt: "2026-04-02T16:45:00" },
  { id: "d4", role: "UI/UX Designer", candidateName: "Sophia Taylor", status: "reject", createdAt: "2026-04-02T14:20:00" },
  { id: "d5", role: "Frontend Developer", candidateName: "Daniel Anderson", status: "proceed", createdAt: "2026-04-02T11:00:00" },
  { id: "d6", role: "Product Manager", candidateName: "James Brown", status: "pending", createdAt: "2026-04-01T15:30:00" },
  { id: "d7", role: "DevOps Engineer", candidateName: "Charlotte Robinson", status: "proceed", createdAt: "2026-04-01T09:00:00" },
  { id: "d8", role: "Frontend Developer", candidateName: "Mason King", status: "reject", createdAt: "2026-03-31T17:00:00" },
];

// Computed metrics
export function getMetrics() {
  const totalApplicants = candidates.length;
  const hiredCount = candidates.filter(c => c.status === "hired").length;
  const successRate = Math.round((hiredCount / totalApplicants) * 100);
  const openPositions = positions.filter(p => p.status === "open").length;
  const offersMade = candidates.filter(c => c.status === "offer" || c.status === "hired").length;

  return { totalApplicants, successRate, openPositions, offersMade };
}

export function getInterviewStats() {
  const unscheduled = interviews.filter(i => i.stage === "unscheduled").length;
  const scheduled = interviews.filter(i => i.stage === "scheduled").length;
  const pendingReview = interviews.filter(i => i.stage === "pending_review").length;
  const completed = interviews.filter(i => i.stage === "completed").length;
  const total = interviews.length;

  return { unscheduled, scheduled, pendingReview, completed, total };
}

export function getTimeAgo(dateString: string): string {
  const now = new Date("2026-04-03T10:00:00");
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHrs / 24);

  if (diffHrs < 1) return "Just now";
  if (diffHrs < 24) return `${diffHrs} hrs ago`;
  if (diffDays === 1) return "Yesterday";
  return `${diffDays} days ago`;
}
