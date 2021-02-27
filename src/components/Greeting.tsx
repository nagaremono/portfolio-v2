import { Box, Heading, Text } from '@chakra-ui/react';

export const Greeting: React.FC = () => {
  return (
    <Box p={4}>
      <Heading mb={2} fontFamily="fira">
        Welcome!
      </Heading>
      <Text
        textAlign="justify"
        fontSize="md"
        lineHeight={1.5}
        fontFamily="roboto"
      >
        Hi, I'm Guruh, and this page is a bit of what I've worked on. Most of
        these are what I've built as I teach myself web development. Have a look
        around, applying web technologies into making these little projects have
        been a blast for me and I hope it interests you. I aspire to build even
        more useful and meaningful software going forward.
      </Text>
    </Box>
  );
};
