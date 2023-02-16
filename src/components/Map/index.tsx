import { useRouter } from 'next/router'
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

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEDID = process.env.NEXT_PUBLIC_MAPBOX_STYLEDID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEDID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

function Map({ places }: MapProps) {
  const router = useRouter()

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2.5}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {places?.map(({ id, name, location, slug }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                const href = `place/${slug}`
                router.push(href)
              }
            }}
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
