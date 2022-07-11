import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Jamile</td>
              <td className="show992">15</td>
              <td className="show992">14</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#342</td>
              <td className="show576">08/07/2022</td>
              <td>Renato</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 44500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#343</td>
              <td className="show576">08/07/2022</td>
              <td>Felipe</td>
              <td className="show992">15</td>
              <td className="show992">5</td>
              <td>R$ 3500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default SalesCard
