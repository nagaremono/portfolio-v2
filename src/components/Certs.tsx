import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Certs: React.FC = () => {
  return (
    <Box backgroundColor="gray.600" p={4}>
      <Heading as="h3" color="white" fontFamily="fira" fontSize="xl">
        Certificates
      </Heading>
      <Flex mt={2} flexDirection="column" px={4}>
        <Box my={2}>
          <Image
            width={350}
            height={245}
            alt="Sertifikat Menjadi Front-End Developer Expert"
            src="/expert-cert.jpg"
          />
        </Box>
        <Box my={2}>
          <Image
            width={350}
            height={245}
            alt="Sertifikat Full Stack Open"
            src="/fullstack.jpg"
          />
        </Box>
      </Flex>
    </Box>
  );
};
