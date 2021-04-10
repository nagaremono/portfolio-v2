import { Box, Flex, Heading, Icon, Link, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegFileCode } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { Project } from '../projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover((prev) => !prev);

  return (
    <Box width="90%" py={2} mx="auto">
      <Heading as="h3" fontSize="xl" fontFamily="fira">
        {project.name}
      </Heading>
      <Box
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        position="relative"
      >
        <Box
          _hover={{
            filter: 'brightness(40%)',
            transitionProperty: 'filter',
            transitionDuration: '0.3s',
          }}
          maxWidth="fit-content"
        >
          <Image
            src={project.screenshot}
            width={432}
            height={243}
            alt={`${project.name} screenshot`}
          />
        </Box>
        {isHover && (
          <Flex
            zIndex="docked"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="50%"
            justifyContent="space-evenly"
          >
            <Link href={`${project.repository}`} isExternal>
              <Icon w={9} h={9} color="white" as={FaRegFileCode} />
            </Link>
            <Link
              display="inline-block"
              href={`${project.deployment}`}
              isExternal
            >
              <Icon w={9} h={9} color="white" as={MdOpenInNew} />
            </Link>
          </Flex>
        )}
      </Box>
      <Text fontFamily="roboto">
        {project.description.slice(0, 100) + '...'}
      </Text>
      <Flex mt={2} wrap="wrap">
        {project.stack.map((s, idx) => {
          return (
            <Tag
              key={`${idx}${s}`}
              colorScheme="blackAlpha"
              variant="solid"
              mr={2}
              mb={2}
            >
              {s}
            </Tag>
          );
        })}
      </Flex>
    </Box>
  );
};
