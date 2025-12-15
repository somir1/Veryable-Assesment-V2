"use client";

import { TextField } from "@mui/material";

type OperatorSearchInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export const OperatorSearchInput = ({
    value,
    onChange,
}: OperatorSearchInputProps) => {
    return (
        <TextField
            size="small"
            label="Search by Operator, Op Title, or Public ID"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            fullWidth
        />
    );
};
