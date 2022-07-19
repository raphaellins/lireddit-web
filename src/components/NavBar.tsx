import { Box, Button, Flex, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
    body = null;
  } else if (!data.me) {
    body = (
      <>
        <Box bg="tomato" p={4} ml={"auto"}>
          <NextLink href="/login">
            <Link mr={2}>Login</Link>
          </NextLink>
          <NextLink href="/register">
            <Link mr={2}>Register</Link>
          </NextLink>
        </Box>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box>{data.me.username}</Box>
        <Button variant='link'>Logout</Button>
      </Flex>
    );
  }

  return body;
};
