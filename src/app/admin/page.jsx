import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Text } from '@/components/text'

export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <form method="post" className="mx-auto max-w-4xl p-6 bg-white rounded shadow-md">
      <Heading>Send Email</Heading>
      <Divider className="my-10 mt-6" />

      <section className="">
        <div className="space-y-1">
          <Subheading>Select Recipients</Subheading>
          <Text>Choose one or more recipients from the list.</Text>
        </div>
        <div className="space-y-4">
          <Select aria-label="Recipients" name="recipients">
            <option value="person1">Group 1</option>
            <option value="person2">Group 2</option>
            <option value="person3">Group 3</option>
          </Select>
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="">
        <div className="space-y-1">
          <Subheading>Subject</Subheading>
          <Text>Enter the subject of your message.</Text>
        </div>
        <div className="space-y-4">
          <Input aria-label="Subject" name="subject" placeholder="Enter subject" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="">
        <div className="space-y-1">
          <Subheading>Message</Subheading>
          <Text>Write your message here.</Text>
        </div>
        <div className="space-y-4">
          <Textarea aria-label="Message" name="message" placeholder="Enter your message" rows="6" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit">Send</Button>
      </div>
    </form>
  )
}
