import React from 'react'
import DynamicMap from '@/components/Map/dynamicMap'

const place = {
  id: '1',
  name: 'Brasília',
  slug: 'brasilia',
  location: { latitude: -15.793889, longitude: -47.882778 }
}

function Home() {
  return <DynamicMap places={[place]} />
}

export default Home
