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
<br /> <br />
<div>
<b>Funktionalität:</b> Um die Funktionalität zu testen, melden Sie sich bitte mit den folgenden Anmeldedaten an: <br />

<b>Als Benutzer:</b> user@gmail.com <br />
<b>Als Creator:</b> creator@gmail.com <br />
<b>Als Administrator:</b> admin@gmail.com <br />
<b>Passwort</b> (gleich für alle Benutzer): 123456 <br />
<br />
<b>Dashboard:</b> Ich habe ein Dashboard für drei Arten von Benutzern erstellt. <br />

<b>Normaler Benutzer:</b> Ein normaler Benutzer kann ein Kunstwerk auswählen und über die Zahlungsmethode <b>Card Payment </b>spenden. Im Dashboard für normale Benutzer können sie ihr Profil, den Warenkorb, gespendete Wettbewerbe und die Zahlungshistorie überprüfen. <br /> 
<br />
<b>Kunstler:</b> Ein Creator kann ein Kunstwerk hinzufügen, indem er auf <b>Contest hinzufügen</b> klickt. Sie können ihre eingereichten Wettbewerbe überprüfen und feststellen, ob sie einen Wettbewerb gewonnen haben oder nicht. Wenn sie auch für ein Kunstwerk gespendet haben, können sie ihre Zahlungshistorie überprüfen. <br />
<br />
<b>Administrator:</b> Ein Administrator kann alle Benutzer verwalten, einschließlich der Befugnis, einen normalen Benutzer zu einem Creator zu machen. Bei Bedarf kann der Administrator einen Benutzer löschen. Sie können auch einen Creator als Gewinner erklären. Der Administrator hat Zugriff auf den Support-Bereich, der alle Kontaktinformationen anzeigt.
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