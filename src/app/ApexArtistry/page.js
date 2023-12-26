import Image from 'next/image';
import React from 'react';

import Apex from '../../assets/apexArtistry.png'

const ApexArtistry = () => {
    return (
        <div>
            <Image className='w-full  lg:h-[600px]' src={Apex} width={800} alt='Apex'/>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className='text-slate-900 text-xl lg:text-2xl'>Projekname: </h3></div>
            <div><h2 className="text-slate-900 font-bold text-xl lg:text-2xl">
            Apex Artistry</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Projektdetails:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
          
<p>ApexArtistry ist eine dynamische, reaktionsfähige Plattform, die es Benutzern ermöglicht, Künstler durch Spenden zu unterstützen. Benutzer, die selbst kreativ tätig werden möchten, können eine Genehmigung vom Administrator beantragen, um Kunstwerke für Wettbewerbe einzureichen. Gewinner erhalten Preise, während Nicht-Gewinner die gespendeten Beträge nach Abzug von Plattformgebühren erhalten.</p> <br />

<b>Hauptmerkmale:</b>
<br />
<br />
<div>
<b>Artikelanzeige:</b>
<br />
Präsentation verschiedener Kunstwerke von Künstlern mit Funktionen wie Gewöhnung oder Bearbeitung, Bildern, Zusammenfassungen und Preisen.
<br />

<b>Responsive Design:</b> <br />
Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones. <br />
<b>Dynamisches Routing:</b> <br />
Nutzung von React.js dynamischem Routing für die effiziente Bearbeitung unterschiedlicher Seiten und Inhalte. <br />

<b>Details Section:</b> Bei Klicken des Details-Buttons können Benutzer Informationen zu einem Kunstwerk lesen, den Preis sehen und spenden.
<br />
<b>Bezahlungsmöglichkeiten:</b> Ein Benutzer kann direkt mit seiner Kredit- oder Visakarte spenden.
<br />
<b>Kunstler werden:</b> Ein normaler Benutzer kann auch als Künstler seine Kunst in diesem Platform veröffentlichen. Dafür muss er/sie eine E-Mail an den Administrator schreiben, dass er/sie als Künstler Zugang benötigt. Dann kann der Administrator in seinem Dashboard den Zugang gewähren.
<br />


<b>Benutzerauthentifizierung:</b>
Firebase wird für die Benutzerregistrierung sowie die An- und Abmeldungs-Funktionalität verwendet.
<br />
<b>Sicherheit:</b> Die Website ist durch die Verwendung von JSON Web Token (JWT) abgesichert, um eine sichere Benutzererfahrung zu gewährleisten.
<br />
<b>Datenspeicher:</b>
MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen.
</div>



 
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JavaScript</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">React</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Tailwind</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">DaisyUi</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">MongoDb</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Firebase</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JWT</button>
            </div>
          </div>
        </div>
    );
};

export default ApexArtistry;