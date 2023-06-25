

const FeatureCard=({...property})=>{
   console.log('card',property)
    return(
        <div>
        
       {property.name}
        </div>
    )
}
export default FeatureCard