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
                <Footer.Link href='#'>Story</Footer.Link>
                <Footer.Link href='#'>Consoles</Footer.Link>
                <Footer.Link href='#'>Games</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                <Footer.Link href='#'>Marketing</Footer.Link>
                <Footer.Link href='#'>Consulting</Footer.Link>
                <Footer.Link href='#'>Developemnt</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                <Footer.Link href='#'>Kenya</Footer.Link>
                <Footer.Link href='#'>Zimbabwe</Footer.Link>
                <Footer.Link href='#'>Nigeria</Footer.Link>
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
