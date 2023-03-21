import { useState } from "react";
import Customer from "../components/register/Customer";
import Seller from "../components/register/Seller";
import Admin from "../components/register/Admin"
function Register() {
    const [form, setForm] = useState("Customer")
  return (
    <> 
      <div className="flex flex-col items-center justify-center w-full h-screen text-xl ">
        <div>
          <p className="text-center">Register</p>
          <div className="grid grid-cols-2 gap-32 mt-6">
            <button onClick={()=> setForm("Customer") }>Customer</button>
            <button onClick={()=> setForm("Seller") }>Seller</button>
            {/*<button onClick={()=> setForm("Admin") }>Admin</button> */}
          </div>
        </div>
        <div className="mt-4">
        { form === "Customer" ? <Customer/> : "" }
        { form === "Seller" ? <Seller/> : "" }
        {/* { form === "Admin" ? <Admin/> : "" } */}
        </div>
      </div>
    </>
  );
}

export default Register;
