import { DashboardLayout } from "@/components/DashboardLayout";
import { Calendar } from "lucide-react";

const Interviews = () => (
  <DashboardLayout>
    <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
      <Calendar className="h-12 w-12 mb-4" />
      <h2 className="text-xl font-semibold text-foreground">Interviews</h2>
      <p className="text-sm mt-1">Coming soon — schedule and track all interviews.</p>
    </div>
  </DashboardLayout>
);

export default Interviews;
