import { Typography, Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { createProyek } from "../api/api";
import NavigationBar from "../components/Home/NavigationBar";

const CreateProyek = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [targetDana, setTargetDana] = useState("");
  const [image, setImage] = useState();

  const handleCreateProyek = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", judul);
    data.append("deskripsi", deskripsi);
    data.append("goal", targetDana);
    data.append("image", image);
    console.log(data);

    const res = await createProyek(data);
    console.log(res);
  };

  const judulOnChange = (e) => {
    setJudul(e.target.value);
  };

  const deskripsiOnChange = (e) => {
    setDeskripsi(e.target.value);
  };
  const targetDanaOnChange = (e) => {
    setTargetDana(e.target.value);
  };
  const imageOnChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  return (
    <>
      <NavigationBar />
      <div className="w-[500px] mx-auto mt-10">
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Judul Donasi
        </Typography>
        <Input
          color="teal"
          size="lg"
          labelProps={{
            className: "before:content-none ",
          }}
          value={judul}
          onChange={judulOnChange}
        />
        <Typography variant="h6" color="blue-gray" className="my-3">
          Deskripsi
        </Typography>
        <Input
          color="teal"
          size="lg"
          labelProps={{
            className: "before:content-none ",
          }}
          value={deskripsi}
          onChange={deskripsiOnChange}
        />
        <Typography variant="h6" color="blue-gray" className="my-3">
          Target Dana
        </Typography>
        <Input
          type="number"
          color="teal"
          size="lg"
          labelProps={{
            className: "before:content-none ",
          }}
          value={targetDana}
          onChange={targetDanaOnChange}
        />
        <Typography variant="h6" color="blue-gray" className="my-3">
          Image/banner donasi
        </Typography>
        {/* <Input
          type="file"
          color="teal"
          size="lg"
          labelProps={{
            className: "before:content-none ",
          }}
          value={image}
          onChange={imageOnChange}
        /> */}
        <input type="file" onChange={imageOnChange} />
        <Button color="teal" className="w-full mt-5" onClick={handleCreateProyek}>
          Buat Donasi
        </Button>
      </div>
    </>
  );
};

export default CreateProyek;
