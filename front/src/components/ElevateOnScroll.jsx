import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

// const Layout = ({ children }) => {
//   return (
//     <React.Fragment>
//       <Container
//         fluid
//         className="bg-image d-flex justify-content-center align-items-center px-0 mt-5 pt-2"
//       >
//         {children}
//       </Container>
//     </React.Fragment>
//   );
// };

export default ElevationScroll;
