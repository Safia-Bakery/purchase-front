import { FC, ReactNode } from "react";
import cross from "/icons/crossBlack.svg";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Image,
  DrawerBody,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  centered?: boolean;
  onClose?: () => void;
  className?: string;
  children: ReactNode;
  overlayClassName?: string;
  title?: string;
}

const Modal: FC<Props> = ({
  isOpen,
  onClose = () => null,
  children,
  className,
  overlayClassName,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className={overlayClassName} />
      <ModalContent
        height={"max-content"}
        minH={350}
        className={className}
        maxW={768}
        w={"100%"}
      >
        <button onClick={onClose}>
          <div
            className={
              "absolute top-4 right-4 z-10 border border-black rounded-full bg-white p-2 h-max"
            }
          >
            <Image src={cross} alt="close" />
          </div>
        </button>
        <DrawerBody p={[4, 3]} height={"100%"} w={"100%"} display={"flex"}>
          {children}
        </DrawerBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
