import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const inputVariants = cva(
  "flex rounded-md border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-800 border-gray-200",
        glossy: "bg-white/10 border-white/20 text-white backdrop-blur-md shadow-inner",
        filled: "bg-gray-100 border-gray-200 text-gray-800",
      },
      inputSize: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6",
        pill: "h-10 px-4 py-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export type InputSize = 'default' | 'sm' | 'lg' | 'pill';
export type InputVariant = 'default' | 'glossy' | 'filled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    inputSize?: InputSize;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input }; 