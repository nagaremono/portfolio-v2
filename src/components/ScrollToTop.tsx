import { Link } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IconType } from 'react-icons';

type ScrollToTopProps = {
  as?: IconType;
};

export const ScrollToTop: FC<ScrollToTopProps> = ({ as }) => {
  const scrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Link onClick={scrollTop}>
        Back to Top <Icon as={as} />
      </Link>
    </>
  );
};
