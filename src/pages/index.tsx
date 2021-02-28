import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { ProjectsGallery } from '../components/ProjectsGallery';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Greeting />
      <ProjectsGallery />
    </>
  );
};

export default Home;
