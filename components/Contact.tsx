'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity()) {
      const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)

      if (isMobile) {
        const mailtoUrl = `mailto:yoboihumantoo@gmail.com?subject=${encodeURIComponent(
          formData.subject,
        )}&body=${encodeURIComponent(bodyContent)}`
        window.location.href = mailtoUrl
      } else {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yoboihumantoo@gmail.com&su=${encodeURIComponent(
          formData.subject,
        )}&body=${encodeURIComponent(bodyContent)}`
        window.open(gmailUrl, '_blank', 'width=800,height=600')
      }
    } else {
      form.reportValidity()
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn" id="sendMail">
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}

