import { getGalleryPage } from "@/utils/contentful/gallery"
import AdvancedGallery from "./advance-gellery"


export default async function Page() {
  const data = await getGalleryPage()
  console.log(data)
  return  <AdvancedGallery data={data} />
}
