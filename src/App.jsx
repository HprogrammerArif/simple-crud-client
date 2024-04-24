import { json } from "react-router-dom";
import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };
    console.log(user);
    // ekhon user date pathabo
    //normal fetch korle get zai khuzbe
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert('Users added successfully');
          form.reset();
        }
      });
      //NOW CLIENT SIDE THEKE SERVER SIDE DATA CHOLE GECHE
      //(SEE THE SERVER SIDE CONSOLE AND CLIENT SIDE CONSOLE)
      //WE HAVE RECIVE DATA NOW WE HAVE TO SEND DATA SERVER SIDE TO DATABASE
  };

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
