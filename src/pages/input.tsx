import { DocPage } from '@/templates'
import { Input } from '@/components'
import { FiUser, FiMail } from 'react-icons/fi'

export default function InputPage({ doc }) {
  return (
    <DocPage title="Input" markdown={doc}>
      <div className="flex flex-col gap-4">
        <Input placeholder="ex: John doe" type="text" />

        <Input label="Name" placeholder="ex: John Doe" type="text" />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          icon={<FiUser />}
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          success
          icon={<FiUser />}
        />

        <Input
          value="Jonh Doe"
          readOnly
          label="Name"
          placeholder="ex: John Doe"
          type="text"
          success
          description="Your username can be your email address, name, or nickname. Usernames can incorporate spaces,  numbers, and certain special characters such as periods (.), hyphens (-), apostrophes ('), underscores (_), and the @ sign."
          icon={<FiUser />}
        />

        <Input
          value="johndoegmail.com"
          readOnly
          label="Email"
          placeholder="ex: johndoe@gmail.com"
          type="email"
          error
          errorMessage="invalid email"
          icon={<FiMail />}
        />
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Input/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
