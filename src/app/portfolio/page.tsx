import Link from "next/link";

export default function Portfolio() {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 )">
      <Link href="/photoshop" className="bg-gray-600 hover:bg-amber-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">photoshop</h2>
      </Link>
      <Link href="/illustrations" className="bg-gray-600 hover:bg-blue-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Illustrations</h2>
      </Link>
      <Link href="/uiux" className="bg-gray-600 hover:bg-cyan-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">UI/UX</h2>
      </Link>
      <Link href="/animations" className="bg-gray-600 hover:bg-emerald-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Animations</h2>
      </Link>
      <Link href="/iaworlds" className="bg-gray-600 hover:bg-fuchsia-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">ia-worlds</h2>
       </Link>
       <Link href="/games" className="bg-gray-600 hover:bg-indigo-500 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">Games</h2>
      </Link>
    </div>
   )
 }