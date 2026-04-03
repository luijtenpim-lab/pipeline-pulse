import { DashboardLayout } from "@/components/DashboardLayout";
import { Users } from "lucide-react";

const Applicants = () => (
  <DashboardLayout>
    <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
      <Users className="h-12 w-12 mb-4" />
      <h2 className="text-xl font-semibold text-foreground">Applicants</h2>
      <p className="text-sm mt-1">Coming soon — browse and manage all candidates.</p>
    </div>
  </DashboardLayout>
);

export default Applicants;
