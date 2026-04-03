import { DashboardLayout } from "@/components/DashboardLayout";
import { Briefcase } from "lucide-react";

const Positions = () => (
  <DashboardLayout>
    <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
      <Briefcase className="h-12 w-12 mb-4" />
      <h2 className="text-xl font-semibold text-foreground">Job Positions</h2>
      <p className="text-sm mt-1">Coming soon — manage all your open roles here.</p>
    </div>
  </DashboardLayout>
);

export default Positions;
