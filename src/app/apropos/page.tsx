import styles from "./apropos.module.css";

export default function Apropos() {
   return (
      <div className="p-10 bg-white">
         <div className={styles.container}>
            
            
            <div className="w-46 ">
               <div className={styles.clipWrapper}>
                  <div className={styles.containerSvg}></div>
               </div>
                  {/* <h2 className="font-bold text-xl text-black  bg-amber-300 p-2 ">Développeur front-end </h2> */}
               </div>
                        <div className="flex flex-col items-center w-2xl mt-2 ">
                           <h1 className="text-3xl mb-3 font-thin bg-neutral-100">A propos de moi</h1>
                           <p className="font-normal text-center text-1xl">Je suis développeur front-end avec des compétences en JavaScript, React, Next.js, HTML et CSS. Je suis passionné par la création d'interfaces modernes, performantes et accessibles. Ma curiosité et ma capacité d'apprentissage me permettent d'évoluer rapidement dans les environnements techniques actuels, notamment avec des outils comme Vite et Node.js.<br />Autonome et curieux, je m'intéresse aussi au design graphique (Photoshop, Illustrator, Figma) et au développement de jeux 2D (Unity), pour nourrir une approche créative du web.</p>
            </div>
            <div className="mt-4">
               <div className="flex items-center gap-2">
                  <img src="/images/icons/envelope.svg" alt="envelope" width={50} height={50} />
                  <p>oli.huttmacher.pronton.me</p>
               </div>
               <div className="flex items-center gap-1">
                  <img src="/images/icons/github.svg" alt=""width={50} height={50} />
                  <p>oli-huttmacher@github.com</p>
               </div>
            </div>
         </div>
         <div className="flex justify-around items-start  text-black ">
            <div className={styles.formations}>
               <h1 className=" text-2xl text-center mb-6 bg-neutral-100 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.75)]">Formations</h1>
               <div className="mb-4">
                  <h3 className="bg-green-200 mb-2">2018</h3>
                  <li className="ml-6">Site Web</li>
                  <li className="ml-6">BeCode Liège</li>
               </div>
                  <div className="mb-8">
                     <h3 className="bg-green-200 mb-2">2017</h3>
                     <li className="ml-6">Jeux vidéo /unity3d</li>
                     <li className="ml-6">Technifuture</li>
                  </div>
                     <div className="mb-8">
                        <h3 className="bg-green-200 mb-2">2016</h3>
                           <li className="ml-6">Gestion</li>
                           <li className="ml-6">Alpi Oupeye </li>
                     </div>
               <div className={styles.quality}>
                  <h2 className="text-2xl bg-orange-200 mb-4">Qualités</h2>
             <li className={styles.qualityIndent}>Curieux et toujours à l'affût des nouvelles technologies
             </li>
             
                     <li className={styles.qualityIndent}>Sens du détail dans le code comme dans le design</li>
                     <li className={styles.qualityIndent}>Créatif, avec une sensibilité visuelle développée</li>
                     <li className={styles.qualityIndent}>Jorganise mon travail avec méthode, du code au design.</li>
               </div>
               <div className={styles.langues}>
                  <ol><p></p></ol>
                  <ol><p></p></ol>
               </div>
            </div>




            <div className={styles.experiences} >
               <h1 className="text-2xl text-center mb-6 bg-neutral-100  shadow-[5px_5px_5px_0px_rgba(0,0,0,0.75)]">Expériences Professionelles</h1>
               <div className="mb-6">
                  <h2 className="bg-blue-200">FORMATION ET PROJETS PERSONNELS</h2>
                  <p>AUTODIDACTE / 2020-2024</p>
                  <li className={styles.experiencesIndent}>Développement continu de mes compétences en JavaScript, React, Next.js et outils modernes du web, Photoshop, Figma à travers des projets personnels, tutos, et veille tech régulière.</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-slate-200" >DEVELOPPEUR WEB JUNIOR</h2>
                  <p >BECODE / 2018- 2019</p>
                  <li className={styles.experiencesIndent}>Formation intensive de 6 mois en développemnt web et frameworks chez Becode.Réalisation de projets individuels et collectifs Programmation en binôme et groupe Présentation de veilles technologiques</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-blue-200">JEUX VIDÉOS/ UNITY 3D</h2>
                  <p>TECHNIFUTURE / 2017 - 2018</p>
                  <li className={styles.experiencesIndent}>Formation de 6 mois avec Technifutur : Développement de jeu vidéo avec Unity 3D et c# Développement en équipe de jeu 2D, 3D Développement de jeu de société</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-slate-200">FORMATION</h2>
                  <p>AUTODIDACTE/ 2015- 2017</p>
                  <li className={styles.experiencesIndent}>Formation: intégrateur Web sur le site Openclassrooms.com Création de sites web Language javascript et début des frameworks.Gestion du code de programmation Référencement Web Unity 3d Réussite de la gestion entreprise (ALPI)</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-blue-200">GROUPEMENT D’EMPLOYEURS</h2>
                  <p>AUTODIDACTE/ 2015- 2017</p>
                  <li className={styles.experiencesIndent}>Formation: intégrateur Web sur le site Openclassrooms.com Création de sites web Language javascript et début des frameworks.Gestion du code de programmation Référencement Web Unity 3d Réussite de la gestion entreprise (ALPI)</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-slate-200">GROUPEMENT D’EMPLOYEURS</h2>
                  <p>UDIL.GE / 2015 - 2017</p>
                  <li className={styles.experiencesIndent}>Entrée chez UDIL.GE Groupement d'employeurs visant à promouvoir et développer les compétences liées au métier de l'industrie diverses formations en cours</li>
               </div>
               <div className="mb-6">
                  <h2 className="bg-blue-200">OUVRIER POLYVALENT</h2>
                  <p>ARCELOR MITTAL/ 1999 - 2015</p>
                  <li className={styles.experiencesIndent} >Ouvrier – polyvalent aciérie de Chertal étapes de transformation de la fonte en acier. processus de Galvanisation de tôles plus induction de produit pour manutention corrosion de la tôle.</li>
               </div>

            </div>

         </div>


      </div>
   )
}