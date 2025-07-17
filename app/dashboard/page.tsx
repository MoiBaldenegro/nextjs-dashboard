import { fetchRevenue } from "../lib/data"

export default async function Dasboard(){

    const response = await fetchRevenue();
    console.log(response);
return (
    <h1>DASHBOARD</h1>
)
}
