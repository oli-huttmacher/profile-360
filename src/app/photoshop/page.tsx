import styles from "./photoshop.module.css";

export default function Photoshop() {
  return (
    <div className="flex justify-start items-start m-10">
      <div className={styles.container}>
      <img src="/images/photoshop/oliportfoliocover.png" alt="Image 1" />
      <img src="/images/photoshop/lavep36.png" alt="Image 2" />
      <img src="/images/photoshop/portfolioentete.png" alt="Image 3" />
      <img src="/images/photoshop/tram2.png" alt="Image 4" />
      <img src="/images/photoshop/portfolioheader.png" alt="Image 5" />
      <img src="/images/photoshop/daxColorfinal.jpg" alt="Image 6" />
      <img src="/images/photoshop/artofprogressive.png" alt="Image 7" />
      </div>
    </div>
  );
}

/*
   const images = [
      { src: '/images/photoshop/oliportfoliocover.png', orientation: 'vertical' },
      { src: '/images/photoshop/portfolioheader.png', orientation: 'horizontal' },
      { src: '/images/photoshop/portfolioentete.png', orientation: 'vertical' },
   
      
    ];
   return (
     <div className="grid grid-cols-2 gap-4">
       {images.map((image, index) => (
         <div
           key={index}
           className={`${
             image.orientation === 'vertical'
              /* ? 'aspect-[2/3]'
               : 'aspect-[16/9]'
           } bg-gray-200`}
         >
            Image ou contenu 
         </div>
       ))}
     </div>
   );
   
*/