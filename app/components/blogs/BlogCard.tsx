import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  brief: string;
  url: string;
  imgUrl: string;
}

function BlogCard({ title, brief, url, imgUrl }: BlogCardProps) {
  return (
    <div className="w-5/6 sm:max-w-sm border border-black/20 rounded-lg shadow-lg">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image
          width={1280}
          height={720}
          className="rounded-t-lg"
          src={imgUrl}
          alt={title}
          priority
        />
      </Link>
      <div className="p-5">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="mb-2 min-h-[6.5rem] text-2xl font-bold tracking-tight">
            {title}
          </h2>
        </Link>
        <p className="mb-3 font-normal">{brief.substring(0, 175)}...</p>
        <Link
          href={url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white/90 rounded-lg bg-blue-700 hover:bg-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
