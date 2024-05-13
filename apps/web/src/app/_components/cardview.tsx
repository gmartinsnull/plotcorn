import Link from "next/link";
import Image from "next/image";
import { Rating } from "@/components/rating";
import { Book } from "@/types/book";

const CardView = ({ index, book }: { index: number; book: Book }) => {
  return (
    <div
      key={index}
      className="h-96 w-52 flex-col justify-between rounded-xl bg-gray-300"
    >
      <Link
        href={`/item/${book.id}?title=${book.title}&author=${book.author}&year=${book.year}&pages=${book.pages}&rating=${book.rating}&coverUrl=${book.coverUrl}`}
      >
        <Image
          className="h-4/5 w-full rounded-t-xl"
          src={book.coverUrl}
          style={{ objectFit: "cover" }}
          alt={book.title}
          width={200}
          height={300}
        />

        <div className="flex h-1/5 content-end items-center">
          <div className="flex-col w-full px-1">
            <p>{book.title}</p>
            <Rating rating={book.rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardView;
