import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const topProducts = [
  {
    name: "Premium Package",
    sales: 1234,
    revenue: "$12,340",
    status: "Trending",
  },
  {
    name: "Basic Package",
    sales: 876,
    revenue: "$4,380",
    status: "Stable",
  },
  {
    name: "Enterprise Solution",
    sales: 234,
    revenue: "$23,400",
    status: "Declining",
  },
  {
    name: "Add-on: Analytics",
    sales: 543,
    revenue: "$2,715",
    status: "New",
  },
  {
    name: "Add-on: Support",
    sales: 321,
    revenue: "$3,210",
    status: "Stable",
  },
];

export function TopProducts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topProducts.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.sales}</TableCell>
            <TableCell>{product.revenue}</TableCell>
            <TableCell>
              <Badge
                variant={
                  product.status === "Trending"
                    ? "default"
                    : product.status === "New"
                    ? "secondary"
                    : product.status === "Declining"
                    ? "destructive"
                    : "outline"
                }
              >
                {product.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
