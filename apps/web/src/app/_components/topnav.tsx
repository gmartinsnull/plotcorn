import { ComboboxCategory } from "@/components/ui/combobox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TopNav({
  subjects,
  genres,
}: {
  subjects: { value: string; label: string }[];
  genres: { value: string; label: string }[];
}) {
  return (
    <nav className="flex h-[120px] w-full items-center justify-center border-b p-4">
      <Tabs
        defaultValue="books"
        className="h-full w-fit flex-col justify-items-center"
      >
        <TabsList>
          <TabsTrigger value="books" className="w-[150px]">
            Books
          </TabsTrigger>
          <TabsTrigger value="movies" className="w-[150px]">
            Movies
          </TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <ComboboxCategory items={subjects} type="subject" />
        </TabsContent>
        <TabsContent value="movies">
          <ComboboxCategory items={genres} type="genre" />
        </TabsContent>
      </Tabs>
    </nav>
  );
}
