import Link from "next/link";
import styles from './horizontalSingle.module.css';
export default function HorizontalSingle() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.containerImg}>
         <Link href="">
            <img src="/images/iaworlds/Liege_in_the_1950s.png" alt="img" />
        
         </Link>
         </div>
        
         <div className={styles.text}>
            <h1 className="text-3xl">La ville de Liège</h1>
            <h3 className="mb-4 text-gray-400">place cathédrale</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero quisquam dolore expedita odio commodi quidem nam ducimus, odit molestiae impedit error dicta ratione praesentium provident saepe sit, nostrum modi.</p>

         </div>
      </div>
   )
}