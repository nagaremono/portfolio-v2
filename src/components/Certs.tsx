import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const Certs: React.FC = () => {
  const certsImages = [
    {
      alt: 'Sertifikat Menjadi Front-End Developer Expert',
      src: '/expert-cert.jpg',
    },
    {
      alt: 'Sertifikat Full Stack Open',
      src: '/fullstack.jpg',
    },
  ];

  return (
    <Box backgroundColor="gray.600" px={4} py={8} my={8}>
      <Heading
        as="h3"
        color="white"
        fontFamily="fira"
        fontSize={['xl', '2xl']}
        px={[0, 2, 6, 16]}
      >
        Certificates
      </Heading>
      <Flex
        mt={2}
        flexDirection={['column', 'row']}
        justifyContent={{ sm: 'space-evenly' }}
        width={{ lg: '80%', xl: '75%', '2xl': '60%' }}
        mx="auto"
        px={[4, 2]}
      >
        {certsImages.map(({ src, alt }) => (
          <Flex
            key={alt}
            justifyContent="center"
            my={2}
            width={{ sm: '45%', md: '40%' }}
          >
            <Image width={350} height={245} alt={alt} src={src} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};