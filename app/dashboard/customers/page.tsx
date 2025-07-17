import { fetchCustomers } from "@/app/lib/data";

export default async function  CustomerPage() {
  const response = await fetchCustomers();
  // const json = response.json();
  
  return (
    <h1>CUSTOMER PAGE</h1>
  );
}
