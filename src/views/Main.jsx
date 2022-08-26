const {
  ChakraProvider,
  Flex,
  Container,
  centerContent,
  VStack,
  Center,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} = require("@chakra-ui/react");
const Layout = require("./Layout");
const React = require("react");
const { useState } = require("react");
const Board = require("./Board");
module.exports = function Main({ pieces }) {
  const [board, setboard] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]);
  return (
    <ChakraProvider>
      <htmlFor lang="en">
        <head>
          <meta charSet="UTF-8"></meta>
          <meta
            className="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link href="/styles/app.css" rel="stylesheet" />

          <script defer src="/js/pieces.js" />
          <script defer src="/js/dragLogic.js" />
          <script defer src="/js/wsChat.js" />

          <title>dragAndChess</title>
        </head>
        <body>
          <Center>
            <div className="notesContainer"></div>
            <VStack
              spacing="20px"
              anign="center"
              margin="2px"
              maxW="2xl"
              className="Container"
            >
              <h1>drag and Chess babe</h1>
              <div className=" dead deadBlack"></div>
              <Board board={board} pieces={pieces}></Board>
              <div className=" dead deadWhite"></div>
            </VStack>
            <Popover placement="top-start">
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">
                  Popover placement
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <div className="chatContainer">
              <div className="chatText"></div>
              <form name="chatForm" className="chatForm">
                <div className="buttonContainer">
                  <Input name="chatInp" type="text" id="exampleInput1" />

                  <Button
                    type="submit"
                    name="chatBtn"
                    className="btn chatBtn"
                    colorScheme="blue"
                    disabled
                  >
                    Send
                  </Button>
                </div>
                <p>Please try to be polite omg</p>
              </form>
            </div>
          </Center>
        </body>
      </htmlFor>
    </ChakraProvider>
  );
};
