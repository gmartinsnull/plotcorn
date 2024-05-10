import FullPageView from "@/common/full-page-view";

export default function Page({
  params: { id: itemId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FullPageView bookId={itemId} />
    </div>
  );
}
