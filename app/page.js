'use client'
 import Bannar from '@/component/Bannar'
import { DefaultLayout } from '../defaultLayout'
//import { Extra } from '@/component/extra'
import { FeatureProperties } from '@/component/Features/featureProperties'


//import {hits} from '../features/mockData/properties.json'

// async function getProperties(){
//   const res =await fetch('../features/mockData/properties')
//   console.log(res)
//   const result= res.json()
//   return result

// }

export default  function Home() {
  //const { hits} =  getProperties()

 //console.log(hits)
  return (
  <DefaultLayout>
   <Bannar/>
   <FeatureProperties/>
  </DefaultLayout>
  )
}



// export async function getStaticProps(){
// return{
//   props:{properties:hits}
// }
// }