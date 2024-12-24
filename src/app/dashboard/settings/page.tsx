"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { toast } = useToast();
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Account settings updated",
                description:
                  "Your account settings have been successfully updated.",
              });
            }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="johndoe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" defaultValue="English" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            <Button type="submit">Save Settings</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Manage your privacy preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Privacy settings updated",
                description:
                  "Your privacy settings have been successfully updated.",
              });
            }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2">
              <Switch id="publicProfile" />
              <Label htmlFor="publicProfile">Make profile public</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="dataSharing" />
              <Label htmlFor="dataSharing">Allow data sharing</Label>
            </div>
            <Button type="submit">Update Privacy Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
