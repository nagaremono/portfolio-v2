import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

type CertImageProps = {
  alt: string;
  src: string;
};

export const CertImage: React.FC<CertImageProps> = ({ alt, src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent="center"
        my={2}
        width={{ sm: '45%', md: '40%' }}
        onClick={onOpen}
        cursor="pointer"
      >
        <Image width={350} height={245} alt={alt} src={src} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={['sm', 'md', 'lg']}>{alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            <Image width={1200} height={840} alt={alt} src={src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
