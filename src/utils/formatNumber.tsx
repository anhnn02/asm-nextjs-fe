export const formatPrice = (price) =>  {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return formatter.format(price);
};

export const formatPercent = (salePrice, regularPrice) => {
    const percentSale = 100 - ((salePrice / regularPrice) * 100)
    return Math.round(percentSale) + '%';
}

