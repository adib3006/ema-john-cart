const totalPrice = (cart) => {
    const reducer = (previous, current) => previous + current.price;
    const total = cart.reduce(reducer,0);
    return total;
}

const tax = total => {
    const taxTotal = parseInt(total * 0.1);
    return taxTotal;
}

const shipping = (cart) => {
    const reducer = (previous, current) => previous + current.shipping;
    const total = cart.reduce(reducer,0);
    return total;
}

const grandTotal = (num1,num2,num3) => {
    const sum = num1+num2+num3;
    return sum;
}

export {totalPrice,tax,shipping,grandTotal};