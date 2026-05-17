import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-mono rounded-full",
        "bg-[var(--surface-2)] text-[var(--text-muted)] border border-[var(--border)]",
        "hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200",
        className
      )}
    >
      {label}
    </span>
  );
}
