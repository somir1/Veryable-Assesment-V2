"use client";

import { Container, Typography, Stack, Box, MenuItem } from "@mui/material";
import { logoUrl } from "@/utils/data";
import { useOps } from "../hooks/useOps";
import { OpAccordion } from "../common/OpAccordion";
import { OperatorSortSelect } from "./OperatorSortSelect";
import { useMemo, useState } from "react";
import { OperatorSort } from "../types";
import { OperatorSearchInput } from "./OperatorSearch";

export const OpsDashboard = () => {
  const { ops, loading, error } = useOps();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<OperatorSort>(
    OperatorSort.FIRST_NAME_ASC
  );

  const filteredOps = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return ops;

    return ops
      .map((op) => {
        const matchesOp =
          op.opTitle.toLowerCase().includes(query) ||
          op.publicId.toLowerCase().includes(query);

        const matchingOperators = op.operators.filter((operator) =>
          `${operator.firstName} ${operator.lastName}`
            .toLowerCase()
            .includes(query)
        );

        if (matchesOp) {
          return op;
        }

        if (matchingOperators.length > 0) {
          return {
            ...op,
            operators: matchingOperators,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [ops, search]);


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
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
          >
            <OperatorSortSelect
              value={sortBy}
              onChange={setSortBy}
            />

            <OperatorSearchInput
              value={search}
              onChange={setSearch}
            />
          </Stack>
          {filteredOps.map((op) => (
            <OpAccordion
              key={op.opId}
              op={op}
              sortBy={sortBy}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};
