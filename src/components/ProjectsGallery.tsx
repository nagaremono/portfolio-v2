import { Flex, Grid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../projects';
import { ScrollToTop } from './ScrollToTop';
import { BiArrowToTop } from 'react-icons/bi';

export const ProjectsGallery: React.FC = () => {
  return (
    <>
      <Grid
        rowGap={{ base: 4, sm: 6, md: 8, lg: 10 }}
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, fit-content(40%))',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(3, fit-content(25%))',
          '2xl': 'repeat(3, fit-content(18%))',
        }}
        justifyContent="center"
        mx={{ base: 4, sm: 6, md: 8, lg: 16 }}
        columnGap={{ base: 0, sm: 4, md: 12, xl: 16 }}
        my={6}
      >
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
