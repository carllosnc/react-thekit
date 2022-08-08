import { DocPage } from '@/templates'
import { RegularTable, DataTable } from '@/components'
import React from 'react'
import { TbCheck, TbAlertTriangle } from 'react-icons/tb'

export default function RegularTablePage({ doc }) {
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

  return (
    <DocPage markdown={doc} title="Regular table">
      <div className="flex flex-col gap-4">
        <div>
          <RegularTable data={data} />
        </div>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/RegularTable/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
