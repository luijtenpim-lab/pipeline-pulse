import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface InterviewsChartProps {
  unscheduled: number;
  scheduled: number;
  pendingReview: number;
  completed: number;
  total: number;
}

const COLORS = [
  "hsl(215, 20%, 65%)",   // unscheduled - muted
  "hsl(217, 91%, 60%)",   // scheduled - blue
  "hsl(47, 96%, 53%)",    // pending review - yellow
  "hsl(142, 71%, 45%)",   // completed - green
];

export function InterviewsChart({ unscheduled, scheduled, pendingReview, completed, total }: InterviewsChartProps) {
  const data = [
    { name: "Unscheduled", value: unscheduled },
    { name: "Scheduled", value: scheduled },
    { name: "Pending Review", value: pendingReview },
    { name: "Completed", value: completed },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">Interviews</h3>
      <div className="flex items-center gap-6">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(217, 33%, 17%)",
                  border: "1px solid hsl(217, 33%, 25%)",
                  borderRadius: "8px",
                  color: "hsl(210, 40%, 98%)",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-card-foreground">{total}</span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span className="text-sm text-muted-foreground">{item.name}</span>
              <span className="text-sm font-medium text-card-foreground ml-auto">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
