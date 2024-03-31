import Container from "../Container";

import purchase from "/icons/purchase.svg";
import message from "/icons/message.svg";
import facebook from "/icons/facebook.svg";
import tg from "/icons/tg.svg";
import insta from "/icons/insta.svg";
import familyText from "/icons/familyText.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 mb-8">
        <img
          className="lg:mx-auto lg:my-14 family_text"
          src={familyText}
          alt={"And together we will give happiness to our world!"}
        />
      </div>
      <footer className="bg-footerBg p-6">
        <Container className="flex items-center justify-between lg:flex-row flex-col gap-4">
          <span className="text-white">2023 © Safia.uz</span>

          <img src={purchase} alt={"purchase-text"} />
          <div className="flex gap-6 w-full justify-around lg:w-48">
            <img src={message} alt={"message"} width={20} height={20} />
            <img src={facebook} alt={"facebook"} width={20} height={20} />
            <img src={tg} alt={"tg"} width={20} height={20} />
            <img src={insta} alt={"insta"} width={20} height={20} />
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
