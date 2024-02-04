import Other from "./Other";
import Image from "next/image";

export interface OtherCardProps {
  other: Other;
}

export default function OtherCard({ other }: OtherCardProps) {
  return (
    <div className="relative w-52 h-52 sm:m-10 my-5 mx-10">
      <a href={other.imgLink}>
        <Image
          src={other.imgSrc}
          alt="Picture"
          fill={true}
          style={{ objectFit: "contain" }}
          sizes="208px"
          className="h-full"
        />
      </a>
    </div>
  );
}
