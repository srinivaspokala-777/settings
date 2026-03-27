import { motion } from "framer-motion";
import { useState } from "react";

export default function ProfileModal({ profile, setProfile, onClose }) {

  const [form, setForm] = useState(profile);
  const [imagePreview, setImagePreview] = useState("user.png");

  const states = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
    "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal"
  ];

  const countries = [
    "India","United States","United Kingdom","Canada","Australia",
    "Germany","France","Italy","Spain","Netherlands","Switzerland",
    "Japan","China","South Korea","Singapore","Malaysia","Indonesia",
    "Thailand","United Arab Emirates","Saudi Arabia","Turkey",
    "South Africa","Brazil","Mexico","Argentina","New Zealand"
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfile(form);
    onClose();
  };

  return (

    <motion.div
      className="modal-backdrop"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >

      <motion.div
        className="modal-card glass"
        initial={{scale:0.85}}
        animate={{scale:1}}
      >

        <h2>Edit Profile</h2>

        {/* PROFILE IMAGE */}

        <div className="modal-photo">

          <img
            src={imagePreview}
            alt="profile"
            className="modal-avatar"
          />

          <label className="upload-btn">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />
          </label>

        </div>

        {/* NAME */}

        <input
          className="input"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        {/* EMAIL */}

        <input
          className="input"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {/* ADDRESS */}

        <input
          className="input"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        {/* CITY */}

        <input
          className="input"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />

        {/* STATE */}

        <select
          className="input"
          name="state"
          value={form.state}
          onChange={handleChange}
        >

          <option value="">Select State</option>

          {states.map((state,index)=>(
            <option key={index}>{state}</option>
          ))}

        </select>

        {/* ZIP */}

        <input
          className="input"
          name="zip"
          placeholder="Zip Code"
          value={form.zip}
          onChange={handleChange}
        />

        {/* COUNTRY */}

        <select
          className="input"
          name="country"
          value={form.country || "India"}
          onChange={handleChange}
        >

          {countries.map((country,index)=>(
            <option key={index}>{country}</option>
          ))}

        </select>

        {/* ACTION BUTTONS */}

        <div className="modal-actions">

          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="profile-save-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>

        </div>

      </motion.div>

    </motion.div>
  );
}