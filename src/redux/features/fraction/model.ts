export interface IFractionType {
    fractionList: any;
    fractionRecord: any;
    sortData: any;
    fractionItemPageRoute: null | string;
}
export type FractionItem = {
    createdAt: string
    name: string
    objectId: string
    tokens: { __type: string, className: string }
    updatedAt: string
}
