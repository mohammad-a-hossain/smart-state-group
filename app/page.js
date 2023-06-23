'use client'
import { NavigationDesktop } from '@/component/Navigation/NavigationDesktop'
import {NavigationMobile} from '@/component/Navigation/NavigationMobile'
import Image from 'next/image'

export default function Home() {
  return (
  <>
  <NavigationMobile />
  <NavigationDesktop/>

  </>
  )
}