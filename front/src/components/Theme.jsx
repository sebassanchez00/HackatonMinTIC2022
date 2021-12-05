
import { createTheme } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';


const Tema = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default Tema;