import { Metadata } from "next";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { CustomerTable } from "@/components/customer-table";

export const metadata: Metadata = {
  title: "Customers",
  description: "Customer management dashboard.",
};

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <CustomerTable />
    </div>
  );
}
