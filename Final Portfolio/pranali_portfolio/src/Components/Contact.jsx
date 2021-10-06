import React from 'react'
import pic from "./public/PranaliPicture.jpg"
export const Contact = () => {
    return (<>
        <br />
        <br />
        <br/>
        <div className="col-lg-10 order-1 order-lg-1">
            <div className="contact_pic">
                <img src={pic} alt="Pranali Malkar"></img>
            </div>
            <div className="contact_text">
            <h1 className="contact">Reach Out to me!</h1>
            <br />
            <h3 className="contact">"A Full Stack Developer"</h3><br/>
            <h4 className="contact">📞 +91-9665169678</h4>
            <h4 className="contact">📧 malkarpg@gmail.com</h4>
            <h4 className="contact">🏠 Kolhapur, Maharashtra-416103</h4>
                <br />
                <br/>
             <div className="socialMedia social_contact">
                                    <div className="">
                                        <a href="https://github.com/Pranali-5/" target="_blank"><img className="github" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXu4fmVeiTs5QYD3EpBn0MtcBWJsQJ6pYxtA&usqp=CAU" alt=""></img></a>
                                        
                                        <a href="https://www.linkedin.com/in/pranali-malkar-34243916a/" target="_blank"><img className="linkedin" src="data:image/png;base64,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" alt=""></img></a>
                                        <a href="https://hashnode.com/@pranali09" target="_blank"><img className="hashnode" src="data:image/png;base64,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" alt=""></img></a>
                                        <a href="mailto:malkarpg@gmail.com" target="_blank"><img className="gmail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMmD6BVa2_9o_5g6phNv1xmD1R05IPqEkKw&usqp=CAU" alt=""></img>
</a>
                                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}