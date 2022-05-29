export const fetchProducts = (url = 'api/Products') => {
    return fetch(url)
        .then(response => response.json());
};


export const calculateShippingCost = ({ url = 'api/ShippingCost', value }) => {
    return fetch(`${url}/${value}`)
        .then(response => response)
        .then(response => response.json());
};

export const placeOrder = ({ url = 'api/Order', order }) => {
    return fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        //.then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        });
}