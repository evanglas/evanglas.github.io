import Arrow from "../components/Arrow";

export default function ArrowSection(props: { scrollTo: string }) {
  return (
    <div
      id="down_arrow"
      className="flex flex-row justify-center my-3 h-fit md:h-[20vh]"
    >
      <Arrow scrollTo={props.scrollTo} />
    </div>
  );
}
