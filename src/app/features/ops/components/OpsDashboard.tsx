"use client";

import { Container, Typography, Stack, Box } from "@mui/material";
import { logoUrl } from "@/utils/data";
import { useOps } from "../hooks/useOps";
import { OpAccordion } from "../common/OpAccordion";


export const OpsDashboard = () => {
  const { ops, loading, error } = useOps();

  return (
    <Container sx={{ py: 8 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 5 }}
      >
        <img src={logoUrl} alt="logo" width={150} />

        <Typography variant="h4">
          Samir&apos;s Veryable Frontend Challenge V2
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Count: {ops.length}
        </Typography>
      </Stack>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>Error: {error}</Typography>}

      {!loading && !error && (
        <Stack spacing={2}>
          {ops.map((op) => (
            <OpAccordion key={op.opId} op={op} />
          ))}
        </Stack>
      )}
    </Container>
  );
};
