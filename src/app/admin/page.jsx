"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/button';
import { Divider } from '@/components/divider';
import { Heading, Subheading } from '@/components/heading';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Text } from '@/components/text';
import { SearchSelect } from '@/components/search-select';

export default function Contact() {
  const [formData, setFormData] = useState({
    emails: [],
    subject: '',
    message: ''
  });
  const [emailOptions, setEmailOptions] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await fetch("https://thoughtless-black.cmd.outerbase.io/emails", {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      if (data.success) {
        const options = data.response.items.map(item => ({
          value: item.email_address,
          label: `${item.email_display_name} (${item.email_address})`
        }));
        setEmailOptions(options);
      }
    } catch (error) {
      console.error("Failed to fetch emails:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailChange = (selectedEmails) => {
    setFormData({ ...formData, emails: selectedEmails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({ emails: [], subject: '', message: '' });
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
          <Subheading>Enter Recipients</Subheading>
        </div>
        <div className="space-y-4">
          <SearchSelect
            options={emailOptions}
            onChange={handleEmailChange}
            placeholder="Search and select email addresses"
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
        <Button type="reset" plain onClick={() => setFormData({ emails: [], subject: '', message: '' })}>
          Reset
        </Button>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}