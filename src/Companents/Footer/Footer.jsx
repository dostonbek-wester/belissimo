import React from 'react'
import './footer.css'
import Facebook from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <div className="footer-katta">
        <div className="footer-kattabox">
            <div className="footer-box1 zz">
                <img src="https://bellissimo.uz/images/footer-logo.svg" alt="" />
                <h4>RAQAMGA QO'NG'IROQ QILING - 1174</h4>
            </div>
            <div className="footer-box2 zz">
                <h4>Biz haqimizda</h4>
                <h4>Ommaviy oferta</h4>
                <h4>Maxfiylik siyosati</h4>
                <h4>Halol setifikati</h4>
                <h4>Restoranlar</h4>
            </div>
            <div className="footer-box3 zz">
              <h4 className='qw'>Franchayzi</h4>
              <h4>Bizning ish o'rinlarimiz</h4>
            </div>
            <div className="footer-box4 zz">
              <div className="footer-pay1">
                <div className="footer-paymethod1">
                  <img src="https://bellissimo.uz/images/payme-footer.svg" alt="" width="40%"/>
                  <img className='immgg' src="https://bellissimo.uz/images/uzcard-footer.svg" alt="" />
                </div>
              </div>
              <div className="footer-pay2">
                <div className="footer-paymethod3"><img src="https://bellissimo.uz/images/click-footer.svg" alt="" /></div>
                <div className="footer-paymethod4"><img src="https://bellissimo.uz/images/humo-footer.svg" alt="" /></div>
              </div>
            </div>
            <div className="footer-box5 zz">
              <h4>Bizni kuzatib boring</h4>
              <div className="footer-icon">
                <Facebook />
                <img src="https://www.dupaco.com/wp-content/uploads/2020/08/social-media-instagram-icon-600x600-2020.png" width="12%"/>
                <img src="https://орфографика.рф/800/600/https/guardups.ir/wp-content/uploads/2019/11/kisspng-computer-icons-telegram-all-5b47f9e0f2ca80.1093247715314436809945.png" width="12%" />
              </div>
            </div>
        </div>
        <div className="div-div">
          <h4>© 2016-2023 Bellissimo Pizza.</h4>
        </div>
    </div>
  )
}

export default Footer