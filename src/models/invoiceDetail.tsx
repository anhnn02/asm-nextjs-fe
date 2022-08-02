export interface IInvoiceDetail {
    _id?: string,
    name: string
    img: string,
    size: string,
    regularPrice: number,
    salePrice: number,
    quantity: number,
    total: number,
    invoiceId: string,
}