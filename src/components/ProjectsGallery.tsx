import { Grid } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../projects';

export const ProjectsGallery: React.FC = () => {
  return (
    <Grid rowGap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};
