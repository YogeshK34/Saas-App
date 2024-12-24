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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function NewTeamPage() {
  const { toast } = useToast();

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Team</CardTitle>
          <CardDescription>
            Set up a new team and invite members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Team created",
                description: "Your new team has been successfully created.",
              });
            }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Label htmlFor="teamName">Team Name</Label>
              <Input id="teamName" placeholder="Enter team name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamDescription">Team Description</Label>
              <Textarea
                id="teamDescription"
                placeholder="Describe your team's purpose"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inviteMembers">
                Invite Members (comma-separated emails)
              </Label>
              <Input
                id="inviteMembers"
                placeholder="email1@example.com, email2@example.com"
              />
            </div>
            <Button type="submit">Create Team</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
