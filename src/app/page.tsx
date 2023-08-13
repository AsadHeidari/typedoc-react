/**
 * @description This is Home page.
 * @module
 */

import React from "react";
import { createUser } from "./user";

/**
 * @description Renders the home component.
 * @see https://nextjs.org/docs/basic-features/pages
 * @return {JSX.Element} The home component.
 */
function Home(): JSX.Element {
  //  this is users
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(createUser("user" + i, "family" + i));
  }

  return (
    <>
      <h1>This is Home</h1>
      {users.map((user, index) => {
        return (
          <ul key={index}>
            <li>{user.name}</li>
            <li>{user.family}</li>
            <li>{user.age}</li>
            <li>{user.gender}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Home;
