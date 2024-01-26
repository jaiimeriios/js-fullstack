'use client'

import Image from "next/image";

const ContactPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('asdfsd')
    }

    return (
        <div className="container">
            <h2>Contact Page</h2>
         
            <div className="container-image">
                <p>Lorem Ipsum</p>
                <Image src='/landscape.jpg' alt="landscape" width='400' height='238' />
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Phone" />
                <textarea name="details"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
