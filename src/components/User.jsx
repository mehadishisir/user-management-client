import React, { use } from "react";

const User = ({ userPromise }) => {
  const users = use(userPromise);
  //   console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="email" placeholder="email" name="email"></input>
        <br />
        <button type="submit"> submit</button>
      </form>
      {users.map((user, index) => (
        <h1 key={index}>
          {user.name} : {user.age}
        </h1>
      ))}
    </div>
  );
};

export default User;
