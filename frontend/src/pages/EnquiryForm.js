import React from 'react';
import '../styles/enquiryform.css'

function EnquiryForm() {
  return (
    <>
        <div className="enquirypage">
            <form className='enquiryform'>
                <div className='header'>
                    <h1>COURSE ENQUIRY FORM</h1>
                </div>
                <div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Course Information</h2>
                            <table>
                                <tr>
                                    <td className="tabletitle">Course of Interest</td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Desired Start Date</td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Mode of Training</td>
                                    <td>
                                        <p><input type="radio"></input> In-person</p>
                                        <p><input type="radio"></input> Online</p>
                                        <p><input type="radio"></input> Blended</p>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Preferred Method of Communication</h2>
                            <table>
                                <tr>
                                    <td className="tabletitle">Preferred Contact Method</td>
                                    <td>
                                        <p><input type="checkbox"></input> WhatsApp</p>
                                        <p><input type="checkbox"></input> Email</p>
                                        <p><input type="checkbox"></input> Phone</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Preferred Contact Time</td>
                                    <td>
                                        <p><input type="checkbox"></input> Morning</p>
                                        <p><input type="checkbox"></input> Afternoon</p>
                                        <p><input type="checkbox"></input> Evening</p>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Personal Information</h2>
                            <table>
                                <tr>
                                    <td className="tabletitle">Full Name</td>
                                    <td><input type="text"></input></td>
                                    <td className="tabletitle">Gender</td>
                                    <td>
                                        <p><input type="checkbox"></input> M</p>
                                        <p><input type="checkbox"></input> F</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Father's/Guardian Name</td>
                                    <td><input type="text"></input></td>
                                    <td className="tabletitle">Date of Birth</td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Email Address</td>
                                    <td><input type="text"></input></td>
                                    <td className="tabletitle">Mobile No.</td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Address Information</h2>
                                <tr>
                                    <td className="tabletitle" >Present Address</td>
                                </tr>
                            <table>
                                <tr>
                                    <td colspan={6}><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td colspan={6}><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">City</td>
                                    <td><input type="text"></input></td>
                                    <td className="tabletitle">State</td>
                                    <td><input type="text"></input></td>
                                    <td className="tabletitle">Pin Code</td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Educational Background</h2>
                            <table>
                                <tr className="tabletitle">
                                    <td>Educational Qualification</td>
                                    <td>College</td>
                                    <td>Specialization</td>
                                    <td>Stream</td>
                                    <td>Year of Passing</td>
                                    <td>Percentage</td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Post Graduation</td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">Graduation</td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">10 + 2</td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2 >Work Experience (If Applicable)</h2>
                            <table>
                                <tr className="tabletitle">
                                    <td>Name of the Company</td>
                                    <td>Designation</td>
                                    <td>Tenure</td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div>
                        <ul className="enquirycategory">
                            <h2>Additional Information</h2>
                            <table>
                                <tr>
                                    <td className="tabletitle">How did you hear about Veda IT?</td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td className="tabletitle">What are your specific learning goals or objectives?</td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </table>
                        </ul>
                    </div>
                    <div className='enquirysubmit'>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default EnquiryForm