import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardFilters() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Overview of your hiring pipeline</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          Last Month
        </Button>
        <Button variant="outline" size="sm" className="gap-2 text-sm">
          All Roles
          <ChevronDown className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
