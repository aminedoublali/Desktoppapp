import React from 'react'
import CHF from '../components/CHF'
import EU from '../components/EU'
import GBP from '../components/GBP'
import JP from '../components/JP'
import MainLayout from '../components/Layouts/Mainlayout'
import SGD from '../components/SGD'
import US from '../components/US'
export default function Fx() {
  return (
    <MainLayout>
          <US/>
          <JP/>
          <GBP/>
          <EU />
          <CHF/>
          <SGD/>
    </MainLayout>
  )
}
