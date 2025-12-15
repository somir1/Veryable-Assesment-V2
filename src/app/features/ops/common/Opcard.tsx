import { Typography, Chip, Stack, Box } from "@mui/material";
import { formatTime } from "@/utils/helpers";
import { Op } from "../types";

type OpCardProps = {
  op: Op;
};

export const OpCard = ({ op }: OpCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">{op.opTitle}</Typography>
        <Typography variant="body2" color="text.secondary">
          Public ID: {op.publicId}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {formatTime(op.startTime)} – {formatTime(op.endTime)}
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={1}
        sx={{ flexShrink: 0, flexWrap: "wrap" }}
      >
        <Chip
          label={`Needed ${op.operatorsNeeded}`}
          size="small"
          variant="outlined"
        />
      </Stack>
    </Box>
  );
};
