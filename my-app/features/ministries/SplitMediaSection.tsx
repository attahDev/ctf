import Image from "next/image";
import type { ReactNode } from "react";

type SplitMediaSectionProps = {
  imageSrc: string;
  imageAlt: string;
  mediaFirst?: boolean;
  children: ReactNode;
};

export const SplitMediaSection = ({
  imageSrc,
  imageAlt,
  mediaFirst = false,
  children,
}: SplitMediaSectionProps) => {
  const media = (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );

  const copy = <div>{children}</div>;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {mediaFirst ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </div>
  );
};
