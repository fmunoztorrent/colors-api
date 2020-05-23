import Color from './core/Color/Domain/entities/Color';
import ColorEntity from './core/Color/Domain/entities/ColorEntity';

test("Missing color name. Error thrown", ()=>{

    try{
        
        const color:Color = {
            id: 0,
            name: '',
            year: 2020,
            color: "#FFFFFF",
            pantoneValue: "20-2020"
        }

        new ColorEntity(color)
    } catch(error){
        
        expect(error).toEqual(new Error("Color name is mandatory. Please check it."));
    }
    
});

test("Present color name", ()=>{
    
    const color:Color = {
        id: 0,
        name: "White",
        year: 2020,
        color: "#FFFFFF",
        pantoneValue: "20-2020"
    }

    const testColor = new ColorEntity(color);
    expect(testColor.color).toEqual(color);
    
});


test("Too old (below 2000) color year. Error thrown.", ()=>{

    try{

        const color:Color = {
            id: 0,
            name: "White",
            year: 1999,
            color: "#FFFFFF",
            pantoneValue: "20-2020"
        }
        
        new ColorEntity(color);

    } catch(error){
        expect(error).toEqual(new Error("Color year is mandatory and must be greater than 2000. Please check it."));
    }
});


test("Not a valid hex color. Error thrown.", ()=>{

    try{

        const color:Color = {
            id: 0,
            name: "White",
            year: 2000,
            color: "#FFw",
            pantoneValue: "20-2020"
        }
        
        new ColorEntity(color);

    } catch(error){
        expect(error).toEqual(new Error("Hexadecimal color code is not valid. Please check it."));
    }
});


test("Valid hex color.", ()=>{

    const color:Color = {
        id: 0,
        name: "White",
        year: 2000,
        color: "#FFFFFF",
        pantoneValue: "20-2020"
    }
    
    const testColor = new ColorEntity(color);
    expect(testColor.color).toEqual(color);
});



test("Not a valid pantone value. Error thrown.", ()=>{

    try{

        const color:Color = {
            id: 0,
            name: "White",
            year: 2000,
            color: "#FFFFFF",
            pantoneValue: "20--2020"
        }
        
        new ColorEntity(color);

    } catch(error){
        expect(error).toEqual(new Error("Pantone color code is not valid. Please check it."));
    }
});


test("Valid pantone value.", ()=>{

    const color:Color = {
        id: 0,
        name: "White",
        year: 2000,
        color: "#FFFFFF",
        pantoneValue: "20-2020"
    }
    
    const testColor = new ColorEntity(color);
    expect(testColor.color).toEqual(color);
});