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
            <h3 className="text-slate-900 text-xl font-bold mt-3">Projektdetails:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
          
<p>ApexArtistry ist eine dynamische, reaktionsfähige Plattform, die es Benutzern ermöglicht, Künstler durch Spenden zu unterstützen. Benutzer, die selbst kreativ tätig werden möchten, können eine Genehmigung vom Administrator beantragen, um Kunstwerke für Wettbewerbe einzureichen. Gewinner erhalten Preise, während Nicht-Gewinner die gespendeten Beträge nach Abzug von Plattformgebühren erhalten.</p> <br />

<b className='text-xl'>Hauptmerkmale:</b>
<br />
<br />
<div>
<b>Registrierung, Anmeldung und Profile:</b> <br />

<ul className='list-disc ml-10'>
<li>Benutzer können Konten erstellen, d.h. ein Profil erstellen mit E-Mail, Namen und Passwort</li>
  <li>Registrierte Benutzer können sich mit ihren Anmeldedaten einloggen</li>
  <li>Anmeldung mit Google-Popup-Funktion</li>
  <li>Sicherung mit JWT (Speichern des Tokens in einem Browser-Cookie)</li>
</ul>
</div>
<div>
<b>Artikelanzeige:</b>
<br />
<ul className='list-disc ml-10'>
<li>Präsentation verschiedener Kunstwerke von Künstlern mit Funktionen wie Gewonnen oder in der Bearbeitung, Bildern, Zusammenfassungen und Preisen</li>
</ul>

<b>Responsive Design:</b> <br />
<ul className='list-disc ml-10'>
  <li>Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones</li>
</ul> 
<b>Dynamisches Routing:</b> <br />
<ul className='list-disc ml-10'>
  <li>Nutzung von React.js dynamischem Routing für die effiziente Bearbeitung unterschiedlicher Seiten und Inhalte</li>
</ul> 

<b>Details Section:</b> 
<ul className='list-disc ml-10'>
  <li>Bei Klicken des Details-Buttons können Benutzer Informationen zu einem Kunstwerk lesen, den Preis sehen und spenden</li>
</ul>
<b>Bezahlungsmöglichkeiten:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Benutzer kann direkt mit seiner Kredit- oder Visakarte spenden
  </li>
</ul>

<b>Kunstler werden:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Benutzer kann auch als Künstler seine Kunst in dieser Platform veröffentlichen
  </li>
  <li>
  Dafür muss der Künstler eine E-Mail an den Administrator schreiben, dass er/sie als Künstler Zugang benötigt
  </li>
  <li>Danach kann der Administrator in seinem Dashboard den Zugang gewähren
  </li>
</ul>


<b>Sicherheit:</b>
<ul className='list-disc ml-10'>
  <li>
  Die Website ist durch die Verwendung von JSON Web Token (JWT) abgesichert, um eine sichere Benutzererfahrung zu gewährleisten
  </li>
</ul>
<b>Datenbank:</b>
<ul className='list-disc ml-10'>
  <li>
  MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen
  </li>
</ul>
<br /> <br />
<div>
<b className='text-xl'>Funktionalität:</b> 
<ul>
  <li>
  Um die Funktionalität zu testen, melden Sie sich bitte mit den folgenden Anmeldedaten an:
  </li>
</ul>

<b>Als Benutzer:</b> user@gmail.com <br />
<b>Als Creator:</b> creator@gmail.com <br />
<b>Als Administrator:</b> admin@gmail.com <br />
<b>Passwort</b> (gleich für alle Benutzer): 123456 <br />
<br />
<b className='text-xl'>Dashboard:</b> 
<ul>
  <li>
  Dashboard für drei Arten von Benutzern erstellt:
  </li>
</ul>

<b>Benutzer:</b>
<ul className='list-disc ml-10'>
  <li>Ein Benutzer kann ein Kunstwerk auswählen und über die Zahlungsmethode Card Payment spenden</li>
  <li>
  Im Dashboard für allgemeine Benutzer können diese ihr Profil, den Warenkorb, gespendete Wettbewerbe und die Zahlungshistorie überprüfen
  </li>
</ul>
<b>Kunstler:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Creator kann ein Kunstwerk hinzufügen, indem er auf Contest hinzufügen klickt  
  </li>
  <li>
  Sie können ihre eingereichten Wettbewerbe überprüfen und feststellen, ob sie einen Wettbewerb gewonnen haben oder nicht
  </li>
  <li>
  Wenn sie auch für ein Kunstwerk gespendet haben, können sie ihre Zahlungshistorie überprüfen
  </li>
</ul>
<b>Administrator:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Administrator kann alle Benutzer verwalten, einschließlich der Befugnis, einen allgemeinen Benutzer zu einem Creator zu machen
  </li>
  <li>
  Bei Bedarf kann der Administrator einen Benutzer löschen
  </li>
</ul>
</div>

</div>



 
            </h4>
            <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
            <h2 className='border border-xl border-black text-sm lg:text-base'>HTML</h2>
            <h2 className='border border-xl border-black'>CSS</h2>
                      <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>React</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
            <h2 className='border border-xl border-black'>Firebase</h2>
            <h2 className='border border-xl border-black'>JWT</h2>
            <h2 className='border border-xl border-black'>Stripe</h2>
          </div>
          </div>
        </div>
    );
};

export default ApexArtistry;