import Link from "next/link";
import Image from "next/image";
import { Rating } from "@/components/rating";
import { Book } from "subjects-pkg";
import { Movie } from "movies-pkg";

const CardView = ({
  item,
  type,
}: {
  item: Book | Movie;
  type: "book" | "movie";
}) => {
  return (
    <div className="h-96 w-52 flex-col justify-between rounded-xl bg-gray-300">
      {type === "book" ? (
        <Link
          href={`/item/${item.id}?title=${item.title}&author=${(item as Book).author}&year=${(item as Book).year}&pages=${(item as Book).pages}&rating=${(item as Book).rating}&coverUrl=${(item as Book).coverUrl}`}
        >
          <Image
            className="h-4/5 w-full rounded-t-xl"
            src={(item as Book).coverUrl}
            style={{ objectFit: "cover" }}
            alt={item.title}
            width={200}
            height={300}
          />

          <div className="flex h-1/5 content-end items-center">
            <div className="w-full flex-col px-1">
              <p className="line-clamp-2">{item.title}</p>
              <Rating rating={(item as Book).rating} />
            </div>
          </div>
        </Link>
      ) : (
        <Link
          href={`/item/${item.id}?title=${item.title}&author=${""}&year=${(item as Movie).release_date}&pages=${0}&rating=${(item as Movie).vote_average}&coverUrl=${(item as Movie).poster_path}`}
        >
          <Image
            className="h-4/5 w-full rounded-t-xl"
            src={(item as Movie).poster_path}
            style={{ objectFit: "cover" }}
            alt={item.title}
            width={200}
            height={300}
          />

          <div className="flex h-1/5 content-end items-center">
            <div className="w-full flex-col px-1">
              <p className="line-clamp-2">{item.title}</p>
              <Rating rating={(item as Movie).vote_average} />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CardView;
