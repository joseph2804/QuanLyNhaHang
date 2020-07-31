export interface employee {
        id: number;
        firstName: string;
        lastName: string;
        position: string;
        phone: number;
        gender: boolean;
        status: boolean;
        working: boolean;
        tables: string;
        exportOrders: string;
        foods: string
}

export interface merchandises{
        id: number;
        pro_Name: string;
        pro_Price: Float32Array;
        quantity: Float32Array;
        pro_Unit: string;
        pro_Type: boolean;
        detailFoods: string;
        detailExportOrders: string
}

export interface importmerchandises {
  id: number;
  imp_Id:string;
  epl_Id: string;
  sup_Id: string;
  imp_Date: Date;
  supplier: string;
  employee: string;
  detailExportOrders: string
}

export interface warehouse {
  id: number;
  stuId: string;
  firstName: string;
  lastName: string;
  gender: boolean;
  phone: string;
  email: string;
}

export interface order {
  id: number;
  stuId: string;
  firstName: string;
  lastName: string;
  gender: boolean;
  phone: string;
  email: string;
}

export interface table {
  id: number;
  epl_Id: number;
  tab_Status: boolean;
  employee: employee;
}

export interface food {
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

export interface type{
    id: number;
    ty_Name: string;
    foods: food
}

export interface dateToDate{
  fromDate : Date;
  toDate : Date
}

export interface exportorder{
  id: number;
  epl_Id: number;
  tab_Id: number;
  discount: number;
  exp_Date: Date;
  exp_Total: number;
  exp_Status: Number;
  table: table;
  employee: employee;
  detailExportOrders: detailExportOrders;
}

export interface detailExportOrders{
    id: number;
    exp_Id: number;
    foo_Id: number;
    quantity: number;
    deExp_Status: number;
    food: food;
    exportOrder: exportorder;
}





