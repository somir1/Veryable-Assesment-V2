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
import { Op, OperatorSort } from "../types";
import { useMemo } from "react";
import { sortOperators } from "../utils/sortOperators";

type OpAccordionProps = {
    op: Op;
    sortBy: OperatorSort;
};

export const OpAccordion = ({ op, sortBy }: OpAccordionProps) => {

    const sortedOperators = useMemo(() => {
        return sortOperators(op.operators, sortBy);
    }, [op.operators, sortBy]);
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
                    {sortedOperators.map((operator) => (
                        <OperatorRow key={operator.id} operator={operator} />
                    ))}
                </Stack>

                <Divider sx={{ mt: 2 }} />
            </AccordionDetails>
        </Accordion>
    );
};
