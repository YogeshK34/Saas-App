import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const reports = [
  {
    id: 1,
    name: "Q4 Financial Report",
    status: "Completed",
    date: "2023-12-31",
  },
  {
    id: 2,
    name: "Annual Marketing Strategy",
    status: "In Progress",
    date: "2024-01-15",
  },
  {
    id: 3,
    name: "Customer Satisfaction Survey",
    status: "Pending",
    date: "2024-02-01",
  },
  {
    id: 4,
    name: "Product Launch Analysis",
    status: "Completed",
    date: "2023-11-30",
  },
  {
    id: 5,
    name: "Employee Engagement Report",
    status: "In Review",
    date: "2024-01-20",
  },
];

export function Reports() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Report Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.name}</TableCell>
            <TableCell>{report.status}</TableCell>
            <TableCell>{report.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
