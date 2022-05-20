# Input

## Download

```
npx github-download-directory c4co/cn-react-thekit components/Input
```

## Import

```jsx
import { Input } from '@/components'
```

## Anatomy

`<Input />` extends `React.InputHTMLAttributes<HTMLInputElement>`, then you can use all props and event of `<input>`

## Dependencies

[React-Icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons
```

## Usage

```jsx
import { Input } from '@/components'
import { FiMail, FiUser } from 'react-icons/fi'

function App() {
  return (
    <div>
      <Input
        label="Email"
        placeholder="ex: john@email.com"
        type="email"
        icon={<FiMail />}
      />
    </div>
  )
}
```

## Props

| name         | type       | default | description             |
| ------------ | ---------- | ------- | ----------------------- |
| label        | string     | null    | input label             |
| description  | string     | null    | show input description  |
| icon         | React-Icon | null    | input icon              |
| error        | boolean    | false   | show input error mode   |
| errorMessage | string     | null    | input error message     |
| success      | boolean    | boolean | show input success mode |
