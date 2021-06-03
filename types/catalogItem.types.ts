export interface ICatalogItem {
  _id: string
  material: string //материал памятника
  type: string // тип захоронения
  size: {
    //размер памятника
    width: number
    depth: number
    height: number
  }
  size2: {
    //размер подставки
    width: number
    depth: number
    height: number
  }
  polishing: boolean //полировка
  polishingType: string //тип полировки
  flowerGarden: boolean | string //цветник
  flowerGardenFilling: string //наполнение цветника
  place: string //???
  name: string // гравировка имени
  section: string // тип памятника
  date: string //годы жизни
  nameMonument: string //название памятника
  photo: string //фото
  installation: string //установка
  delivery: string //доставка
}
