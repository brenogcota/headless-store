import './styles.scss'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__infos'>
            <ul>
                <strong>COMPANY INFO</strong>
                <li>About SHEIN</li>
                <li>Social Responsibility</li>
                <li>Fashion Blogger</li>
                <li>Supply Chain</li>
                <li>Careers</li>
                <li>Student Discount</li>
            </ul>

            <ul>
                <strong>HELP & SUPPORT</strong>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>How To Order</li>
                <li>How To Track</li>
                <li>Size Guide</li>
                <li>SHEIN VIP</li>
            </ul>
        </div>
        <div className='footer__bottom'>
            <span>
                ©2009-2023 STORE All Rights Reserved
            </span>
        </div>
    </footer>
  )
}
