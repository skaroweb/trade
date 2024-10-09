import React, { useEffect, useState } from "react";
import "./index.css";

function Sidebar() {
  const [countryData, setCountryData] = useState({
    callingCode: "",
    countryName: "",
    countryCode: "",
  });
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    phone: "",
    promotions: false,
    terms: false,
  });

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json");
        const data = await response.json();
        const callingCode = data.country_calling_code || ""; // Fallback if no code is found
        const countryName = data.country_name || ""; // Fallback if no country name is found
        const countryCode = data.country || ""; // Get the ISO country code (e.g., "IN")
        setCountryData({ callingCode, countryName, countryCode });
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Concatenate the calling code with the phone number
    const fullPhoneNumber = `${countryData.callingCode}${" "}${formData.phone}`;

    const payload = {
      ...formData,
      phone: fullPhoneNumber, // Send the concatenated phone number
      phonecc: countryData.callingCode,
      countryName: countryData.countryName,
      country_code: countryData.countryCode, // Add the country code to the payload
    };

    try {
      // console.log(payload);
      const token = "wizard_admin_token"; // Replace with your actual token
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the Bearer token
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <aside className="sidebar">
      <div
        id="mc4wp_form_widget-28"
        className="widget widget_mc4wp_form_widget"
      >
        <div className="title">SUSCRÍBETE AHORA</div>
        <form
          id="mc4wp-form-1"
          className="mc4wp-form mc4wp-form-27048"
          onSubmit={handleSubmit}
        >
          <div className="mc4wp-form-fields">
            <p>PROMOCIONES EXCLUSIVAS</p>
            <p>¡Es gratis y rápido!</p>
            <p>
              <input
                aria-label="Nombre"
                type="text"
                name="Firstname"
                placeholder="Firstname"
                required
                value={formData.Firstname}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                aria-label="Nombre"
                type="text"
                name="Lastname"
                placeholder="Lastname"
                required
                value={formData.Lastname}
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                aria-label="Email"
                type="email"
                name="Email"
                placeholder="email"
                required
                value={formData.Email}
                onChange={handleChange}
              />
            </p>
            <div className="country_code_phone">
              <input
                className="form__input--code"
                type="text"
                name="phonecc"
                placeholder="+1"
                value={countryData.callingCode}
                readOnly
              />
              <input
                className="form__input--phone"
                type="tel"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <p>
              <input
                aria-label="Suscribirme"
                type="submit"
                value="¡Me apunto!"
              />
            </p>
            <p>
              <label>
                <input
                  aria-label="promotions"
                  name="promotions"
                  type="checkbox"
                  value="1"
                  checked={formData.promotions}
                  onChange={handleChange}
                />
                I would like to receive product updates, promotions, special
                offers, event details, news, and services announcements by
                E-mail and SMS.
              </label>
            </p>
            <p>
              <label>
                <input
                  aria-label="terms"
                  name="terms"
                  type="checkbox"
                  value="1"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                I am over 18 & agree to the{" "}
                <a href="#" target="_blank">
                  Terms &amp; Conditions
                </a>
              </label>
            </p>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
