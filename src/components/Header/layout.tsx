import Image from "next/image";
import Container from "../Container";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="">
          <Image
            src={"/icons/safia-logo.svg"}
            alt={"safia-logo"}
            height={70}
            width={70}
            className="rounded-full"
          />
          <h3></h3>
        </div>
      </Container>
    </div>
  );
};

export default Header;
