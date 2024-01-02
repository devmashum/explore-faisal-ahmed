import Image from 'next/image';
import React from 'react';
import KiokoBanner from '../../assets/Kioko Sushi GmbH.png'


const Kioko = () => {
    return (
        <div>
           <div>
       <div>
      <div>
            <Image className='w-full lg:h-[600px]' src={KiokoBanner} width={700} alt='KiokoBanner'/>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className=' text-slate-900 text-xl lg:text-2xl'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-xl lg:text-2xl font-bold ">
            Kioko Sushi</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
            
Diese Website ist eine voll funktionsfähige Website mit E-Commerce-Funktionalität, entwickelt mit WordPress. Ein Kunde kann jedes Essen online bestellen und entscheiden, ob er es selbst im Restaurant abholen möchte.<br />
<br/>
<div>
<b>Tischreservierungen vor Ort:</b> <br />Kunden können ganz einfach über diese benutzerfreundliche Website einen Tisch reservieren. Sie können ihr gewünschtes Datum und die Uhrzeit auswählen und die Anzahl der Gäste angeben.
<br />
<br />
<b>Online-Bestellung:</b> <br />Kunden können ihr Essen online bestellen, um es zu Hause zu genießen oder es im Restaurant abzuholen. Diese Funktion für die Online-Bestellung ermöglicht es Kunden, unser umfangreiches Menü zu erkunden, eine Bestellung aufzugeben und auszuwählen, ob sie es geliefert haben möchten oder zum Mitnehmen.
</div>
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">HTML</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">CSS</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">WORDPRESS</button>
              
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Kioko;