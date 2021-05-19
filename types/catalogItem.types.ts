export interface ICatalogItem {
  material: string
  size: {
    width: number
    depth: number
    height: number
  }
  polishing: boolean
  polishingType: number
  flowerGarden: boolean
  flowerGardenFilling: string
  place: string
  name: string
  section: string
}
