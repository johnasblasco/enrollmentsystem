import React from 'react'
import SchoolCampus from './components/dropdowns/SchoolCampus'
import ApplicationType from './components/dropdowns/ApplicationType'
import AcademicYear from './components/dropdowns/AcademicYear'
import SeparatorOne from './components/separator/separatorOne'
import AcademicProgram from './components/dropdowns/AcademicProgram'
import { Link } from 'react-router-dom'
import AdmissionHeaders from './components/headers/admissionHeaders'

const AdmissionHome = () => {
    return (
        <div>
            <AdmissionHeaders />
            <section className='flex flex-col gap-4 justify-center items-center h-screen'>

                <form className='flex flex-col gap-8 justify-center items-center border-2 w-fit py-10 md:p-20 '>

                    <div className="grid grid-cols-1 gap-4">
                        <SchoolCampus />
                        <ApplicationType />
                        <AcademicYear />
                        <SeparatorOne />
                        <AcademicProgram />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between pt-4 w-full">
                        <Link to={"/"} className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">Previous</Link>
                        <Link to={"/admission/personal-information"} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</Link>
                    </div>
                </form>

            </section>
        </div>
    )
}

export default AdmissionHome
