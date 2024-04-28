import { ComboboxCategory } from "@/components/ui/combobox";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-center border-b p-4 text-xl font-semibold">
      <div className="text-white me-3">Subject: </div>
      <ComboboxCategory />
    </nav>
  );
}
