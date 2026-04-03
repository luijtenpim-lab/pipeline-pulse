import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Decision } from "@/data/mockData";
import { getTimeAgo } from "@/data/mockData";

interface RecentActivityProps {
  decisions: Decision[];
}

const statusStyles: Record<string, string> = {
  proceed: "bg-[hsl(142,71%,45%)]/15 text-[hsl(142,71%,45%)] border-[hsl(142,71%,45%)]/30",
  reject: "bg-destructive/15 text-destructive border-destructive/30",
  pending: "bg-muted text-muted-foreground border-border",
};

export function RecentActivity({ decisions }: RecentActivityProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Recent Activity</h3>
        <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary">
          View All
        </Button>
      </div>
      <div className="space-y-0">
        {decisions.slice(0, 6).map((decision) => (
          <div
            key={decision.id}
            className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
          >
            <div className="flex flex-col">
              <span className="text-sm text-card-foreground">{decision.candidateName}</span>
              <span className="text-xs text-muted-foreground">{decision.role}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{getTimeAgo(decision.createdAt)}</span>
              <Badge
                variant="outline"
                className={`text-xs capitalize ${statusStyles[decision.status]}`}
              >
                {decision.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
