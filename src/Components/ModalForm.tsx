import "../Styles/ModalStyles.css";

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm = ({ onClose }: ModalFormProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <form className="form-modal">
          <label>Title</label>
          <input
            type="text"
            name="name"
            placeholder="Title"
            className="input-text"
          />
          <label>Content</label>
          <textarea
            placeholder="Content of the post here"
            className="textarea"
          ></textarea>
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
