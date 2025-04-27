import styles from "./galerieImageManuel4.module.css";
import Link from "next/link";

export default function galerieImageMAnuel4() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.containerVertical}>
            <div>
            <Link href=""><img
            src="/images/iaworlds/Liege_in_the_1950s.png"
            alt="Portfolio entête"
         />
               </Link>
               <div className={styles.info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>

            </div>
         </div>
       
         <div>
            <Link href=""><img
            src="/images/iaworlds/Liege_in_the_1950s.png"
            alt="Portfolio entête"
         />
               </Link>
               <div className={styles.info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>

            </div>
         </div>
           
     
         </div>
    
      </div>

   )
}