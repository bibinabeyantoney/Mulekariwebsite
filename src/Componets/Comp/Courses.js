import React from 'react'
import Nav from './Nav'
import "../Css/Courses.css"
function Courses() {
  return (
    <>
    <Nav/>
    <section className="courses-section">
    <div className='courses-container'>
        <div className='pte'>
            <div className='pte-image'>
                <img src={require("../Images/pte.png")} alt="About us" />
            </div>
            <div className='pte-official-site'>
                <a href='https://www.googleadservices.com/pagead/aclk?sa=L&pf=1&ai=DChsSEwiA8pu07KePAxU6qmYCHSH1Jk0YACICCAEQABoCc20&co=1&ase=2&gclid=CjwKCAjwk7DFBhBAEiwAeYbJsbx0pMLShQVJPq5ocmhJZl-V6bnlkGo-eGhOAeTT_To5oZsL6gFH8xoCcgcQAvD_BwE&ohost=www.google.com&cid=CAESVeD2Q8lXR_EWMDZ5n9qS1pPr9m0WjNEyMuhSxk4WGLOynNee4v1NpHXTMFgxyWdojiI4opu6QpF0RN2-J4mMjrCeaFkAxtLkb1HvKMUdI-JKQRjE4wM&category=acrcp_v1_40&sig=AOD64_3dS7pIwBzBeP1AQZ-t5Lahh30zaQ&q&nis=4&adurl=https://www.pearsonpte.com/collegedunia?utm_source%3DAffiliate_Website%26utm_medium%3DAffiliate%26utm_campaign%3DCollegeduniaPTE_Banner_Ad_generic_Discover_Affiliate_Website_India%26utm_content%3DCollegedunia%26gad_source%3D1&ved=2ahUKEwjp95a07KePAxVmdmwGHYXGOUgQ0Qx6BAgTEAE'>visit official site</a>
            </div>
            <div className='pte-description'>
                <p>The PTE, or Pearson Test of English, is a computer-based English language 
                    proficiency exam for non-native English speakers who want to study, work, 
                    or immigrate to English-speaking countries. It is widely accepted by 
                    universities, colleges, and governments worldwide for visa and admissions 
                    applications.
                </p>
            </div>
        </div>
        <div className='oet'>
            <div className='oet-image'>
                <img src={require("../Images/oet.png")}></img>
            </div>
            <div className='oet-official-site'>
                <a href='https://www.googleadservices.com/pagead/aclk?sa=L&pf=1&ai=DChsSEwi6xrru7qePAxVVi0sFHaROA-oYACICCAEQABoCc2Y&co=1&ase=2&gclid=CjwKCAjwk7DFBhBAEiwAeYbJsdgJkhFwBE6wyMe0C4qEG21WYQXOfSprmpPCT9UUEFlq8QDvGMrQLxoCD_8QAvD_BwE&ohost=www.google.com&cid=CAESVeD2KCpWKviotFPEtyje_UEe3_8aXqcHrPsop2zHLClAUT_6c68K6Z5QKIwZgOKTPh1N3O9DGzCtMMqQuS5bE2Y9_J_zmCL9z4cY4306MK1CXvUg1kE&category=acrcp_v1_40&sig=AOD64_3ap_MZ-tTWTEInszQfJ5wAFm4gqA&q&nis=4&adurl=https://oet.com/prove-your-english?utm_source%3DTI%26utm_medium%3DCPC%26utm_campaign%3D2023%26?utm_source%3DTI%26utm_medium%3DCPC%26utm_campaign%3D2025%26gad_source%3D1%26gad_campaignid%3D22381360006%26gbraid%3D0AAAAA_KNLaohJlForBvRThIUTmF1YSUFN%26gclid%3DCjwKCAjwk7DFBhBAEiwAeYbJsdgJkhFwBE6wyMe0C4qEG21WYQXOfSprmpPCT9UUEFlq8QDvGMrQLxoCD_8QAvD_BwE&ved=2ahUKEwjCj7Xu7qePAxVNZmwGHeRRHjwQ0Qx6BAgUEAE'> visit official site</a>
            </div>
            <div className='oet-description'>
                <p>
                The Occupational English Test, or OET, is a specialized English language proficiency exam 
                designed for healthcare professionals. It assesses a candidate's ability to communicate 
                effectively in real-world medical situations across four key skills: listening, reading,
                writing, and speaking. 
                </p>    
            </div>
        </div>
        <div className='ielts'>
            <div className='ielts-image'>
                <img src={require("../Images/ielts.png")} alt="About us" />
            </div>
            <div className='ielts-official-site'>
                <a href='https://www.googleadservices.com/pagead/aclk?sa=L&pf=1&ai=DChsSEwiA9vW97qePAxWdI4MDHSPJKE8YACICCAEQARoCc2Y&co=1&ase=2&gclid=CjwKCAjwk7DFBhBAEiwAeYbJsS96Ii_ur6eIVV7_rJo-_FkXPAnNFU9ztXze1BzJsiP8WyIys8adnhoCx9kQAvD_BwE&ohost=www.google.com&cid=CAESeOD2t8OLoRlVoFAWg9JBR2IbZWQgFzLP3-G9-m7f0RhyQst32G__LqIx4LW3mcW2Ww9hROcob1RZR5K68CVaNNiAhaSwdAh6VmS2_z7QXImTV7OI2k4YHTmbNRIAAJOzXCm8iLQfsDkrdjVwpGC7nqPbxcHJSFsQzg&category=acrcp_v1_40&sig=AOD64_1K6dFGf5DAC6XCjaAmPhgjCL-Y4w&q&nis=4&adurl=https://www.ieltsidpindia.com/?utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DTop_Keywords_2025%26utm_term%3Dielts%26gad_source%3D1%26gad_campaignid%3D22490212689%26gbraid%3D0AAAAADgg0xkIiJpxoR60_OEnkawS_DXpS%26gclid%3DCjwKCAjwk7DFBhBAEiwAeYbJsS96Ii_ur6eIVV7_rJo-_FkXPAnNFU9ztXze1BzJsiP8WyIys8adnhoCx9kQAvD_BwE&ved=2ahUKEwj5gu-97qePAxWcWHADHVCvKjkQ0Qx6BAhBEAE'>visit official site</a>
            </div>
            <div className='ielts-description'>
                <p>
                    IELTS (International English Language Testing System) is an international standardized
                     test of English language proficiency required by educational institutions, employers, 
                     and immigration authorities worldwide for non-native English speakers. The test is 
                     jointly managed by the British Council, IDP IELTS, and Cambridge University Press & Assessment.
                </p>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Courses