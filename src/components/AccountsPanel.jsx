import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileModal from "./ProfileModal";

export default function AccountsPanel() {

  const [openModal, setOpenModal] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "India"
  });

  return (
    <>
      <div className="profile-content">

        <motion.div
          className="profile-form glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h2>Account Information</h2>

          <div className="form-grid">

            <div>
              <label>Full Name</label>
              <input className="input" value={profile.name} readOnly />
            </div>

            <div>
              <label>Email</label>
              <input className="input" value={profile.email} readOnly />
            </div>

          </div>

          <div>
            <label>Address</label>
            <input className="input" value={profile.address} readOnly />
          </div>

          <div className="form-grid">

            <div>
              <label>City</label>
              <input className="input" value={profile.city} readOnly />
            </div>

            <div>
              <label>State</label>

              <select className="input" value={profile.state} disabled>
                <option value="">Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>

            </div>

          </div>

          <div className="form-grid">

            <div>
              <label>Zip Code</label>
              <input className="input" value={profile.zip} readOnly />
            </div>

            <div>
              <label>Country</label>
              <input className="input" value={profile.country} readOnly />
            </div>

          </div>

          <button
            className="profile-save-btn"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            Update Information
          </button>

        </motion.div>

      </div>

      <AnimatePresence>
        {openModal && (
          <ProfileModal
            profile={profile}
            setProfile={setProfile}
            onClose={() => setOpenModal(false)}
          />
        )}
      </AnimatePresence>

    </>
  );
}