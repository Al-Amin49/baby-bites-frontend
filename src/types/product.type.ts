
export type TReview={
  userId:string,
  comment:string,
  rating:number
}
export type TProduct={
    _id:string,
    title:string,
    image:string,
    price:number,
    salePrice:number,
    flashSale:boolean,
    reviews: TReview[],
    category:string
  }