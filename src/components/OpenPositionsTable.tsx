import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Position } from "@/data/mockData";

interface OpenPositionsTableProps {
  positions: Position[];
}

export function OpenPositionsTable({ positions }: OpenPositionsTableProps) {
  const openPositions = positions.filter(p => p.status === "open").slice(0, 5);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">Open Positions</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary">
            View All
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Position</th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Role</th>
              <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Applicants</th>
            </tr>
          </thead>
          <tbody>
            {openPositions.map((position) => (
              <tr key={position.id} className="border-b border-border/50 last:border-0">
                <td className="py-3 text-sm text-card-foreground">{position.title}</td>
                <td className="py-3">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {position.role}
                  </Badge>
                </td>
                <td className="py-3 text-right text-sm text-card-foreground">{position.applicantsCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
