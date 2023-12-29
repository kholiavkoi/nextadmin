import React from "react";
import { addUser } from "../lib/actions";

const page = () => {
  const handleForm = async (e) => {
    "use server";
    addUser(e);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" placeholder="username" />
        <input type="email" name="email" placeholder="email" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
