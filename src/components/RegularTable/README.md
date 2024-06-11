# Table

## Download

```c
npx github-download-directory carllosnc/cn-react-thekit src/components/RegularTable
```

## Import

```typescript
import { RegularTable, DataTable } from '@/components'
```

## Usage

Simple data

```typescript
const data = [
  {
    name: 'Mikayla',
    address: '141 Franecki Fields',
    phone: '(262) 410-1919 x882',
  },

  {
    name: 'Karlee',
    address: '6495 Cole Burg',
    phone: '471.210.8598',
  },

  {
    name: 'Abel',
    address: '5848 Brooks Landing',
    phone: '1-386-472-5151 x17037',
  },
]
```

Complex data combined with jsx elements

```typescript
const data: DataTable<{
  name: string
  address: string
  'self phone': string | React.ReactElement
  status: string | React.ReactElement
}> = [
  {
    name: 'Lysanne',
    address: '803 Madeline Inlet',
    'self phone': '782-675-4790 x013',
    status: (
      <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-green-200 text-green-900 rounded-full">
        <TbCheck /> Complete
      </span>
    ),
  },

  {
    name: 'Margie',
    address: '892 Hollie View',
    'self phone': '593-687-5936 x7889',
    status: (
      <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-red-200 text-red-900 rounded-full">
        <TbAlertTriangle /> Canceled
      </span>
    ),
  },

  {
    name: 'Barton',
    address: '75579 Satterfield Grove',
    'self phone': '590-531-8012',
    status: (
      <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-green-200 text-green-900 rounded-full">
        <TbCheck /> Complete
      </span>
    ),
  },

  {
    name: 'Estevan',
    address: '75597 Langosh Course',
    'self phone': '604.355.0279',
    status: (
      <span className="flex w-[120px] whitespace-nowrap gap-2 items-center py-1 px-3 bg-red-200 text-red-900 rounded-full">
        <TbAlertTriangle /> Canceled
      </span>
    ),
  },
]
```

Render the table

```tsx
<RegularTable data={data} />
```

## Props

| name   | type     | default     | description |
| ------ | -------- | ----------- | ----------- |
| `data` | Object[] | `undefined` | table data  |
