import OtherCard, { OtherCardProps } from "./OtherCard";

export default function OtherPart() {
  const jetpunkProps: OtherCardProps = {
    other: {
      imgSrc: "/otherImages/jetpunk.webp",
      imgLink: "https://www.jetpunk.com/users/kingofthequiz",
    },
  };
  const goodreadsProps: OtherCardProps = {
    other: {
      imgSrc: "/otherImages/goodreads.png",
      imgLink: "https://www.goodreads.com/user/show/144290430-evan",
    },
  };
  return (
    <div className="flex flex-row md:w-[768px] w-[500px] justify-around">
      <OtherCard {...jetpunkProps} />
      <OtherCard {...goodreadsProps} />
    </div>
  );
}
