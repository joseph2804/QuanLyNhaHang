import { employee, type } from './datatypes';

export interface Food {
    id: number;
    foo_Id: string;
    ty_Id: number;
    epL_Id: number;
    foo_Name: string;
    foo_Price: number;
    foo_Status: boolean;
    employee: employee;
    type: type
}
