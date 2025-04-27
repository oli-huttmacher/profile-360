import Link from "next/link";
import styles from "./homePage.module.css";

import GalerieImageManuel4 from "@/components/galerieImageManuel4/galerieImageManuel4";
import GalerieImageManuel5 from "@/components/galerieImageManuel5/GalerieImageManuel5";
import HorizontalSingle from "@/components/horizontalSingle/HorizontalSingle";
export default function Home() {
  return (
    <div className={styles.containerHome}>
      <GalerieImageManuel5 />
      <GalerieImageManuel4 />
      <HorizontalSingle />
    </div>
  );
}