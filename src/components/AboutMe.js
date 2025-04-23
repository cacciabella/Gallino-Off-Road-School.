import React,{useState} from "react";
import '../components/AboutUs.css';
import ImageAboutUs from '../img/photo_presentazione.jpg';
const ModalImage = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Enlarged view" />
      </div>
    </div>
  );
};
const AboutMe = React.forwardRef((props, ref) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = () => {
     // Usa l'immagine come URL per la modale
    setIsModalOpen(true);
  };

  // Funzione per chiudere la modale
  const closeModal = () => {
    setIsModalOpen(false);
  
  };



  return (
    <div className="AboutUs"  id="AboutUs" ref={ref}>
      <img src={ImageAboutUs} className="img-thumbnail" alt="Gruppo di motociclisti della Gallino Off-Road School" onClick={openModal} />
      <div className="text_AboutUs">
        <h4>Ritorna la Gallino Off-Road School di Giuseppe Gallino!</h4>
        <p>Dopo anni di collaborazioni con gruppi sportivi, in cui Giuseppe Gallino ha condiviso la sua esperienza per formare nuovi enduristi, nasce finalmente la <strong>Gallino Off-Road School</strong>.</p>
        <h4>Un’Esperienza Trentennale al Tuo Servizio</h4>
        <p>L’obiettivo di Giuseppe Gallino è mettere a disposizione la sua esperienza di oltre 30 anni nel fuoristrada, con numerosi titoli mondiali e italiani (consulta il suo curriculum), per chi desidera avvicinarsi o perfezionare la propria tecnica di guida off-road.</p>
        <h4>L’Off-Road: Una Passione in Crescita</h4>
        <p>Negli ultimi anni, il settore dell’off-road ha visto un notevole incremento. Sempre più motociclisti, con moto dual e maxienduro, stanno abbandonando l’asfalto per esplorare strade sterrate, vivendo le due ruote in modo completamente nuovo. Per divertirsi in totale sicurezza su terreni impervi, però, è fondamentale avere una solida base di guida.</p>
        <h4>Impara con la Gallino Off-Road School</h4>
        <p>La Gallino Off-Road School offre corsi per tutti i livelli: dai neofiti a chi vuole migliorare la propria tecnica. È una scuola “vecchia maniera”, dove contano la pratica, le ore passate in moto e i consigli diretti. Niente analisi di video interminabili: qui la differenza la fanno la costanza, l’impegno e l’esperienza sul campo.</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span> {/* Pulsante di chiusura */}
            <img
              src={ImageAboutUs}
              className="modal-image"
              alt="Immagine ingrandita"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default AboutMe;
