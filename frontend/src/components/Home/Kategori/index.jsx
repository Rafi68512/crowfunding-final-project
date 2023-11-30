// eslint-disable-next-line react/prop-types
const Kategori = ({ icon, title }) => {
  return (
    <div className="h-12 flex items-center gap-2 border-slate-300 border w-fit p-3 rounded-lg">
      <img src={icon} alt="icon" className="w-10 " />
      <p className="text-lg font-bold">{title}</p>
    </div>
  );
};

export default Kategori;
