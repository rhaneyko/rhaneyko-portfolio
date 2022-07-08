
import AboutPage from '../../screens/AboutPage';
import ContactPage from '../../screens/ContactPage';
import HomePage from '../../screens/HomePage';
import ProjectsPage from '../../screens/ProjectsPage';
import CopyrightPage from '../../screens/CopyrightPage';
import { Container } from './styles';

const Layout = () => {
  return (
    <Container>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
        <CopyrightPage/>
    </Container>    
    );
}

export default Layout;

