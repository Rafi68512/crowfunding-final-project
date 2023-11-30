import NavigationBar from "../components/Home/NavigationBar";
import ProyekCard from "../components/Home/ProyekCard";

const ListProyek = () => {
  return (
    <>
      <NavigationBar />
      <h1 className="text-3xl font-bold mx-5 mt-10">List Donasi</h1>
      <div className="flex flex-wrap gap-5 mx-5 mt-10">
        <ProyekCard />
        <ProyekCard />
        <ProyekCard />
        <ProyekCard />
        <ProyekCard />
        <ProyekCard />
        <ProyekCard />
      </div>
    </>
  );
};

export default ListProyek;
