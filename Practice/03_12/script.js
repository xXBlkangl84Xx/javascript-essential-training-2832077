/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack";
import Desk from "./Desk";
import ComputerBag from "./ComputerBag";

const officeDesk = new Desk("Office Desk", 2, 4, 6, "dark brown", true);
const pComputerBag = new ComputerBag(
  6,
  "dark blue",
  true,
  false,
  0,
  0,
  25,
  true
);
