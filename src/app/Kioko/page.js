import Image from 'next/image';
import React from 'react';
import KiokoBanner from '../../assets/Kioko Sushi GmbH.png'
import Link from 'next/link';


const Kioko = () => {
    return (
        <div>
           <div>
       <div>
      <div>
            <Link href={'https://kioko-sushi.de/'} target='_blank'><Image className='w-full lg:h-[600px]' src={KiokoBanner} width={700} alt='KiokoBanner'/></Link>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className=' text-slate-900 text-xl lg:text-2xl'>Projekname: </h3></div>
            <div><h2 className="text-slate-900 text-xl lg:text-2xl font-bold ">
            Kioko Sushi</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl underline font-bold mt-3">Projektdetails:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
            
            Diese Website ist eine voll funktionsfähige Website mit E-Commerce-Funktionalität, entwickelt mit WordPress. Ein Kunde kann jedes Essen online bestellen und entscheiden, ob er es selbst im Restaurant abholen möchte oder das Essen geliefert wird.<br />
<br/>
<div>

<b className='text-xl underline'>Hauptmerkmale:</b>
<br /> <br />
<b>Tischreservierungen vor Ort:</b> 
<ul className='list-disc ml-10'>
  <li>
  Kunden können ganz einfach über die Website einen Tisch reservieren indem sie das gewünschte Datum und die Uhrzeit auswählen sowie die Anzahl der Gäste angeben
  </li>
</ul>

<b>Online-Bestellung:</b> 
<ul className='list-disc ml-10'>
  <li>
  Kunden können ihr Essen online bestellen, um es zu Hause zu genießen oder es im Restaurant abzuholen
  </li>
  <li>
  Diese Funktion für die Online-Bestellung ermöglicht es Kunden ein umfangreiches Menü zu erkunden, eine Bestellung aufzugeben und auszuwählen, ob sie es geliefert haben möchten oder zum Mitnehmen
  </li>
</ul>
</div>
            </h4>

            <h4 className='font-bold mb-5'>Technologien, die ich für diese Plattform verwendet habe:</h4>
            <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
            <h2 className='border border-xl border-black text-sm lg:text-base'>HTML</h2>
            <h2 className='border border-xl border-black'>CSS</h2>
                      <h2 className='border border-xl border-black'>WORDPRESS</h2>
           
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Kioko;