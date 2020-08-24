import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";

export default function Index() {
  console.log(process.env.BOOTSTRAP_KEY);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Container>
          <Link href="/login" color="primary">
            <Button color="primary">Login</Button>
          </Link>
          <Link href="/signup" color="primary">
            <Button color="secondary">Sign up</Button>
          </Link>
        </Container>
      </Box>
    </Container>
  );
}
