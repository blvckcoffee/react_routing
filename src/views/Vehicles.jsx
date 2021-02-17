import { useState, useEffect } from 'react'
import VehicleCard from '../components/VehicleCard'
import { customFetch } from '../utils/customFetch'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    if (vehicles.length == 0) {
      customFetch('vehicles', setVehicles)
    }
  }, [])

  return (
    <main className='container'>
      <h1>People</h1>
      <hr />
      <div className='card-columns'>
        {vehicles.map((vehicle) => {
          return (
            <VehicleCard
              key={vehicle.key}
              name={vehicle.name}
              description={vehicle.description}
              vehicle_class={vehicle.vehicle_class}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Vehicles
