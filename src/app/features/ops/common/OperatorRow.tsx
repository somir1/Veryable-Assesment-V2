"use client";

import { combinedName, convertedPercent } from "@/utils/helpers";
import { Operator, Status } from "../types";
import { Button, Stack, Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";

export const OperatorRow = ({ operator }: { operator: Operator }) => {
  const [status, setStatus] = useState<Status>("in");
  const storageKey = `operator-status-${operator.id}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "in" || saved === "out") {
      setStatus(saved);
    }
  }, [storageKey]);

  const handleToggle = () => {
    const nextStatus: Status = status === "in" ? "out" : "in";
    setStatus(nextStatus);
    localStorage.setItem(storageKey, nextStatus);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack spacing={0.5}>
        <Typography variant="subtitle1">
          {combinedName(operator.firstName, operator.lastName)}
          {status === "out" && (
            <Typography
              component="span"
              variant="body2"
              sx={{ ml: 1, color: "error.main" }}
            >
              (checked out)
            </Typography>
          )}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            label={`Operations Completed: ${operator.opsCompleted}`}
            size="small"
          />
          <Chip
            label={`Reliability: ${convertedPercent(operator.reliability)}%`}
            size="small"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {operator.endorsements.join(" • ")}
        </Typography>
      </Stack>

      <Button
        variant={status === "out" ? "outlined" : "contained"}
        size="small"
        onClick={handleToggle}
      >
        {status === "out" ? "Check In" : "Check Out"}
      </Button>
    </Stack>
  );
};
