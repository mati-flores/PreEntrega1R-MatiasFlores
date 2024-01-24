const productos = [
    { id: "1", nombre: "Lemon Pie", precio: 2000, img: "../img/lemon.jpg", idCat: "2", stock: 100 },
    { id: "2", nombre: "Pirinea", precio: 1800, img: "../img/pirinea.jpg", idCat: "2", stock: 100 },
    { id: "3", nombre: "Galletas Monstruosas", precio: 670, img: "../img/galletas.jpg", idCat: "3", stock: 100 },
    { id: "4", nombre: "Brownie", precio: 900, img: "../img/brownie.jpg", idCat: "4", stock: 100 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}