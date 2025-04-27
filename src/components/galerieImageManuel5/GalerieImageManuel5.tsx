import Link from "next/link";
import styles from "./galerieImageManuel5.module.css";

export default function GalerieImageManuel5() {
   return (
      <div className={styles.wrapper}>
      
      <h2 className="text-5xl self-center mb-6">Dernières créations</h2>

      <div className={styles.galerie5El}>

        <Link href="/photoshop"><img
          src="/images/photoshop/portfolioentete.png"
          alt="Portfolio entête"
        />
        </Link>

        <Link href="/photoshop"> <img src="/images/photoshop/lavep36.png" alt="Lave P36" />
        </Link>

        <Link href="/photoshop">   <img
          src="/images/photoshop/artofprogressive.png"
          alt="Art of Progressive"
        /></Link>


        <Link href="/photoshop"><img src="/images/photoshop/daxColorFinal.jpg" alt="Dax Color" /></Link>


        <Link href="/photoshop"> <img
          src="/images/photoshop/portfolioheader.png"
          alt="Portfolio header"
        />
        </Link>
      </div>
    </div>
   );
}