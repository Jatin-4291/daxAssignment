export default function SubmitButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-teal-700 text-white py-3 px-20 rounded-xl hover:bg-teal-800"
    >
      {label}
    </button>
  );
}
