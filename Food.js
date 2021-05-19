class Food{
    constructor(){
        this.foodStock = 0,
        this.lastFed;
        this.image = loadImage("images/Milk.png")
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock
    }
    deductFood(){
        if(foodStock>=0){
            this.foodStock = this.foodStock - 1
        }

    }
    getFoodStock(){
        return this.foodStock 
    }
    display(){
        var x = 80
        var y = 100
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
                image(this.image,x,y,50,50);
                x = x+30
                console.log(4)
            }

        }

    }
}