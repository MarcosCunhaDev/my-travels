import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function DynamicMap({ places }: { places?: any }) {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false // This line is important. It's what prevents server-side render
      }),
    []
  )

  return <Map places={places} />
}

export default DynamicMap
