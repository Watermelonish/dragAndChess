const React = require("react");
const { ChakraProvider } =  require('@chakra-ui/react')
const { Box, Flex, Spacer, HStack, Square } =  require('@chakra-ui/react')

module.exports = function Board({board, pieces}) {

  return (
    <Box spacing = "50px" className="container squareContainer">
      {board.map(
         (square, index) => <HStack >
            <Square bg = {`${index%2?'white':'black'}`} size='75px' borderWidth='4px' margin='3px' key={`A${board.id}`} id = {`A${index+1}`}></Square>
            <Square bg = {`${index%2!==1?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`B${index+1}`}></Square>
            <Square bg = {`${index%2?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`C${index+1}`}></Square>
            <Square bg = {`${index%2!==1?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`D${index+1}`}></Square>
            <Square bg = {`${index%2?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`E${index+1}`}></Square>
            <Square bg = {`${index%2!==1?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`F${index+1}`}></Square>
            <Square bg = {`${index%2?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`G${index+1}`}></Square>
            <Square bg = {`${index%2!==1?'white':'black'}`} size='75px' borderWidth='4px'  key={`A${board.id}`} id = {`H${index+1}`}></Square>
         </HStack>

      )}
      {/* {board.map(
        Square
      )} */}
    </Box>
  );
};

