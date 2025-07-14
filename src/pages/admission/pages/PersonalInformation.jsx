import React from 'react'
import AdmissionHeaders from '../components/headers/admissionHeaders'
import { Link } from 'react-router-dom'

const PersonalInformation = () => {
    return (
        <div>
            <AdmissionHeaders />
            <section className="flex flex-col gap-4 justify-center items-center py-16">
                <form className="w-full max-w-4xl border border-gray-200 rounded-lg p-10 bg-white shadow-md space-y-6">

                    <h2 className="text-2xl font-semibold text-center text-blue-900">Personal Information</h2>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Surname</label>
                            <input type="text" className="mt-1 block w-full border rounded p-2 border-red-500" placeholder="Enter surname" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Given name</label>
                            <input type="text" className="mt-1 block w-full border rounded p-2 border-red-500" placeholder="Enter given name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Middle name</label>
                            <input type="text" className="mt-1 block w-full border rounded p-2" placeholder="(optional)" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Suffix</label>
                            <input type="text" className="mt-1 block w-full border rounded p-2" placeholder="Jr. / III" />
                        </div>
                    </div>

                    {/* Date of Birth and Place of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" className="mt-1 block w-full border rounded p-2 border-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Place of Birth</label>
                            <input type="text" className="mt-1 block w-full border rounded p-2 border-red-500" placeholder="City/Province" />
                        </div>
                    </div>

                    {/* Gender, Civil Status, Indigenous, Disability */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <SelectWithLabel label="Gender" required />
                        <SelectWithLabel label="Civil Status" required />
                        <SelectWithLabel label="Indigenous Community" />
                        <SelectWithLabel label="PWD" />
                    </div>

                    {/* Address Section */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">House No., Street, Barangay</label>
                        <input type="text" className="w-full border rounded p-2 border-red-500" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SelectWithLabel label="Province" required />
                        <SelectWithLabel label="City" required />
                        <SelectWithLabel label="Barangay" required />
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SelectWithLabel label="Nationality" />
                        <SelectWithLabel label="Religion" />
                        <SelectWithLabel label="Ethnic Affiliation" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InputWithLabel label="Telephone Number" />
                        <InputWithLabel label="Mobile Number" required />
                        <InputWithLabel label="Email" type="email" required />
                    </div>

                    {/* Yes/No Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SelectWithLabel label="Are you a member of 4Ps?" />
                        <SelectWithLabel label="Vaccination Status" />
                        <SelectWithLabel label="IP / Indigenous group?" />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between pt-4 w-full">
                        <Link to={"/admission"} className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">Previous</Link>
                        <Link to={"/"} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

// ✅ Rename to PascalCase so React treats them as components
const InputWithLabel = ({ label, type = "text", required = false }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input type={type} className={`mt-1 block w-full border rounded p-2 ${required ? 'border-red-500' : 'border-gray-300'}`} />
    </div>
)

const SelectWithLabel = ({ label, required = false }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select className={`mt-1 block w-full border rounded p-2 bg-white ${required ? 'border-red-500' : 'border-gray-300'}`}>
            <option value="">-- Please select --</option>
            {/* TODO: Add actual options */}
        </select>
    </div>
)

export default PersonalInformation
