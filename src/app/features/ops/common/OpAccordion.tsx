"use client";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Stack,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OperatorRow } from "./OperatorRow";
import { OpCard } from "./Opcard";
import { Op } from "../types";

type OpAccordionProps = {
    op: Op;
};

export const OpAccordion = ({ op }: OpAccordionProps) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <OpCard op={op} />
            </AccordionSummary>

            <AccordionDetails>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Operators
                </Typography>

                <Stack spacing={1}>
                    {op.operators.map((operator) => (
                        <OperatorRow key={operator.id} operator={operator} />
                    ))}
                </Stack>

                <Divider sx={{ mt: 2 }} />
            </AccordionDetails>
        </Accordion>
    );
};
