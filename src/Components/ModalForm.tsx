interface ModalFormProps {
  onClose: () => void;
}

const ModalForm = ({ onClose }: ModalFormProps) => {
  return (
    <div className="fixed flex items-center justify-center z-10 left-0 top-0 w-full h-full bg-black bg-opacity-60">
      <div className="bg-white rounded-lg w-80 md:w-96">
        <form className="flex flex-col p-4">
          <span
            className="absolute top-0 right-0 p-10 text-gray-400 hover:text-custom-gold cursor-pointer text-6xl"
            onClick={onClose}
          >
            &times;
          </span>
          <label className="text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="name"
            placeholder="Title"
            className="border-2 border-gray-300 rounded-md py-2 px-3 mb-3"
          />
          <label className="text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            placeholder="Content of the post here"
            className="border-2 border-gray-300 rounded-md py-2 px-3 mb-3 resize-none"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
