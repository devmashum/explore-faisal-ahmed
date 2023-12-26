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
            <div><h3 className=' text-slate-900 text-xl lg:text-2xl'>Projekttitel: </h3></div>
            <div><h2 className="text-slate-900 text-xl lg:text-2xl font-bold ">
            Car Doctor</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Projektdetails:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
            Ich befinde mich derzeit im Prozess des Lernens von Next.js und Material-UI, und als Teil dieser Erkundung habe ich ein Online-Zeitungsportal mit Next.js und Material-UI entwickelt, wobei MongoDB als Datenbank dient. <br />
<br/>
<b>Hauptmerkmale:</b>
<br />
<br />
<div>
<b>Artikelanzeige:</b>
<br />
Präsentation von Nachrichtenartikeln mit Funktionen wie Überschriften, Bildern und Zusammenfassungen.
<br />
<b>Kategorienavigation:</b> <br />

Organisation von Nachrichtenartikeln in Kategorien für einfache Navigation und Benutzerfreundlichkeit.
<br />
<b>Responsive Design:</b> <br />
Gewährleistung einer nahtlosen Benutzererfahrung auf verschiedenen Geräten, einschließlich Desktops, Tablets und Smartphones. <br />
<b>Dynamisches Routing:</b> <br />
Nutzung von Next.js dynamischem Routing für effiziente Bearbeitung unterschiedlicher Seiten und Inhalte. <br />
<b>Neueste Nachrichten-Sektion:</b> Präsentation der neuesten und trendigen Nachrichten prominent auf der Startseite.
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
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 text-center">
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
        </div>
    );
};

export default DragonNews;