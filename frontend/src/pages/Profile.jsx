import "../App.css";
// src/App.js
import { useState } from "react";

function Profile() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Menyembunyikan nama file dari input
    const input = document.getElementById("upload-input");
    if (input) {
      input.value = "";
    }
  };

  const handleImageUpload = () => {
    // ... (fungsi pengunggahan gambar)
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      {/* Card */}
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
        {/* Pratinjau Gambar */}
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Profile Preview" className="profile-image" />
        ) : (
          <div className="profile-image-placeholder"></div>
        )}
        {/* Tombol Unggah Gambar */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="upload-input"
          id="upload-input"
        />

        {/* Label dan Input Nama */}
        <label htmlFor="name" className="name-label">
          Nama
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="name-input"
        />

        {/* Label dan Input email*/}
        <label htmlFor="email" className="email-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={handleemailChange}
          className="email-input"
        />

        {/* Label dan Input Password */}
        <label htmlFor="Password" className="Password-label">
          Password
        </label>
        <input
          type="text"
          id="Password"
          placeholder="Your Password"
          value={Password}
          onChange={handlePasswordChange}
          className="Password-input"
        />
        <button onClick={handleImageUpload} className="upload-button">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Profile;
