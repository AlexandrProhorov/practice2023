const Page = (props) => {    
    return (
        <div>
            {props.name}
            {props.cost}
        </div>
    )
}
  
const ProductPage = (props) => {    
    let catalog = props.products.map(product => <Page key={product.id} id={product.id} name={product.name} cost={product.cost}/>)
    var currentLocation = window.location.href.slice(-1)

    return (
        <div>
            {catalog[currentLocation]}
        </div>
    )
}

export default ProductPage;