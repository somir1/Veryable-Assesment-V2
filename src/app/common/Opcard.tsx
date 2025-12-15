"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Op } from "@/utils/types";
import { OperatorRow } from "../common/OperatorRow";
import { formatTime } from "@/utils/helpers";

export const OpCard = ({ op }: { op: Op }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{op.opTitle}</Typography>
            <Typography variant="body2" color="text.secondary">
              Public ID: {op.publicId}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary">
              Start / End
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatTime(op.startTime)} – {formatTime(op.endTime)}
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexShrink: 0,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <Chip
              label={`Operators Needed: ${op.operatorsNeeded}`}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Stack>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Divider sx={{ marginBottom: "10px" }} />

        <Typography variant="h6">Operators</Typography>

        <Stack spacing={1}>
          {op.operators.map((operator) => (
            <OperatorRow key={operator.id} operator={operator} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
