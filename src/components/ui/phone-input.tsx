
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onChange, ...props }, ref) => {
    // Track cursor position
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [cursorPosition, setCursorPosition] = useState<number | null>(null);

    // Format the phone number with mask
    const formatPhoneNumber = (value: string) => {
      if (!value) return "";

      // Remove all non-digit characters
      const digits = value.replace(/\D/g, "");
      
      // Limit to 10 digits
      const limitedDigits = digits.slice(0, 10);
      
      // Format the number as (XXX) XXX-XXXX
      if (limitedDigits.length === 0) {
        return "";
      } else if (limitedDigits.length <= 3) {
        return `(${limitedDigits}`;
      } else if (limitedDigits.length <= 6) {
        return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      } else {
        return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 10)}`;
      }
    };

    // Calculate cursor position after formatting
    const calculateCursorPosition = (formattedValue: string, previousValue: string, previousCursorPosition: number) => {
      // Current format: (XXX) XXX-XXXX
      // Parenthesis at positions 0, 4
      // Space at position 5
      // Dash at position 9
      
      const valueBeforeCursor = previousValue.slice(0, previousCursorPosition);
      const digitsBeforeCursor = valueBeforeCursor.replace(/\D/g, "").length;
      
      if (digitsBeforeCursor <= 3) {
        // Account for opening parenthesis
        return digitsBeforeCursor + 1; 
      } else if (digitsBeforeCursor <= 6) {
        // Account for opening parenthesis, closing parenthesis, and space
        return digitsBeforeCursor + 3; 
      } else {
        // Account for opening parenthesis, closing parenthesis, space, and dash
        return digitsBeforeCursor + 4; 
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const cursorPos = e.target.selectionStart;
      
      // Save cursor position before formatting
      if (cursorPos !== null) {
        setCursorPosition(calculateCursorPosition(formatPhoneNumber(inputValue), value, cursorPos));
      }
      
      // Pass the raw digits to the parent component
      onChange(inputValue.replace(/\D/g, ""));
    };

    // Update the displayed value with formatting
    useEffect(() => {
      if (inputRef.current && cursorPosition !== null) {
        inputRef.current.selectionStart = cursorPosition;
        inputRef.current.selectionEnd = cursorPosition;
      }
    }, [value, cursorPosition]);

    return (
      <Input
        ref={(el) => {
          // Handle both the forwarded ref and our local ref
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
          inputRef.current = el;
        }}
        type="tel"
        className={cn(className)}
        value={formatPhoneNumber(value)}
        onChange={handleChange}
        placeholder="(555) 123-4567"
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
