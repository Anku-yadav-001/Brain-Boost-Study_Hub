import {RestaurantCard} from "../Components/RestaurantCard"
function RestaurantTable({data}){
    if(!data){
        return null;
    }
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                         return <RestaurantCard key={item.id} {...item}/>
                    })}
                </tbody>
            </table>
    )
}

export default RestaurantTable