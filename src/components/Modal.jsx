export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-xl shadow-lg w-[90%] max-w-md">
        {children}
        <div className="text-right mt-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-700 text-white rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
