export default function Contact() {
   return (
      <div className="flex justify-center items-start border-2 h-dvh">
         <div className="flex flex-col conatainer-Contact ">
        <h2 className="text-3xl ml-10 mt-10">Contactez-nous</h2>

         <form
            action="/api/contact"
            method="POST"
            className="flex flex-col bg-gray-600 w-5xl ml-10 border-4 p-4"
         >
            

            {/* Utilisez htmlFor au lieu de for */}
            <label htmlFor="name"  className="text-2xl">Nom :</label>
            <input className="bg-gray-400 text-black h-10 p-2" type="text"id="name"name="name"required />

            <label htmlFor="email" className="text-2xl">Email :</label>
            <input className="bg-gray-400 text-black h-10 p-2" type="email" id="email"name="email" required />

            <label htmlFor="message"  className="text-2xl">Message :</label>
            <textarea className="bg-gray-400 text-black p-2" 
               id="message"
               name="message"
               rows={5}
               required
            />

         <button type="submit" className="bg-amber-50 text-stone-900 w-24 border-3 border-b-blue-600  rounded-2xl mt-2 hover:bg-amber-600">Envoyer</button>
         </form>
      </div>
      </div>
      

   )
}