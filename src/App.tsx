import { ThemeProvider } from 'styled-components';

//import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Navbar from './components/Navbar';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

 const App = () => {
   //  const [ theme, setTheme ] = useState<DefaultTheme>('theme', light);
   //  const toggleTheme = () => {
   //    setTheme(theme.title === 'light' ? dark : light);
   //  }
  return (
    <ThemeProvider theme={light}>
       <Navbar/>
       <Layout />
       <GlobalStyles/>
    </ThemeProvider>
    );
}

export default App;
