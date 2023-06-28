'use client'


import NavigationDesktop from '@/component/Navigation/NavigationDesktop'
import NavigationMobile from '@/component/Navigation/NavigationMobile'
import Footer from '@/component/footer'
import React from 'react'

export const DefaultLayout = ({children}) => {
  return (
    <>
     <NavigationDesktop />
     <NavigationMobile />
     {children}
     <Footer />
    </>
  )
}
