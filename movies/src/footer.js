import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
        <footer>
        <div class="footer-row-1">
            <h4>Queations? Call 000000s00</h4>
        </div>
        <div class="footer-row-2">
            <div class="column-1">
                <p>FAQ</p>
                <p>Invester Relations</p>
                <p>Privacy</p>
                <p>T&C</p>
            </div>
            <div class="column-2">
                <p>Help center</p>
                <p>Careers</p>
                <p>Cookie Preference</p>
                <p>Legal Notices</p>
            </div>
            <div class="column-3">
                <p>Media Center</p>
                <p>Term of use</p>
                <p>About</p>
                <p>Contact Us</p>
            </div>

        </div>
        <div class="footer-row-3">
            <div class="dropdown-container">
                <i class="fas fa-globe"></i>
                <select name="languages" class="language-dropdown">
                    <option value="english">English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
        </div>
        <p>© 2023 ENTERTAINMENT Co. All Rights Reserved.</p>
    </footer>

    </>
  )
}

export default footer