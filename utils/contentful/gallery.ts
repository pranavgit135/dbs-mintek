
import fetchGraphQL from "./graphQL";

const GALLERY_QUERY = `
 galleryImagesCollection{
 items{
 ... on GalleryImage{
 id
 image{
 url
 }
 title
 location
 date
 views
 description
 }}}
        `



export async function getGalleryPage() {
  const data = (await fetchGraphQL(`
    query {
        galleryPageCollection(limit:${1}) {
            items {
                  ${GALLERY_QUERY}
        }
    }
  }
    `)) 
  
   console.log(data)
    
  return data?.data?.galleryPageCollection?.items?.[0];
}
