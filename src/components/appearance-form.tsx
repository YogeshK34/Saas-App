"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.string({
    required_error: "Please select a font.",
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

export function AppearanceForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
  });

  function onSubmit(data: AppearanceFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Appearance</h3>
            <p className="text-sm text-muted-foreground">
              Customize the appearance of the app. Automatically switch between
              day and night themes.
            </p>
          </div>
          <FormField
            control={form.control}
            name="font"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Font</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="manrope">Manrope</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Set the font you want to use in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Theme</FormLabel>
                <FormDescription>
                  Select the theme for the dashboard.
                </FormDescription>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid max-w-md grid-cols-2 gap-8 pt-2"
                >
                  <Label
                    htmlFor="light"
                    className="[&:has([data-state=checked])>div]:border-primary"
                  >
                    <RadioGroupItem
                      value="light"
                      id="light"
                      className="sr-only"
                    />
                    <div className="rounded-md border-2 border-muted p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Light</h4>
                        <div className="space-y-1">
                          <div className="h-2 w-[80px] rounded-lg bg-primary" />
                          <div className="h-2 w-[100px] rounded-lg bg-muted" />
                        </div>
                      </div>
                    </div>
                  </Label>
                  <Label
                    htmlFor="dark"
                    className="[&:has([data-state=checked])>div]:border-primary"
                  >
                    <RadioGroupItem
                      value="dark"
                      id="dark"
                      className="sr-only"
                    />
                    <div className="rounded-md border-2 border-muted bg-popover p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dark</h4>
                        <div className="space-y-1">
                          <div className="h-2 w-[80px] rounded-lg bg-primary" />
                          <div className="h-2 w-[100px] rounded-lg bg-muted" />
                        </div>
                      </div>
                    </div>
                  </Label>
                </RadioGroup>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  );
}
