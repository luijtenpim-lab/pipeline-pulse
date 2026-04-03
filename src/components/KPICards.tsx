import { TrendingUp, Users, Briefcase, FileCheck } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
}

function KPICard({ title, value, subtitle, icon, accentColor }: KPICardProps) {
  return (
    <div
      className="rounded-xl border border-border bg-card p-5 flex items-start gap-4"
      style={{ borderLeftWidth: "4px", borderLeftColor: accentColor }}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">{title}</span>
        <span className="text-2xl font-bold text-card-foreground">{value}</span>
        <span className="text-xs text-muted-foreground mt-0.5">{subtitle}</span>
      </div>
    </div>
  );
}

interface KPICardsProps {
  successRate: number;
  totalApplicants: number;
  openPositions: number;
  offersMade: number;
}

export function KPICards({ successRate, totalApplicants, openPositions, offersMade }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard
        title="Success Rate"
        value={`${successRate}%`}
        subtitle="Hires vs applicants"
        icon={<TrendingUp className="h-5 w-5" />}
        accentColor="hsl(24, 95%, 53%)"
      />
      <KPICard
        title="Total Applicants"
        value={totalApplicants}
        subtitle="This month"
        icon={<Users className="h-5 w-5" />}
        accentColor="hsl(142, 71%, 45%)"
      />
      <KPICard
        title="Open Positions"
        value={openPositions}
        subtitle="Currently hiring"
        icon={<Briefcase className="h-5 w-5" />}
        accentColor="hsl(217, 91%, 60%)"
      />
      <KPICard
        title="Offers Made"
        value={offersMade}
        subtitle="Pending & accepted"
        icon={<FileCheck className="h-5 w-5" />}
        accentColor="hsl(47, 96%, 53%)"
      />
    </div>
  );
}
