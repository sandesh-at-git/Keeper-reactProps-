import React from "react";

let date = new Date();
let year = date.getFullYear();
console.log(year)
function Footer() {
  return <footer>
    <p>Copyright © {year}</p>
  </footer>;
}
export default Footer;
