import { Container, Wrapper, } from './styles'

import AboutPage from '../../screens/AboutPage';
import ContactPage from '../../screens/ContactPage';
import HomePage from '../../screens/HomePage';
import ProjectsPage from '../../screens/ProjectsPage';

const Layout = () => {
  return (
     <>
    <Container>
      <Wrapper>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
      </Wrapper>
    </Container>
     </>
    );
}

export default Layout;

