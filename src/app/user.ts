/**
 * this is user file
 * @module
 */

/**
 * @description Creates a user object with the given name and family.
 * @goTo {@link userCount | click here for go to the user count}
 * @example
 * const instance = new createUser("user1", "family1");
 * @param {string} name - The name of the user.
 * @param {string} family - The family name of the user.
 * @return { name: string; family: string; age: number; gender: string } The created user object.
 */
export function createUser(
  name: string,
  family: string
): { name: string; family: string; age: number; gender: string } {
  return {
    name,
    family,
    age: Math.random() * 10,
    gender: Math.random() < 0.5 ? "male" : "female",
  };
}

/**
 * @description The number of users to create.
 * @theCustomTag this is a custom tag for you :)
 */
export const userCount: number = 10;

/**
 * @description this is user address
 * @exampleForUserAddress
 * ```ts
 * const userAddress = "localhost";
 * ```
 * `
 *  you cat write code here :)
 * `
 * @see [googleMag](https://www.google.com/maps)
 */
export const userAddress: string = "localhost";
