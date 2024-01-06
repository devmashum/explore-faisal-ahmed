import Image from 'next/image';
import React from 'react';
import Dragon from '../../assets/topNews.png'
import Link from 'next/link';

const DragonNews = () => {
    return (
        <div>
       <div>
      <div>
           <Link href={'https://the-dragon-news-alpha.vercel.app/'} target='_blank'> <Image className='w-full ' src={Dragon} width={700} alt='Dragon'/></Link>

            <div className='lg:px-40 p-5 bg-slate-50'>
          <div>
            <div><h3 className=' text-slate-900 text-xl font-bold'>Projektname: </h3></div>
            <div className='flex items-center justify-start gap-3'><h2 className="text-slate-900 text-xl mt-3">
            The Dragon News</h2>
            <Link href={'https://the-dragon-news-alpha.vercel.app/'} target='_blank'><button className=' btn text-xl bg-slate-200 p-2 rounded-lg mt-3'>Live Link</button></Link>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl font-bold mt-3">Projektdetails:</h3>
            <div className="text-slate-900 mt-3 text-justify text-base">
            Das Online-Zeitungsportal mit Next.js und Material-UI entwickelt, wobei MongoDB als Datenbank dient, ist eine Online-Plattform, welche aktuelle Nachrichten zeigt. Die Benutzer können kostenlos Nachrichten lesen und sich z.B. über Politik oder Sport informieren. 
<h1 className='text-xl font-bold py-3'>Hauptmerkmale:</h1>
<div>
<h3 className='ml-5 font-bold'>Artikelanzeige:</h3>
<ul className='list-disc ml-10'>
  <li>
  Präsentation von Nachrichtenartikeln mit Funktionen wie Überschriften, Bildern und Zusammenfassungen
  </li>
</ul>
<h3 className='ml-5 font-bold'>Kategorienavigation:</h3> 
<ul className='list-disc ml-10'>
  <li>
  Organisation von Nachrichtenartikeln in Kategorien für einfache Navigation und Benutzerfreundlichkeit
  </li>
</ul>
<h3 className='ml-5 font-bold'>Responsive Design:</h3> 
<ul className='list-disc ml-10'>
  <li>
  Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones
  </li>
</ul>
<h3 className='ml-5 font-bold'>Dynamisches Routing:</h3>
<ul className='list-disc ml-10'>
  <li>
  Nutzung von Next.js dynamischem Routing für effiziente Bearbeitung unterschiedlicher Seiten und Inhalte
  </li>
</ul>

<h3 className='ml-5 font-bold'>Datenbank:</h3>
<ul className='list-disc ml-10'>
  <li>
  MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen
  </li>
</ul>
</div>

            </div>
            <h4 className='font-bold mt-3  mb-5 text-xl'>Technologien, die ich für diese Plattform verwendet habe:</h4>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 text-center">
            <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>Next.js</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
      
            </div>
          </div>
        </div>
        </div>
       
        </div>
        
    );
};

export default DragonNews;