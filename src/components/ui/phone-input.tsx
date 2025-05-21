
import React, { useRef, useState, forwardRef } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const cursorPos = e.target.selectionStart || 0;
      const previousFormattedValue = formatPhoneNumber(value);
      
      // Count non-digit characters before cursor in the current input value
      let nonDigitsBefore = 0;
      for (let i = 0; i < cursorPos; i++) {
        if (!/\d/.test(inputValue[i])) {
          nonDigitsBefore++;
        }
      }
      
      // Get the digits from the input
      const newDigits = inputValue.replace(/\D/g, "").slice(0, 10);
      
      // Update the parent with just the digits
      onChange(newDigits);
      
      // After React updates, we need to set the cursor position properly
      // This scheduling ensures our cursor update happens after React's render
      setTimeout(() => {
        if (inputRef.current) {
          const newFormattedValue = formatPhoneNumber(newDigits);
          
          // Calculate new cursor position
          const digitsPortion = cursorPos - nonDigitsBefore;
          
          // Adjust for special positions (right after formatting characters)
          let newPosition = digitsPortion;
          
          if (digitsPortion <= 3) {
            // Account for opening parenthesis
            newPosition = digitsPortion + 1;
          } else if (digitsPortion <= 6) {
            // Account for opening parenthesis, closing parenthesis, and space
            newPosition = digitsPortion + 3;
          } else {
            // Account for opening parenthesis, closing parenthesis, space, and dash
            newPosition = digitsPortion + 4;
          }
          
          // Ensure cursor position is within bounds
          newPosition = Math.min(newPosition, newFormattedValue.length);
          
          inputRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    };

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
