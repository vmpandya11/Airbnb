import React from 'react'
import Header from '../Header/Header'
import CardItem from '../CardItems/CardItems';
import BEHost from '../BE Host/BeHost';
import LiveAnyWhere from '../LiveAnywhere/LiveAnywhere'
import Discover from '../Discover/DiscoverThing'
import TryingHost from '../TryingHost/TryingHost';


export default function Home() {
  return (
    <div>

      <Header />
      <CardItem />
      <BEHost />
      <LiveAnyWhere />
      <TryingHost/>
      <Discover />

    </div>
  )
}
