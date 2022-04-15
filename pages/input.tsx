import { Page } from '@/templates'
import { Input, Button } from '@/components'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { MdStar } from 'react-icons/md'

export default function ExpanderPage() {
  return (
    <Page>
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Input </h1>

          <hr />

          <p> Live example </p>

          <div className="flex flex-col gap-6">
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
        </div>
      </div>
    </Page>
  )
}
