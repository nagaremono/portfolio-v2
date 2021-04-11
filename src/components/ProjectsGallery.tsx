import { Flex, Grid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../projects';
import { ScrollToTop } from './ScrollToTop';
import { BiArrowToTop } from 'react-icons/bi';

export const ProjectsGallery: React.FC = () => {
  return (
    <>
      <Grid rowGap={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
      <Flex justifyContent="center" my={4}>
        <ScrollToTop as={BiArrowToTop} />
      </Flex>
    </>
  );
};
