import { Bell, MessageSquare, UserPlus } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Your call has been confirmed.",
    description: "1 hour ago",
    icon: Bell,
  },
  {
    id: 2,
    title: "You have a new message!",
    description: "1 hour ago",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
    icon: UserPlus,
  },
];

export function Notifications() {
  return (
    <div className="space-y-8">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-center">
          <notification.icon className="h-9 w-9 text-primary" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {notification.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {notification.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
