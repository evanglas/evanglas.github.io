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
  const leetcodeProps: OtherCardProps = {
    other: {
      imgSrc: "/otherImages/leetcode.png",
      imgLink: "https://leetcode.com/eglas27/",
    },
  };

  return (
    <div className="flex flex-row flex-wrap w-auto justify-around">
      <OtherCard {...jetpunkProps} />
      <OtherCard {...goodreadsProps} />
      <OtherCard {...leetcodeProps} />
    </div>
  );
}
