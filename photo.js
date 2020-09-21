class Photo{
    constructor (width = 8,height = 10)//default values set in parameters
    {
this.width = width;
this.height = height;
    }

    price(){
        let finalPrice; //new keyword,var too outdated
        if ((this.width == 8) && (this.height == 10))
        {
            finalPrice = 4;
        }
        else
        {
            if((this.width == 10) && (this.height == 12))
            {
                finalPrice = 6;
            }
            else
            {
                finalPrice = 10;
            }
        }
        return finalPrice;
    }//end of price method

    toString()
    {
        return `This is a ${this.width} by ${this.height} photo and it costs $${this.price()}`;
    }
}//end class

let photo1 = new Photo();
console.log(photo1.toString);

let photo2 = new Photo(12,15);
console.log(photo2.toString);