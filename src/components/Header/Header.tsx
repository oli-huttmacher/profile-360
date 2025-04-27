import Link from "next/link";
import styles from "./header.module.css";
export default function Header() {
   return (
      <header className={styles.header}>
         <nav>
            <ul className="flex item-center justify-around text-xl sm:text-2xl md:text-3xl ">
               <li><Link href="/">Accueil</Link></li>
               <li><Link href="/alaune">À la une</Link></li>
               <li><Link href="/portfolio">Portfolio</Link></li>
               <li><Link href="/apropos">A propos</Link></li>
               <li><Link href="/contact">Contact</Link></li>


            </ul>
         </nav>
      </header>
   )
}
