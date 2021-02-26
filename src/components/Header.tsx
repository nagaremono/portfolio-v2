import { Flex, Heading } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex px={2} bg="gray.800" height={14} alignItems="center">
      <Heading fontFamily="fira" color="gray.300" fontSize={['md']}>
        guruh.edi.purwanto;
      </Heading>
    </Flex>
  );
};
