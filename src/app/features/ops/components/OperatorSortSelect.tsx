"use client";

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { OperatorSort } from "../types";

type OperatorSortSelectProps = {
    value: OperatorSort;
    onChange: (sort: OperatorSort) => void;
};

export const OperatorSortSelect = ({
    value,
    onChange,
}: OperatorSortSelectProps) => {
    return (
        <FormControl size="small" sx={{ mb: 2, maxWidth: 260 }}>
            <InputLabel id="operator-sort-label">
                Sort Operators
            </InputLabel>

            <Select
                labelId="operator-sort-label"
                value={value}
                label="Sort Operators"
                onChange={(e) =>
                    onChange(e.target.value as OperatorSort)
                }
            >
                <MenuItem value={OperatorSort.FIRST_NAME_ASC}>
                    First Name (A–Z)
                </MenuItem>
                <MenuItem value={OperatorSort.FIRST_NAME_DESC}>
                    First Name (Z–A)
                </MenuItem>

                <MenuItem value={OperatorSort.OPS_COMPLETED_ASC}>
                    Ops Completed (Low → High)
                </MenuItem>
                <MenuItem value={OperatorSort.OPS_COMPLETED_DESC}>
                    Ops Completed (High → Low)
                </MenuItem>

                <MenuItem value={OperatorSort.RELIABILITY_ASC}>
                    Reliability (Low → High)
                </MenuItem>
                <MenuItem value={OperatorSort.RELIABILITY_DESC}>
                    Reliability (High → Low)
                </MenuItem>
            </Select>
        </FormControl>
    );
};
