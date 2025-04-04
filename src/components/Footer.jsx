import React from 'react'
import "../styles/footer.css";
import Logo from './Logo'

const Footer = () => {
  return (
    <footer>
        <div className="upper-footer">
          <div className="left-footer">
            <Logo size={"medium"} color= {"white"} />
            <div className="footer-paragraph">
              <p>Terms & Condition</p>
              <p>Privacy</p>
              <p>About us</p>
            </div>
          </div>
          <div className="socials">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M4.1665 19.9998C4.1665 12.5359 4.1665 8.80399 6.48524 6.48524C8.80399 4.1665 12.5359 4.1665 19.9998 4.1665C27.4637 4.1665 31.1957 4.1665 33.5145 6.48524C35.8332 8.80399 35.8332 12.5359 35.8332 19.9998C35.8332 27.4637 35.8332 31.1957 33.5145 33.5145C31.1957 35.8332 27.4637 35.8332 19.9998 35.8332C12.5359 35.8332 8.80399 35.8332 6.48524 33.5145C4.1665 31.1957 4.1665 27.4637 4.1665 19.9998Z"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M27.5 20C27.5 24.1422 24.1422 27.5 20 27.5C15.8579 27.5 12.5 24.1422 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5C24.1422 12.5 27.5 15.8579 27.5 20Z"
                stroke="#007BFF"
                stroke-width="1.5"
              />
              <path
                d="M29.1795 10.8335H29.1646"
                stroke="#007BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M4.1665 19.9998C4.1665 12.5359 4.1665 8.80399 6.48524 6.48524C8.80399 4.1665 12.5359 4.1665 19.9998 4.1665C27.4637 4.1665 31.1957 4.1665 33.5145 6.48524C35.8332 8.80399 35.8332 12.5359 35.8332 19.9998C35.8332 27.4637 35.8332 31.1957 33.5145 33.5145C31.1957 35.8332 27.4637 35.8332 19.9998 35.8332C12.5359 35.8332 8.80399 35.8332 6.48524 33.5145C4.1665 31.1957 4.1665 27.4637 4.1665 19.9998Z"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M17.5597 18.346C16.1929 18.1528 13.0776 18.4725 11.55 21.2972C10.0224 24.1217 11.562 27.0615 12.5227 28.1783C13.4715 29.2232 16.4869 31.2018 19.6855 29.27C20.4783 28.7912 21.466 28.434 22.5865 24.6923L22.4562 9.96924C22.24 11.5905 24.0308 15.3931 29.1298 15.843"
                stroke="#007BFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="lower-footer">
          <p>© 2023 STRENX. All rights reserved</p>
          
          </div>
      </footer>
  )
}

export default Footer