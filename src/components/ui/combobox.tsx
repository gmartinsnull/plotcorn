"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { subjects } from "@/components/ui/subjects";
import { useAppContext } from "@/app/context/CategoryContext";

export function ComboboxCategory() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { categoryValue, setCategoryValue } = useAppContext();

  const categories = subjects.sort((a, b) => a.value.localeCompare(b.value));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          aria-label="Select Category"
          className="w-[200px] justify-between dark:text-white"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select Category"}
          <ChevronsUpDown className="ml-2 hidden h-4 w-4 shrink-0 opacity-50 lg:block" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No department found.</CommandEmpty>
            <CommandGroup>
              {subjects.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    const selectedValue =
                      currentValue === value ? "" : currentValue;
                    setValue(selectedValue);
                    setOpen(false);
                    setCategoryValue(selectedValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
