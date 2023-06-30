import ProductPage from "./ProductPage"

const Products = (props) => {    
    let catalog = props.products.map(product => <ProductPage key={product.id} id={product.id} name={product.name} cost={product.cost}/>)
    let currentLocation = window.location.href.split("/").pop()

    return (
        <div>
            {catalog[currentLocation]}
        </div>
    )
}

export default Products;