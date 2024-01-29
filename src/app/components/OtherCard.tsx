import Other from "./Other";
import Image from "next/image";

export interface OtherCardProps {
  other: Other;
}

export default function OtherCard({ other }: OtherCardProps) {
  return (
    <div className="relative w-52 h-52 m-10">
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
