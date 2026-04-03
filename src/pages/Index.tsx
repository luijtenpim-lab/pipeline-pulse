import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardFilters } from "@/components/DashboardFilters";
import { KPICards } from "@/components/KPICards";
import { InterviewsChart } from "@/components/InterviewsChart";
import { OpenPositionsTable } from "@/components/OpenPositionsTable";
import { RecentActivity } from "@/components/RecentActivity";
import { AIChatbot } from "@/components/AIChatbot";
import { getMetrics, getInterviewStats, positions, decisions } from "@/data/mockData";

const Index = () => {
  const metrics = getMetrics();
  const interviewStats = getInterviewStats();

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <DashboardFilters />

        <KPICards
          successRate={metrics.successRate}
          totalApplicants={metrics.totalApplicants}
          openPositions={metrics.openPositions}
          offersMade={metrics.offersMade}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InterviewsChart
            unscheduled={interviewStats.unscheduled}
            scheduled={interviewStats.scheduled}
            pendingReview={interviewStats.pendingReview}
            completed={interviewStats.completed}
            total={interviewStats.total}
          />
          <OpenPositionsTable positions={positions} />
        </div>

        <RecentActivity decisions={decisions} />
      </div>

      <AIChatbot />
    </DashboardLayout>
  );
};

export default Index;
