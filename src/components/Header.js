import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Header = () =>  {
    return (<Box display="flex" direction="row" paddingY={2} color={'lightGray'}>
    <Column>
      <Box padding={3}>
        <Heading size="lg">PDF Sign App</Heading>
      </Box>
    </Column>
    </Box>);
}

export default Header;