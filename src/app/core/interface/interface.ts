export interface GetAllResponse {
  total: number,
  data: SpotItem[]
}

export interface SpotItem {
  address: string,
  category: Category[],
  distric: string,
  elong: string,
  email: string,
  facebook: string,
  fax: string,
  files: any[], // unknown
  friendly: any[], // unknown
  id: number,
  images: Image[],
  introduction: string,
  links: any[], // unknown
  modified: string,
  months: string,
  name: string,
  name_zh: null, // unknown
  nlat: number,
  official_site: string,
  open_status: number,
  open_time: string,
  remind: string,
  service: Service[],
  staytime: string,
  target: any[], // unknown
  tel: string,
  ticket: string,
  url: string,
  zipcode: string,
}

interface Category {
  id: number,
  name: string
}

interface Image {
  ext: string,
  src: string,
  subject: string
}

interface Service {
  id: number,
  name: string
}

interface CategoryId {
  13: '歷史建築',
  15: '藝文館所',
  16: '戶外踏青',
  19: '親子共遊'
  25: '無障礙旅遊推薦景點',

}
