import React from 'react'
import Footer from '.'
import Icons from '../Icons'

export default function FooterContainer() {
  return (
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
            <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                <Footer.Link href='#'>Journey</Footer.Link>
                <Footer.Link href='#'>Foods</Footer.Link>
                <Footer.Link href='#'>Goals</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                <Footer.Link href='#'>Sale of Avocados</Footer.Link>
                <Footer.Link href='#'>Consultation</Footer.Link>
                <Footer.Link href='#'>Agroforestry</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                <Footer.Link href='#'>Email: rose678@gmail.com</Footer.Link>
                <Footer.Link href='#'>Tel: 0720552934</Footer.Link>
                <Footer.Link href='#'>City: Nairobi</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                <Footer.Link href='#'><Icons className="fab fa-facebook-f"/>Facebook</Footer.Link>
                <Footer.Link href='#'><Icons className="fab fa-instagram"/>Instagram</Footer.Link>
                <Footer.Link href='#'><Icons className="fab fa-twitter"/>Twitter</Footer.Link>
            </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
  )
}
