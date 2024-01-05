import Image from 'next/image';
import React from 'react';

import Apex from '../../assets/apexArtistry.jpg'
import Link from 'next/link';

const ApexArtistry = () => {
    return (
        <div>
            <Link  href={'https://apexartistry-47b43.web.app/'} target='_blank'><Image className='w-full  lg:border-b-blue-300 border-2' src={Apex} width={800}  alt='Apex'/></Link>

            <div className='lg:px-40 p-5 bg-slate-100'>
          <div className=' gap-3'>
            <div><h3 className='text-slate-900 text-xl font-bold'>Projekname: </h3></div>
            <div><h2 className="text-slate-900  text-xl mt-3">
            Apex Artistry</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl font-bold my-3 ">Projektdetails:</h3>
            <div className="text-slate-900  text-justify text-base">
          
<p>ApexArtistry ist eine dynamische, reaktionsfähige Plattform, die es Benutzern ermöglicht, Künstler durch Spenden zu unterstützen. Benutzer, die selbst kreativ tätig werden möchten, können eine Genehmigung vom Administrator beantragen, um Kunstwerke für Wettbewerbe einzureichen. Gewinner erhalten Preise, während Nicht-Gewinner die gespendeten Beträge nach Abzug von Plattformgebühren erhalten.</p>

<h1 className='text-xl my-3 font-bold'>Hauptmerkmale:</h1>

<div>
<b className='ml-5'>Registrierung, Anmeldung und Profile:</b> <br />

<ul className='list-disc ml-10'>
<li>Benutzer können Konten erstellen, d.h. ein Profil erstellen mit E-Mail, Namen und Passwort</li>
  <li>Registrierte Benutzer können sich mit ihren Anmeldedaten einloggen</li>
  <li>Anmeldung mit Google-Popup-Funktion</li>
  <li>Sicherung mit JWT (Speichern des Tokens in einem Browser-Cookie)</li>
</ul>
</div>
<div>
<b className='ml-5'>Artikelanzeige:</b>
<br />
<ul className='list-disc ml-10'>
<li>Präsentation verschiedener Kunstwerke von Künstlern mit Funktionen wie Gewonnen oder in der Bearbeitung, Bildern, Zusammenfassungen und Preisen</li>
</ul>

<b className='ml-5'>Responsive Design:</b> <br />
<ul className='list-disc ml-10'>
  <li>Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones</li>
</ul> 
<b className='ml-5'>Dynamisches Routing:</b> <br />
<ul className='list-disc ml-10'>
  <li>Nutzung von React.js dynamischem Routing für die effiziente Bearbeitung unterschiedlicher Seiten und Inhalte</li>
</ul> 

<b className='ml-5'>Details Section:</b> 
<ul className='list-disc ml-10'>
  <li>Bei Klicken des Details-Buttons können Benutzer Informationen zu einem Kunstwerk lesen, den Preis sehen und spenden</li>
</ul>
<b className='ml-5'>Bezahlungsmöglichkeiten:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Benutzer kann direkt mit seiner Kredit- oder Visakarte spenden
  </li>
</ul>

<b className='ml-5'>Kunstler werden:</b> 
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


<b className='ml-5'>Sicherheit:</b>
<ul className='list-disc ml-10'>
  <li>
  Die Website ist durch die Verwendung von JSON Web Token (JWT) abgesichert, um eine sichere Benutzererfahrung zu gewährleisten
  </li>
</ul>
<b className='ml-5'>Datenbank:</b>
<ul className='list-disc ml-10'>
  <li>
  MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen
  </li>
</ul>
<div>
<h1 className='text-xl font-bold my-3'>Funktionalität:</h1> 

<ul>
  <li>
  Um die Funktionalität zu testen, melden Sie sich bitte mit den folgenden Anmeldedaten an:
  </li>
</ul>

<b className='ml-5'>Als Benutzer:</b> user@gmail.com <br />
<b className='ml-5'>Als Creator:</b> creator@gmail.com <br />
<b className='ml-5'>Als Administrator:</b> admin@gmail.com <br />
<b className='ml-5'>Passwort</b> (gleich für alle Benutzer): 123456 
<h1 className='text-xl font-bold my-3'>Dashboard:</h1> 
<ul>
  <li>
  Dashboard für drei Arten von Benutzern erstellt:
  </li>
</ul>

<b className='ml-5'>Benutzer:</b>
<ul className='list-disc ml-10'>
  <li>Ein Benutzer kann ein Kunstwerk auswählen und über die Zahlungsmethode Card Payment spenden</li>
  <li>
  Im Dashboard für allgemeine Benutzer können diese ihr Profil, den Warenkorb, gespendete Wettbewerbe und die Zahlungshistorie überprüfen
  </li>
</ul>
<b className='ml-5'>Kunstler:</b> 
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
<b className='ml-5'>Administrator:</b> 
<ul className='list-disc ml-10'>
  <li>
  Ein Administrator kann alle Benutzer verwalten, einschließlich der Befugnis, einen allgemeinen Benutzer zu einem Creator zu machen
  </li>
  <li>
  Bei Bedarf kann der Administrator einen Benutzer löschen
  </li>
  <li>
  Sie können auch einen Creator als Gewinner erklären
  </li>
  <li>
  Der Administrator hat Zugriff auf den Support-Bereich, der alle Kontaktinformationen anzeigt
  </li>
</ul>
</div>

</div>

            </div>

            <h4 className='font-bold text-xl mt-3 mb-5'>Technologien, die ich für diese Plattform verwendet habe:</h4>
            <div className='lg:px-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
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