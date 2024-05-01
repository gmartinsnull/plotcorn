import FullPageView from "@/common/full-page-view";
import { Modal } from "./modal";

export default function Page({
  params: { id: itemId },
}: {
  params: { id: string };
}) {

  return (
    <Modal>
      <FullPageView bookId={itemId} />
    </Modal>
  );
}
