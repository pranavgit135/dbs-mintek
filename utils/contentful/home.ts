
import fetchGraphQL from "./graphQL";

const HOME_QUERY = `
 founderName
 founderTitle
 founderDescription
 founderImage{
 url
 }

 testimonialsSectionCollection{
 items{
 ... on TestimonialSection{
 id
 name
 company
 location
 image{
 url
 }
 rating
 testimonial
 socialIcon
 industry
 partnership
 }
 }}
        `



export async function getHomePage() {
  const data = (await fetchGraphQL(`
    query {
        aboutSectionCollection(limit:${1}) {
            items {
                  ${HOME_QUERY}
        }
    }
  }
    `)) 
  
  
    
  return data?.data?.aboutSectionCollection?.items?.[0];
}
