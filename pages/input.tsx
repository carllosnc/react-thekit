import { Page } from '@/templates'
import { Input } from '@/components'
import { FiUser, FiMail } from 'react-icons/fi'

export default function ExpanderPage() {
  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Input </h1>

        <hr />

        <div className="page-component__content">
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
    </Page>
  )
}
