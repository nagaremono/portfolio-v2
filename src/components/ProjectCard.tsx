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
    <Box
      pb={2}
      mx="auto"
      boxShadow="2xl"
      rounded="md"
      border="2px"
      borderColor="cyan.900"
      backgroundColor="gray.700"
      color="gray.100"
    >
      <Heading
        as="h3"
        fontSize="xl"
        fontFamily="fira"
        p={2}
        backgroundColor="gray.700"
        color="white"
      >
        {project.name}
      </Heading>
      <Box
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        position="relative"
        mb={2}
      >
        <Box
          {...(isHover && {
            filter: 'brightness(40%)',
            transitionProperty: 'filter',
            transitionDuration: '0.3s',
          })}
          maxWidth="fit-content"
          mx="auto"
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
      <Box px={2}>
        <Text fontFamily="roboto">
          {project.description.slice(0, 100).trim() + '...'}
        </Text>
        <Flex mt={2} wrap="wrap">
          {project.stack.map((s, idx) => {
            return (
              <Tag
                key={`${idx}${s}`}
                variant="solid"
                mr={2}
                mb={2}
                backgroundColor="cyan.500"
                color="black"
              >
                {s}
              </Tag>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
