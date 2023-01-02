import css from './Modal.module.css';

export const Modal = ({ largeImage, description, closeModal }) => (
  <div className={css.overlay} onClick={closeModal}>
    <div className={css.modal}>
      <button type="button" className="modal-close-btn"></button>
      <img src={largeImage} alt={description} />
    </div>
  </div>
);
