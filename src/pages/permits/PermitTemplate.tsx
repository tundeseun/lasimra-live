type PermitData = {
  title: string;
  intro: string;
  requirements: string[];
  fees: string[][];
  reinstatement: string[][];
  issued?: string[][];
};

export default function PermitTemplate({ data }: { data: PermitData }) {
  return (
    <section className="page-section">
      <div className="container narrow">
        <div className="content-card stack-gap">
          <span className="section-label">Permit Requirements</span>
          <h1 className="page-title small">{data.title}</h1>
          <p>{data.intro}</p>

          <h3>Requirements for Permit</h3>
          <ul className="styled-list">
            {data.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Permit Fees</h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                {data.fees.map(([name, amount]) => (
                  <tr key={`${name}-${amount}`}>
                    <td>{name}</td>
                    <td>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Reinstatement Rates</h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount (₦ / m)</th>
                </tr>
              </thead>
              <tbody>
                {data.reinstatement.map(([name, amount]) => (
                  <tr key={`${name}-${amount}`}>
                    <td>{name}</td>
                    <td>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.issued && data.issued.length > 0 ? (
            <>
              <h3>Permits Issued</h3>
              <p>List of currently issued permits for utility infrastructure using Right of Way.</p>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Company</th>
                      <th>Site Address</th>
                      <th>Type</th>
                      <th>Height / Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.issued.map((row, idx) => (
                      <tr key={`${row[0]}-${row[1]}-${idx}`}>
                        {row.map((cell) => (
                          <td key={`${idx}-${cell}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
