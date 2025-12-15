import { Operator, OperatorSort } from "../types";

export const sortOperators = (
    operators: Operator[],
    sortBy: OperatorSort
): Operator[] => {
    const sorted = [...operators];

    switch (sortBy) {
        case OperatorSort.FIRST_NAME_ASC:
            return sorted.sort((a, b) => {
                const first = a.firstName.localeCompare(b.firstName);
                return first !== 0
                    ? first
                    : a.lastName.localeCompare(b.lastName);
            });

        case OperatorSort.FIRST_NAME_DESC:
            return sorted.sort((a, b) => {
                const first = b.firstName.localeCompare(a.firstName);
                return first !== 0
                    ? first
                    : b.lastName.localeCompare(a.lastName);
            });

        case OperatorSort.OPS_COMPLETED_ASC:
            return sorted.sort(
                (a, b) => a.opsCompleted - b.opsCompleted
            );

        case OperatorSort.OPS_COMPLETED_DESC:
            return sorted.sort(
                (a, b) => b.opsCompleted - a.opsCompleted
            );

        case OperatorSort.RELIABILITY_ASC:
            return sorted.sort(
                (a, b) => a.reliability - b.reliability
            );

        case OperatorSort.RELIABILITY_DESC:
            return sorted.sort(
                (a, b) => b.reliability - a.reliability
            );

        default:
            return sorted;
    }
};
