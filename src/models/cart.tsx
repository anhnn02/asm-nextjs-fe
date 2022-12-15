export interface ICart {
    idInCart: string,
    idPro: string,
    size: any,
    img: string,
    quantity: number,
    name: string,
    desc: string,
    regularPrice: number,
    salePrice: number,
    categoryProduct?: any,
    total: number
}