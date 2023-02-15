import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface Place {
  id: string
  name: string
  slug: string
  location: { latitude: number; longitude: number }
}
export interface MapProps {
  places?: Place[]
}

function Map({ places }: MapProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2.5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
