'use client'
import {useState} from 'react'
 import Bannar from '@/component/Bannar'
import { DefaultLayout } from '../defaultLayout'
import { FeatureProperties } from '@/component/Features/featureProperties'
import {Partner} from '@/component/Partner'
import {hits} from '@/features/mockData/properties'
import { Team } from '@/component/Team'
import { Testimonials } from '@/component/Testimoinals'




export default  function Home() {
  
  const [data, setData] = useState([...hits])
 
//console.log(data.slice(0,6))
  

 
  return (
  <DefaultLayout>
   <Bannar/>
   <FeatureProperties data={data.slice(0,6)}/>
   <Team/>
   <Partner />
   <Testimonials />
  </DefaultLayout>
  )
}


// export async function getStaticProps(){
//   const {hits} = require('@/features/mockData/properties')

//   return {
//     props: {
//       properties: hits}
//   }
// }