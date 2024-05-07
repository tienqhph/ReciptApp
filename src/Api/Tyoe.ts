  export type Meal={
    idMeal:string , 
    strMeal:string , 
    strCategory:string , 
    strInstructions:string ,
    strArea:string , 
    strMealThumb:string , 
    strTags:string , 
    strYoutube:string , 
    strIngredient1:string , 
    strIngredient2:string , 
    strIngredient3:string , 
    strIngredient14:string , 
    strIngredient5:string , 
    strMeasure1:string , 
    strMeasure2:string , 
    strMeasure3:string , 
    strMeasure4:string , 
    strMeasure5:string
}

 export type responceMeal =  {
    meals:Meal[]
}

type Categories= {
    idCategory:string , 
    strCategory:string,
    strCategoryThumb:string , 
    strCategoryDescription:string
}


export type responseCat = {
    categories:Categories[]
}


export type BookmarkType = {
    url?:string,
    id ?:string,
    stkThumb ?:string,
}