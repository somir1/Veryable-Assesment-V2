"use client";

import { Container, Typography, Stack } from "@mui/material";

import { HomeProps, Op } from "@/utils/types";
import { OpCard } from "../common/Opcard";
import { logoUrl } from "@/utils/data";

export const Home = ({ ops, loading, error }: HomeProps) => {
  return (
    <Container sx={{ py: 8 }}>
      <Stack
        direction={{ sm: "row" }}
        justifyContent="space-between"
        sx={{ marginBottom: "40px" }}
      >
        <img src={logoUrl} alt="logo" width={"150px"} />
        <Typography variant="h4">
          Samir's Veryable Frontend Challenge
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Count: {ops.length}
        </Typography>
      </Stack>

      {loading && <Typography>Loading...</Typography>}

      {error && <Typography>Error: {error}</Typography>}

      {!loading && !error && ops.length > 0 && (
        <Stack spacing={2}>
          {ops.map((op) => (
            <OpCard key={op.opId} op={op} />
          ))}
        </Stack>
      )}

      {!loading && !error && ops.length === 0 && (
        <Typography>No operations found.</Typography>
      )}
    </Container>
  );
};

export default Home;
