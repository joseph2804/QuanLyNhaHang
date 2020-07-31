export interface Bill {
    id: number,
    epl_Id: number,
    tab_Id: number,
    discount: number,
    exp_Date: Date,
    exp_Status: number,
    table: any,
    employee: any,
    detailExportOrders: any,
    exp_Total: number
}

export interface DateToDate {
    fromDate: Date,
    toDate: Date
}

