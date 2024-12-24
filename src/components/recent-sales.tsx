"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function RecentSales() {
  return (
    <div className="space-y-8">
      {[
        {
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          amount: "+$1,999.00",
          avatar: "/avatars/01.png",
          fallback: "OM",
        },
        {
          name: "Jackson Lee",
          email: "jackson.lee@email.com",
          amount: "+$39.00",
          avatar: "/avatars/02.png",
          fallback: "JL",
        },
        {
          name: "Isabella Nguyen",
          email: "isabella.nguyen@email.com",
          amount: "+$299.00",
          avatar: "/avatars/03.png",
          fallback: "IN",
        },
        {
          name: "William Kim",
          email: "will@email.com",
          amount: "+$99.00",
          avatar: "/avatars/04.png",
          fallback: "WK",
        },
        {
          name: "Sofia Davis",
          email: "sofia.davis@email.com",
          amount: "+$39.00",
          avatar: "/avatars/05.png",
          fallback: "SD",
        },
      ].map((sale, index) => (
        <MotionDiv
          key={sale.name}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatar} alt="Avatar" />
            <AvatarFallback>{sale.fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </MotionDiv>
      ))}
    </div>
  );
}
