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
} = require("@chakra-ui/react");
const React = require("react");
const { useState } = require("react");

module.exports = function Layout({ children }) {
  // * 13 приняли пропс newUser
  // * 14 Делаем условную вёрстку и показываем либо: войти/зарегистрировать
  // * имя пользователя/выйти
  // * 15 см в regControllers
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
      <header>

      </header>
      <body>
        { children }
      </body>
      </htmlFor>
    </ChakraProvider>
  );
};
