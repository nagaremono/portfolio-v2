import { Flex, Heading, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

export const Header: React.FC = () => {
  return (
    <Flex
      px={[2, 4, 8]}
      bg="gray.800"
      height={20}
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        fontFamily="fira"
        color="gray.300"
        fontSize={{ base: 'md', sm: 'xl' }}
      >
        guruh.edi.purwanto;
      </Heading>
      <Flex
        justifyContent="space-around"
        w={{ base: 1 / 4, sm: 1 / 5, md: 1 / 6, lg: 1 / 8, xl: 1 / 12 }}
      >
        <Link href="https://www.github.com/nagaremono" isExternal>
          <Icon
            w={[10, 12, 14]}
            h={[8, 10]}
            color={'white'}
            as={AiFillGithub}
          />
        </Link>
        <Link href="https://www.twitter.com/guruhedip" isExternal>
          <Icon
            w={[10, 12, 14]}
            h={[8, 10]}
            color={'white'}
            as={AiOutlineTwitter}
          />
        </Link>
      </Flex>
    </Flex>
  );
};
