import React, { useEffect, useRef, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";

const MotionBox = motion.create(Box as any);

interface Props {
  children: ReactNode;
  delay?: number;
}

const AnimationBlock: React.FC<Props> = ({ children, delay = 1 }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 90,
              delay: delay * 0.2,
              duration: 0.3,
            },
          });
        } else {
          //   controls.start({
          //     x: -150,
          //     opacity: 0,
          //     transition: {
          //       type: "spring",
          //       stiffness: 90,
          //       duration: 0.3,
          //       delay: delay * 0.2,
          //     },
          //   });
        }
      },
      { threshold: 0.2 } // Adjust based on when you want to consider the element as "in view"
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <StyledContainer>
      <MotionBox
        width={"100%"}
        ref={ref}
        animate={controls}
        initial={{ x: -150, opacity: 0 }}
        // width="200px"
        // height="200px"
        // bg="teal.500"
        // position="absolute"
      >
        {children}
      </MotionBox>
    </StyledContainer>
  );
};

// Styled container using emotion
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export default AnimationBlock;
