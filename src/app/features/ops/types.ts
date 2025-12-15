export type Status = "in" | "out";

export type Operator = {
  id: number;
  firstName: string;
  lastName: string;
  opsCompleted: number;
  reliability: number;
  endorsements: string[];
};

export type Op = {
  opId: number;
  publicId: string;
  opTitle: string;
  opDate: string;
  filledQuantity: number;
  operatorsNeeded: number;
  startTime: string;
  endTime: string;
  estTotalHours: number;
  checkInCode: string;
  checkOutCode: string;
  checkInExpirationTime: string;
  checkOutExpirationTime: string;
  operators: Operator[];
};

export enum OperatorSort {
  FIRST_NAME_ASC = "FIRST_NAME_ASC",
  FIRST_NAME_DESC = "FIRST_NAME_DESC",
  OPS_COMPLETED_ASC = "OPS_COMPLETED_ASC",
  OPS_COMPLETED_DESC = "OPS_COMPLETED_DESC",
  RELIABILITY_ASC = "RELIABILITY_ASC",
  RELIABILITY_DESC = "RELIABILITY_DESC",
}
