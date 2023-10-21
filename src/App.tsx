import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const AddCounter = () => {
    setCounter(counter + 1);
  };

  const MinusCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Box display={'flex'} w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Box
          border={'solid 1px #000'}
          borderRadius={'10px'}
          p={'0.25em 1em'}
          boxShadow={
            'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px'
          }
          textColor={'gray.500'}
          textAlign={'center'}
        >
          Counter
          <Box textAlign={'center'} textColor={'blue'} fontWeight={'bold'} fontSize={'50px'}>
            {counter}
          </Box>
          <Flex>
            <Box
              border={'solid 1px blue'}
              p={'0.25em 1em'}
              borderRadius={'10px'}
              background={'blue'}
              m={'5px'}
              onClick={AddCounter}
            >
              <AddIcon color={'white'} />
            </Box>
            <Box
              border={'solid 1px blue'}
              p={'0.25em 1em'}
              borderRadius={'10px'}
              background={'blue'}
              m={'5px'}
              onClick={MinusCounter}
            >
              <MinusIcon color={'white'} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
