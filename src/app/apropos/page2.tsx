
import Image from 'next/image';
import styles from './apropos.module.css';

export default function Apropos() {
  return (
    <div className={styles.container}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.photo}>
          <Image src="/images/apropos/portrait.jpg" alt="Portrait" fill sizes="120px" />
        </div>
        <h1 className={styles.name}>Oli Huttmacher</h1>
        <h2 className={styles.title}>Développeur Front‑end</h2>
        <ul className={styles.contacts}>
          <li><img src="/images/icons/envelope.svg" alt="Email" width={24} height={24} /><span>oli.huttmacher@proton.me</span></li>
          <li><img src="/images/icons/github.svg" alt="GitHub" width={24} height={24} /><span>oli-huttmacher</span></li>
        </ul>
        <h3 className={styles.sectionHeading}>Compétences</h3>
        <ul className={styles.skills}>
          <li>JavaScript / React / Next.js</li>
          <li>HTML5 / CSS3 / Tailwind</li>
          <li>Figma / Photoshop / Unity</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>À propos de moi</h2>
          <p>
            Développeur front‑end passionné, j’allie créativité et performance pour créer des interfaces modernes
            et accessibles. Curieux et autonome, j’explore constamment de nouveaux frameworks et outils.
          </p>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Expériences Professionnelles</h2>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.date}>2022 – Aujourd’hui</span>
              <strong>Front‑End Developer @ Becode</strong>
              <p>Création de composants React et optimisation performance d’une application SaaS.</p>
            </li>
            <li>
              <span className={styles.date}>2018 – 2019</span>
              <strong>Junior Web Developer @ Technifutur</strong>
              <p>Développement de mini‑jeux Unity 2D/3D et participation à projets collaboratifs.</p>
            </li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Formations & Projets</h2>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.date}>2019 – 2022</span>
              <strong>Licence Informatique – Université XYZ</strong>
            </li>
            <li>
              <span className={styles.date}>2023</span>
              <strong>Portfolio Perso</strong>
              <p>Site Next.js responsive illustrant mes réalisations.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}