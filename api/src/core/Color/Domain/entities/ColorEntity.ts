import Color from './Color';
class ColorEntity {

    constructor(public color: Color){

        if(!color.name || color.name === ""){
            throw new Error("Color name is mandatory. Please check it.");
        }

        if(!color.year || color.year <= 1999){
            throw new Error("Color year is mandatory and must be greater than 2000. Please check it.");
        }

        this.isValidHexadecimalColor();
        this.isValidPantoneColorCode();
    }

    isValidHexadecimalColor(){
        const isValid = /^#[0-9A-F]{6}$/i.test(this.color.color);
        if(!isValid){
            throw new Error(("Hexadecimal color code is not valid. Please check it."));
        }
    }
    isValidPantoneColorCode(){
        const isValid = /^[0-9]{2}\-[0-9]{4}$/i.test(this.color.pantoneValue);
        if(!isValid){
            throw new Error(("Pantone color code is not valid. Please check it."));
        }
    }

}

export default ColorEntity;