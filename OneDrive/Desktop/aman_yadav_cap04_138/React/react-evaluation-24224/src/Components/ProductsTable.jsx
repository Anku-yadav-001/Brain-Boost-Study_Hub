import ProductCard from "./ProductCard"
import Loader from "../Components/Loader"
function ProductsTable({data}){
    if(!data){
        return  (
            <Loader/>
        )
    }
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data.map((item) => {
                           return (<ProductCard key={item.id} {...item}/>)
                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable