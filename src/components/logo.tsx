import { CodeIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <CodeIcon className="h-6 w-6" />
      <span className="font-semibold">shadcn clone</span>
    </div>
  );
}
