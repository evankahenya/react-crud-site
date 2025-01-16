import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const AddJobPage = ({addJobSubmit}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under 7M KES');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    // Collect data and handle form submission here
    const newJob = {
        title,
        type,
        location,
        description,
        salary,
        company:{
            name:companyName,
            description:companyDescription,
            contactEmail,
            contactPhone,
        }
    };
    addJobSubmit(newJob);
    toast.success('Job added successfully!')
    return navigate('/jobs');

    
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Job Type
            </label>
            <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={type} // Control the value using state
                onChange={(e) => setType(e.target.value)}
            >
                <option value="" disabled>
                Select job type
                </option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
            </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., Software Engineer"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add job duties, expectations, requirements, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

        <div className="mb-4">
        <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
            Salary
        </label>
        <select
            id="salary"
            name="salary"
            className="border rounded w-full py-2 px-3"
            value={salary} // Control the value using state
            onChange={(e) => setSalary(e.target.value)}
        >
            <option value="" disabled>
            Select salary ranges
            </option>
            <option value="Under 7M KES">Under 7M KES</option>
            <option value="7M - 8.4M KES">7M - 8.4M KES</option>
            <option value="8.4M - 9.8M KES">8.4M - 9.8M KES</option>
            <option value="9.8M - 11.2M KES">9.8M - 11.2M KES</option>
            <option value="11.2M - 12.6M KES">11.2M - 12.6M KES</option>
            <option value="12.6M - 14M KES">12.6M - 14M KES</option>
            <option value="14M - 17.5M KES">14M - 17.5M KES</option>
            <option value="17.5M - 21M KES">17.5M - 21M KES</option>
            <option value="21M - 24.5M KES">21M - 24.5M KES</option>
            <option value="24.5M - 28M KES">24.5M - 28M KES</option>
            <option value="Over 28M KES">Over 28M KES</option>

        </select>
        </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
