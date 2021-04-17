import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { CertImage } from './CertImage';

export const Certs: React.FC = () => {
  const certsImages = [
    {
      alt: 'Menjadi Front-End Web Developer Expert',
      src: '/expert-cert.jpg',
    },
    {
      alt: 'Full Stack Open',
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
          <CertImage src={src} alt={alt} key={alt} />
        ))}
      </Flex>
    </Box>
  );
};
