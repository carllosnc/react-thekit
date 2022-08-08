export type DataTable<T extends Object> = T[]

type RegularTableProps = {
  data: Object[]
}

export function RegularTable({ data }: RegularTableProps) {
  return (
    <div data-testid="rt-wrapper" className="regular-table">
      <table data-testid="rt-table">
        <thead data-testid="rt-theader">
          <tr>
            {Object.keys(data[0]).map((item, index) => {
              return (
                <th data-testid="rt-title" key={index + 10}>
                  {item}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody data-testid="rt-tbody">
          {data.map((line, index) => {
            return (
              <tr key={index + 100}>
                {Object.values(line).map((item, index) => {
                  return (
                    <td data-testid="rt-item" key={index + 1000}>
                      {item}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
