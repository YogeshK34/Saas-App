"use client"

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

const products = [
  {
    id: "1",
    name: "Premium Package",
    description: "Complete business solution for growing companies",
    price: "$99.99",
    status: "Active",
    subscribers: 2341,
  },
  {
    id: "2",
    name: "Basic Package",
    description: "Essential tools for small businesses",
    price: "$29.99",
    status: "Active",
    subscribers: 1422,
  },
  {
    id: "3",
    name: "Enterprise Solution",
    description: "Custom solution for large organizations",
    price: "$499.99",
    status: "Draft",
    subscribers: 89,
  },
  // Add more products here
]

export function ProductsView() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {product.name}
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit product</DropdownMenuItem>
                <DropdownMenuItem>View analytics</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Delete product
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{product.price}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {product.description}
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <Badge variant={product.status === "Active" ? "default" : "secondary"}>
                {product.status}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {product.subscribers} subscribers
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


