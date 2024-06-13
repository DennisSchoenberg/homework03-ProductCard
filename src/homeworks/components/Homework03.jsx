import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

function Homework03() {
  return (
    <div className="product-card-container">
      <ProductCard 
        name="Product 1"
        image="https://tehnodar.dp.ua/images/blog/9131/marketing.jpg"
        description="Du möchtest deine Workflows optimieren, 
        die Sichtbarkeit deiner Produkte erhöhen und die Performance deiner Maßnahmen steigern? 
        Entscheide dich für unsere vielfach erprobten Lösungsstrecken entlang der gesamten digitalen Wertschöpfungskette. 
        Profitiere von passenden KI-Tools für deine Unternehmensziele!"
        isAvailable={true}
      />
      <ProductCard 
        name="Product 2"
        image="https://i2.imageban.ru/out/2020/07/12/67809400703089118e35d720cfef6836.jpg"
        description="Befreie dich und dein Team von repetitiver Textarbeit und steigere deine Effizienz
        und Reaktionsfähigkeit durch die Integration von textengine.io Rewrite in deine bestehenden Content-Workflows. 
        Egal, ob du die textengine.io bereits nutzt oder nicht: 
        Als eigenständiges Feature ist textengine.io Rewrite der Effizienz-Booster für Content-Prozesse in nationalen,
         lokalen und Fachredaktionen. 
        Reduziere Aufwand und lass deine Texte in Echtzeit und kanalübergreifend 
        für verschiedene Zielgruppen umschreiben."
        isAvailable={false}
      />
      <ProductCard 
        name="Product 3"
        image="https://chita-brita.ru/wp-content/uploads/2022/08/cab33973d5a89f5bf06f4fab1c9cea44.jpeg"
        description="Zahlreiche Unternehmen vertrauen auf unsere Lösungen, wenn es um das automatisierte Verstehen 
        und Generieren von Content geht. Das Ziel: Die Entwicklung innovativer, effizienter und skalierbarer 
        Produkte im Bereich Natural Language Processing auf der Basis von Künstlicher Intelligenz. Erfahre hier,
         wie unsere KI-Anwendungen branchenübergreifend Kundinnen und Kunden überzeugt haben."
        isAvailable={true}
      />
    </div>
  );
}

export default Homework03;