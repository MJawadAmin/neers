"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username_random_123: "",
    useremail_hidden_abc: "",
    userpassword_secret: "",
    userconfirmPassword_hidden: "",
    userphone_number_987: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.querySelectorAll("input").forEach((input) => {
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("spellcheck", "false");
      input.setAttribute("autocapitalize", "none");
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, userphone_number_987: value });
    setErrors({ ...errors, userphone_number_987: "" });
  };

  const handleFocus = (e) => {
    setTimeout(() => e.target.removeAttribute("readOnly"), 1);
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        validationErrors[key] = "This field is required";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-[531.5] text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Sign Up
      </h3>
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] rounded-[10px] overflow-hidden">
        <div className="w-full md:w-[50.3%] flex items-center justify-center bg-white p-6 mt-6 ">
          <div className="w-[80%] max-w-[500px] ml-[66px] ">
            <form autoComplete="off" onSubmit={handleSubmit}>
              {[{ label: "User Name", name: "username_random_123", type: "text", placeholder: "Type User Name" },
                { label: "Email Address", name: "useremail_hidden_abc", type: "email", placeholder: "Example@gmail.com" }]
                .map(({ label, name, type, placeholder }) => (
                  <div key={name} className="mb-5">
                    <label className="block text-xs lg:text-[16px]">
                      <span className="text-red-500">*</span>{label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      className="px-2.5 py-1 w-[470px] h-[37px] border border-gray-300 rounded"
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      readOnly
                      onFocus={handleFocus}
                    />
                    {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                  </div>
                ))}

              <div className="mb-4">
                <label className="block">
                  <span className="text-red-500">*</span>Phone Number
                </label>
                <PhoneInput
                  country="pk"
                  value={formData.userphone_number_987}
                  onChange={handlePhoneChange}
                  containerClass="w-full"
                  inputClass="!w-[470px]  !h-[37px]  !border !border-gray-300 !rounded"
                />
                {errors.userphone_number_987 && <p className="text-red-500 text-sm">{errors.userphone_number_987}</p>}
              </div>

              {[{ name: "userpassword_secret", label: "Password", state: showPassword, toggle: togglePassword },
                { name: "userconfirmPassword_hidden", label: "Confirm Password", state: showConfirmPassword, toggle: toggleConfirmPassword }]
                .map(({ name, label, state, toggle }) => (
                  <div key={name} className="mb-4 relative">
                    <label className="block">
                      <span className="text-red-500">*</span>{label}
                    </label>
                    <div className="relative">
                      <input
                        type={state ? "text" : "password"}
                        name={name}
                        className="px-3 py-1 w-[470px]  h-[37px] border border-gray-300 rounded"
                        placeholder="Please use characters & symbols"
                        value={formData[name]}
                        onChange={handleChange}
                        readOnly
                        onFocus={handleFocus}
                      />
                      <button type="button" className="absolute right-10 top-3" onClick={toggle}>
                        {state ? <Eye size={20} /> : <EyeOff size={20} />}
                      </button>
                    </div>
                    {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                  </div>
                ))}

              <button type="submit" className="w-[470px] mt-3.5 h-[37px] bg-[#f76300] text-white rounded-sm py-1.5">
                Next
              </button>
              <Link href="/signin">
                <span className="text-orange-500 hover:underline flex justify-end mr-6 font-[450px] text-[12.5px] mt-0.5">Already a member?</span>
              </Link>
              <div className="shadow-[4px_4px_6px_-2px_rgba(0,0,0,0.4)] py-1 bg-[#fafafa] w-[470px]"><p className="text-center mt-2 text-sm">In case of any problem contact us on <span className="text-orange-500" onClick={() => window.location.href = "tel:0512272649"}>.(051) 2272649</span></p>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-[53%] ml-9 h-64 md:h-auto relative">
          <Image src="/login.webp" alt="background" className="hidden md:block w-[47vw] h-[94vh]" width={450} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Register;