import { Container} from './styles'

import AboutPage from '../../screens/AboutPage';
import ContactPage from '../../screens/ContactPage';
import HomePage from '../../screens/HomePage';
import ProjectsPage from '../../screens/ProjectsPage';
import CopyrightPage from '../../screens/CopyrightPage';

import body from '../../styles/GlobalStyles'

const Layout = () => {
  return (
    <body>
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
        <CopyrightPage/>
    </body>
    );
}

export default Layout;

