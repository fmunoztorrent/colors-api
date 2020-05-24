import Color from '../../Domain/entities/Color';
import ColorEntity from '../../Domain/entities/ColorEntity';
import ColorRepository from '../../Domain/repo/Color';

// New Color Implementation
const newColor = (repo: ColorRepository) => async(data:Color) =>{

    

    if(data.id){
        throw new Error(("Color id not allowed on creation. Please erase it from your POST request."));
    }

    const aColor = new ColorEntity(data);
    const aNewColor : Color = await repo.newColor(aColor.color);
    return aNewColor;

}

export default newColor;