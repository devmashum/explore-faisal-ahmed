import Image from 'next/image';
import React from 'react';
import Car from '../../assets/car-doctor-h.jpg'
import Link from 'next/link';

const CarDoctor = () => {
    return (
        <div>
      <div>
            <Link href={'https://car-doctor-2b00a.web.app/'} target='_blank'><Image className='w-full lg:h-[600px]' src={Car} width={700} alt='Car'/></Link>

            <div className='lg:px-40 p-5 py-5'>
          <div>
            <div><h3 className=' text-slate-900 text-xl font-bold'>Projektname: </h3></div>
            <div><h2 className="text-slate-900 text-xl  ">
            Car Doctor</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-xl font-bold mt-3">Projektdetails:</h3>
            <div className="text-slate-900 mt-3 text-justify text-base">
            Car Doctor ist eine Online-Plattform, die Autoreparaturdienstleistungen für Kunden anbietet. Kunden können einen Service buchen, indem sie den Servicenamen und das gewünschte Datum angeben. Im Shop-Bereich können Kunden sich über verfügbare Produkte informieren und kaufen. Zusätzlich gibt es eine Kontaktseite, um die Kommunikation mit dem Unternehmen zu erleichtern.
<h1 className='text-xl font-bold py-3'>Hauptmerkmale:</h1>

<h3 className='ml-5 font-bold'>Registrierung, Anmeldung und Profile:</h3> 
<ul className='list-disc ml-10'>
  <li>
  Benutzer können Konten erstellen, d.h. ein Profil erstellen mit E-Mail, Namen und Passwort
  </li>
  <li>
  Registrierte Benutzer können sich mit ihren Anmeldedaten einloggen
  </li>
  <li>
  Anmeldung mit Google-Popup-Funktion
  </li>
  <li>
  Sicherung mit JWT (Speichern des Tokens in einem Browser-Cookie)
  </li>
</ul>

<h3 className='ml-5 font-bold'>Artikelanzeige:</h3>  
<ul className='list-disc ml-10'>
  <li>
  Präsentation verschiedener Produkte und Servicedienstleistungen
  </li>
</ul>
<h3 className='ml-5 font-bold'>Responsive Design:</h3>

<ul className='list-disc ml-10'>
  <li>
  Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones
  </li>
</ul>
<h3 className='ml-5 font-bold'>
  Sicherheit:
</h3>
<ul className='list-disc ml-10'>
  <li>
  Die Website ist durch die Verwendung von JSON Web Token (JWT) gesichert, um eine sichere Benutzererfahrung zu gewährleisten 
  </li>
</ul>
<h3 className='ml-5 font-bold'>Datenbank</h3>
<ul className='list-disc ml-10'>
  <li>
  MongoDB wird genutzt, um alle relevanten Daten zu speichern und eine effiziente Datenverwaltung sicherzustellen
  </li>
</ul>
            </div>
            <h4 className='font-bold text-xl py-3'>Technologien, die ich für diese Plattform verwendet habe:</h4>
            <div className='grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
            
                      <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>React</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
            <h2 className='border border-xl border-black'>Firebase</h2>
            <h2 className='border border-xl border-black'>JWT</h2>
            
          </div>
          </div>
        </div>
        </div>
    );
};

export default CarDoctor;