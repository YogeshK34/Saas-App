import { Metadata } from "next";
import { ProductsView } from "@/components/products-view";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Product management dashboard.",
};

export default function ProductsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>
      <ProductsView />
    </div>
  );
}
