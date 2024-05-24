import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>World</Link>
          <Link href="#" p={2}>Business</Link>
          <Link href="#" p={2}>Markets</Link>
          <Link href="#" p={2}>Opinion</Link>
          <Link href="#" p={2}>Tech</Link>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Main Content Area</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>This is a summary of the first article.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>This is a summary of the second article.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.100">
          <Heading size="md" mb={4}>Sidebar</Heading>
          <Text>Additional content or advertisements can go here.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;