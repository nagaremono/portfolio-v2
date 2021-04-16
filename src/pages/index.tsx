import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { Certs } from '../components/Certs';
import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { ScrollToTop } from '../components/ScrollToTop';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guruh Edi Purwanto</title>
      </Head>
      <Header />
      <Greeting />
      <ProjectsGallery />
      <Certs />
      <Flex justifyContent="center" my={4}>
        <ScrollToTop as={BiArrowToTop} />
      </Flex>
    </>
  );
};

export default Home;
