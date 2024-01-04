import Image from 'next/image';
import React from 'react';
import Dragon from '../../assets/dragonNews.png'

const DragonNews = () => {
    return (
        <div>
       <div>
      <div>
            <Image className='w-full lg:h-[600px]' src={Dragon} width={700} alt='Dragon'/>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className=' text-slate-900 text-xl lg:text-2xl'>Projektname: </h3></div>
            <div><h2 className="text-slate-900 text-xl lg:text-2xl font-bold ">
            The Dragon News</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl underline font-bold mt-3">Projektdetails:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
            Das Online-Zeitungsportal mit Next.js und Material-UI entwickelt, wobei MongoDB als Datenbank dient, ist eine Online-Plattform, welche aktuelle Nachrichten zeigt. Die Benutzer können kostenlos Nachrichten lesen und sich z.B. über Politik oder Sport informieren. <br />
            <br />
<b className='text-xl underline'>Hauptmerkmale:</b>
<br />
<br />
<div>
<b>Artikelanzeige:</b>
<ul className='list-disc ml-10'>
  <li>
  Präsentation von Nachrichtenartikeln mit Funktionen wie Überschriften, Bildern und Zusammenfassungen
  </li>
</ul>
<b>Kategorienavigation:</b> 
<ul className='list-disc ml-10'>
  <li>
  Organisation von Nachrichtenartikeln in Kategorien für einfache Navigation und Benutzerfreundlichkeit
  </li>
</ul>
<b>Responsive Design:</b> 
<ul className='list-disc ml-10'>
  <li>
  Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones
  </li>
</ul>
<b>Dynamisches Routing:</b>
<ul className='list-disc ml-10'>
  <li>
  Nutzung von Next.js dynamischem Routing für effiziente Bearbeitung unterschiedlicher Seiten und Inhalte
  </li>
</ul>

<b>Datenbank:</b>
<ul className='list-disc ml-10'>
  <li>
  MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen
  </li>
</ul>
</div>

            </h4>
            <h4 className='font-bold mb-5'>Technologien, die ich für diese Plattform verwendet habe:</h4>
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