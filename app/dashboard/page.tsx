
export const metadata = {
  title: 'Dashboard', // এই 'Dashboard' লেখাটিই %s এর জায়গায় বসবে
};

export default async function Dashboard() {
  const res = await fetch('http://localhost:3000/query', {
    cache: 'no-store',
  })

  const data = await res.json()

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Invoices Dashboard</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Name</th>
            <th style={{ border: '1px solid black' }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {item.name}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                ${item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}