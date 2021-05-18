class Food{
    constructor(){
        this.foodStock,
        this.lastFed;
        this.image = loadImage("images/Milk.png")
    }

    updateFoodStock(){
        foodStock = database.ref('Food');
        foodStock.on("value", read)
    }
    deductFood(foodStock){
        if(foodStock<=0){
            foodStock=0;
          }else{
            foodStock=foodStock-1;
          }
          database.ref('/').update({
            Food:foodStock
          })

    }
    getFoodStock(){
        foodStock = foodStock +1
    }
    display(){
        var x = 80
        var y = 100
        this.foodStock = database.ref('Food');
        imageMode(CENTER);
        image(this.image,720,320,70,70)
        if(this.foodStock != 0){
            console.log(1)
            for(var i = 0; i<this.foodStock;i++){
                console.log(2)
                if(i%10==0){
                    x = 80
                    y = y+50
                    console.log(3)
                }
                this.image(this.image,x,y,50,50);
                x = x+30
                console.log(4)
            }

        }

    }
}