export const usePropertiesHook =(property) =>{
    const address =property?.location?.map((item) => item.name).join(', ');
    const coverPhoto= property?.coverPhoto?.url ;
   // const propertyType= `${property.category?[0].name }`;
   // const propertyType = property.category?[0].name ;
    const price = property?.price?.toLocaleString('en-us',{
        style: 'currency',
        currency:'USD',
        maximumFratctionDigits:0         
    });
    const title= property?.title ;
    const rooms= property?.rooms ;
    const baths = property?.baths;
    const purpose= property?.purpose ;
    const sqSize= property?.area?.toFixed(2);
    const externalId= property?.externalID;

    const photos= property?.photos?.map((photo) => photo.url) || [];
    const description = property?.description;
    const coverVideoUrl= property?.coverVideo?.url;
    const coverVideo= coverVideoUrl?.slice(coverVideoUrl.length -11);
    const panorama= property?.panoramas?.length ? property.panoramas[0].url : {};
    const amenities = property?.amenities?.flatMap((amenities) => amenities).map((item) => item.text) ;
    const furnish =property?.furnishingStatus;
    const contactPerson= property?.contactName;


    return{
        address,
        coverPhoto,
       // propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalId,
        coverVideo,
        description,
        photos,
        panorama,
        amenities,
        contactPerson,
        furnish
    }
}