import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { ProjectsGallery } from '../components/ProjectsGallery';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guruh Edi Purwanto</title>
      </Head>
      <Header />
      <Greeting />
      <ProjectsGallery />
    </>
  );
};

export default Home;
