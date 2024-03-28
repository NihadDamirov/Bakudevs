import React from 'react'
import "./Contact.css"
import PageContainer from './../../PageContainer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const Contact = () => {
  return (
    <>
    <PageContainer>
    <div className="contact-container">
        <Breadcrumbs title="Əlaqə" mainpage="Əsas səhifə" item="●" currentpage="Əlaqə"/>

        <div style={{position:"relative"}}>
            <div className="star-shape"><img src="/star-shape.png" alt="" /></div>
            <div className="circle-shape"><img src="/circle-shape.png" alt="" /></div>
        <div className="contacts">
            <div className="icon-wrapper">
                <div className="icon-div"><img src="/phone-icon.png" alt="" /></div>
                <h3>Telefon</h3>
                <div>
                <p>+994 55 555 55 55</p>
                <p>+994 55 555 55 55</p>
                </div>
            </div>

            <div className="icon-wrapper">
                <div className="icon-div"><img src="/mail-icon.png" alt="" /></div>
                <h3>Email</h3>
                <p>info@bakudevs.net</p>
            </div>

            <div className="icon-wrapper">
                <div className="icon-div"><img src="/whatsapp-icon.png" alt="" /></div>
                <h3>WhatsApp</h3>
                <p>+994 55 555 55 55</p>
            </div>

            <div className="icon-wrapper">
                <div className="icon-div"><img src="/share-icon.png" alt="" /></div>
                <h3>Sosial Şəbəkələr</h3>
                <div className="social-media-app">
                    <div className="media-icon"><img src="/facebook-icon.png" alt="" /></div>
                    <div className="media-icon"><img src="/whatsapp-icon(two).png" alt="" /></div>
                    <div className="media-icon"><img src="/instagram-icon.png" alt="" /></div>
                    <div className="media-icon"><img src="/telegram-icon.png" alt="" /></div>
                </div>
            </div>
        </div>
        </div>

        <div className="contact-form">
            <div className="orange-ellipse"><img src="/orange-ellipse.png" alt="" /></div>
            <div className="ellipse-group"><img src="/ellipse-group.png" alt="" /></div>
            <div>
                <h1 className="suallar">Suallarınız var?</h1>
                <p className="-contact-form-paragraph">Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</p>
            </div>

            <div style={{display:"flex", width:"820px", gap:"22px", marginTop:"54px"}}>
                <div className="inputs">
                    <input type="text" name="" id="" placeholder="Adınız və Soyadınız" />
                    <input type="email" name="" id="" placeholder="Email ünvanı" />
                    <input type="text" name="" id="" placeholder="Əlaqə nömrəsi" />
                </div>

                <div className="textarea">
                    <textarea name="" id="" placeholder="Mesajınız"></textarea>
                </div>
            </div>

            <div className="send-btn-div">
                <div className="gray-ellipse-div"><img src="/gray-ellipse.png" alt="" /></div>
                <div><button type="submit" className="send">Göndər</button></div>
                <div><img src="/star-shape.png" alt="" /></div>
            </div>

        </div>
    </div>
    </PageContainer>
    </>
  )
}

export default Contact