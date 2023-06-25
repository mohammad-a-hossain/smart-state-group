'use client'
import {useState} from 'react'
 import Bannar from '@/component/Bannar'
import { DefaultLayout } from '../defaultLayout'
import { FeatureProperties } from '@/component/Features/featureProperties'

import {hits} from '@/features/mockData/properties'




export default  function Home() {
  
  const [data, setData] = useState([...hits])
 
console.log(data)
  

 
  return (
  <DefaultLayout>
   <Bannar/>
   <FeatureProperties data={data}/>
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