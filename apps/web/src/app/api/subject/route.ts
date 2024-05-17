import { subjects } from "@/components/ui/subjects";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  try {
    const result = subjects.sort((a, b) =>
      a.label.toLowerCase().localeCompare(b.label.toLowerCase()),
    );

    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
