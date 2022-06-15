import { Container, Wrapper, } from './styles'

import AboutPage from '../../screens/AboutPage';
import ContactPage from '../../screens/ContactPage';
import HomePage from '../../screens/HomePage';
import ProjectsPage from '../../screens/ProjectsPage';
import CopyrightPage from '../../screens/CopyrightPage';

const Layout = () => {
  return (
     <>
    <Container>
      <Wrapper>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
        <CopyrightPage/>
      </Wrapper>
    </Container>
     </>
    );
}

export default Layout;

