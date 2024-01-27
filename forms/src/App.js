import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState( {firstName:"" , lastName:"" , email:"" , country:"INDIA" , street:"" , city:"" , state:"" , zip:"" ,
  comments:false , candidates:false , offers:false , pushNotifications:"" })

  function changeHandler(event) {
    const {name, type, value, checked} = event.target;
    setFormData( (prev => {
      return {
        ...prev ,
        [name] : type ==="checkbox" ? checked : value
      }
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("finally printing the data of the form");
    console.log(formData);
  }



  return (

    <div className="flex flex-col w-[700px] border-2 mx-auto">

      <form onSubmit={submitHandler} className="py-3 px-4">

        <label htmlFor="firstName">First Name</label>
        <br></br>
        <input type="text" name="firstName" placeholder="First Name" id="firstName" value={formData.firstName} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>

        <label htmlFor="lastName">Last Name</label>
        <br></br>
        <input type="text" name="lastName" placeholder="Last Name" id="lastName" value={formData.lastName} onChange={changeHandler} className="border-2 w-full my-2"></input>


        <br></br>

        <label htmlFor="firstName">Email</label>
        <br></br>
        <input type="email" name="email" placeholder="akhil@abc.com" id="email" value={formData.email} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>

        <label htmlFor="country">Country</label>
        <br></br>
        <select className="border-2 w-full my-2" id="country" name="country" value={formData.country} onChange={changeHandler}>
          <option value="INDIA">INDIA</option>
          <option value="UNITED STATES">UNITED STATES</option>
          <option value="CANADA">CANADA</option>
          <option value="MEXICO">MEXICO</option>
        </select>

        <br></br>

        <label htmlFor="street">Street Address</label>
        <br></br>
        <input type="text" name="street" placeholder="1234 Main St" id="street" value={formData.street} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>

        <label htmlFor="city">City</label>
        <br></br>
        <input type="text" name="city" placeholder="jammu" id="city" value={formData.city} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>

        <label htmlFor="state">State / Province</label>
        <br></br>
        <input type="text" name="state" placeholder="Jammu & Kashmir" id="state" value={formData.state} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>

        <label htmlFor="zip">Zip / postal Code</label>
        <br></br>
        <input type="text" name="zip" placeholder="123456" id="zip" value={formData.zip} onChange={changeHandler} className="border-2 w-full my-2"></input>

        <br></br>
        <br></br>

        <fieldset>

          <legend>By Email</legend>

          <br></br>

          <input type="checkbox" id="comments" name="comments" checked={formData.commnets} onChange={changeHandler}></input>
          <label htmlFor="comments" className="mx-2">Comments</label>
          <p className="text-slate-400 text-sm">Get notified when someone posts a comment on a posting.</p>

          <br></br>

          <input type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changeHandler}></input>
          <label htmlFor="candidates" className="mx-2">Candidates</label>
          <p className="text-slate-400 text-sm">Get notified when a candidate applies for a job.</p>

          <br></br>

          <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler}></input>
          <label htmlFor="offers" className="mx-2">Offers</label>
          <p className="text-slate-400 text-sm">Get notified when a candidate accepts or rejects an offer.</p>

        </fieldset>

        <br></br>

        <fieldset>

          <legend>Push Notifications</legend>

          <p className="text-slate-400 text-sm">These are delivered via SMS to your mobile phone</p>

          <br></br>

          <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}  ></input>
          <label htmlFor="pushEverything" className="mx-1">Everything</label>

          <br></br>


          <input type="radio" id="pushEmail" name="pushNotifications" value="Same as Email" onChange={changeHandler}  ></input>
          <label htmlFor="pushEmail" className="mx-1">Same as Email</label>

          <br></br>


          <input type="radio" id="pushNothing" name="pushNotifications" value="No Push notifications" onChange={changeHandler}  ></input>
          <label htmlFor="pushNothing" className="mx-1">No push notifications</label>

        </fieldset>

        <br/>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">SAVE</button>

      </form>

    </div>

  );
}

export default App;
