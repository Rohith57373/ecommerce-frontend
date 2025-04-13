import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './Banner'
import Topsellers from './Topsellers'
import Recommended from './Recommended'
import News from './News'

export default function Home() {
    return (
        <div>
            <Banner />
            <Topsellers />
            <Recommended />
            <News />
        </div>
    )
}
