import { Greeting } from '../components/Greeting';
import { Header } from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Greeting />
    </>
  );
};

export default Home;
