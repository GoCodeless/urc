"use client"

import { useState } from 'react';
import { Button } from '@/components/button';
import { Divider } from '@/components/divider';
import { Heading, Subheading } from '@/components/heading';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Text } from '@/components/text';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({ email: '', subject: '', message: '' });
    } else {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl p-6 bg-white rounded shadow-md">
      <Heading>Send Email</Heading>
      <Divider className="my-10 mt-6" />

      <section>
        <div className="space-y-1">
          <Subheading>Enter Recipient</Subheading>
        </div>
        <div className="space-y-4">
          <Input
            aria-label="Email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section>
        <div className="space-y-1">
          <Subheading>Subject</Subheading>
          <Text>Enter the subject of your message.</Text>
        </div>
        <div className="space-y-4">
          <Input
            aria-label="Subject"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section>
        <div className="space-y-1">
          <Subheading>Message</Subheading>
          <Text>Write your message here.</Text>
        </div>
        <div className="space-y-4">
          <Textarea
            aria-label="Message"
            name="message"
            placeholder="Enter your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain onClick={() => setFormData({ email: '', subject: '', message: '' })}>
          Reset
        </Button>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
