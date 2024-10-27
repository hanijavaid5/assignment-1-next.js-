import Link from "next/link";
import { useRouter } from "next/router";

export default function Pages() {

  return (
    <div>
      <h3> ASSIGNMENT 1</h3>
      <Link href="/About">1- GO TO THE <h2> ABOUT PAGE</h2></Link>
     <Link href="/Contact.us">2- GO TO THE <h2>CONTACT PAGE</h2></Link>
      <Link href="/Service/app.development">3- GO TO THE NESTED PAGE OF <h2>SERVICE: App Development</h2></Link>
    <Link href="/Service/website.development">4- GO TO THE NESTED PAGE OF <h2>SERVICE: Website Development</h2></Link>
    <Link href="/Service">5- GO TO THE <h2>SERVICE PAGE</h2></Link>
  </div>
  );
}
