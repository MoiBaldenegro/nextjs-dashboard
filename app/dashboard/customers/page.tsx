import { fetchCustomers } from "@/app/lib/data";

export default async function  CustomerPage() {
  const response = await fetchCustomers();
  console.log(response);
  
  return (
    <h1>CUSTOMER PAGE</h1>
  );
}
