import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "btn-primary hover:opacity-90",
      secondary: "btn-secondary hover:opacity-80", 
      accent: "btn-accent hover:opacity-80",
      destructive: "btn-destructive hover:opacity-90",
      outline: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-12 px-4",
      lg: "h-14 px-6 text-lg"
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, (children.props as any).className),
      } as any);
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };