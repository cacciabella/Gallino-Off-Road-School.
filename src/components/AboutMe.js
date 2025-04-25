import React,{useState} from "react";


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
    <div className="AboutUs"  id="AboutMe" ref={ref}>
      <img src="/img/photo_presentazione.jpg" className="img-thumbnail" alt="Gruppo di motociclisti della Gallino Off-Road School" onClick={openModal} />
      <div className="text_AboutUs">
        <h4>Ritorna la Gallino Off-Road School di Giuseppe Gallino!</h4>
        <p>Dopo anni di collaborazioni con gruppi sportivi, in cui Giuseppe Gallino ha condiviso la sua esperienza per formare nuovi enduristi, nasce finalmente la <strong>Gallino Off-Road School</strong>.</p>
        <h4>Un’Esperienza Trentennale al Tuo Servizio</h4>
        <p>L’obiettivo di Giuseppe Gallino è mettere a disposizione la sua esperienza di oltre 30 anni nel fuoristrada, con numerosi titoli mondiali e italiani (consulta il suo curriculum), per chi desidera avvicinarsi o perfezionare la propria tecnica di guida off-road.</p>
       
        </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span> {/* Pulsante di chiusura */}
            <img
             src="/img/photo_presentazione.jpg"
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
