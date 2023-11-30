import { Typography, Input, Button } from "@material-tailwind/react";
import NavigationBar from "../components/Home/NavigationBar";

const CreateProyek = () => {
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
        />
        <Typography variant="h6" color="blue-gray" className="my-3">
          Image/banner donasi
        </Typography>
        <Input
          type="file"
          color="teal"
          size="lg"
          labelProps={{
            className: "before:content-none ",
          }}
        />
        <Button color="teal" className="w-full mt-5">
          Buat Donasi
        </Button>
      </div>
    </>
  );
};

export default CreateProyek;
