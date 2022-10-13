import React from 'react'
import './css/contact.css'

export default function Contact() {
  return (
    <div>
        <section class="contact-section">
            <div class="contact">
                <h4 class="join">Join the Conversation</h4>
                <label for="email">
                    <input type="email" class="email" placeholder="EMAIL ADDRESS" />
                </label>
            </div>
        </section>
    </div>
  )
}
