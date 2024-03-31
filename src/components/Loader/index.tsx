import safiaLogo from "/images/safia-logo.png";

export default function Loading() {
  return (
    <div className={"loader"}>
      <img
        className={"loadingCircle"}
        src={safiaLogo}
        height={50}
        width={50}
        alt="loading..."
      />
    </div>
  );
}
