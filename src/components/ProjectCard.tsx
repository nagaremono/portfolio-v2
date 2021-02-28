import { Project } from '../projects';
import { Text, Box, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box py={2} px={4}>
      <Heading as="h3" fontSize="xl" fontFamily="fira">
        {project.name}
      </Heading>
      <Image
        src={project.screenshot}
        width={400}
        height={225}
        alt={`${project.name} screenshot`}
      />
      <Text fontFamily="roboto">{project.description.slice(0, 100)}</Text>
      <Flex></Flex>
    </Box>
  );
};
