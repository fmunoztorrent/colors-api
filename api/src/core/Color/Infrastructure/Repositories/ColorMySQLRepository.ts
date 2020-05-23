import ColorRepository from "../../Domain/repo/Color"
import Color from "../../Domain/entities/Color";
import { ColorModel } from './ColorModel';

export class ColorMySQLRepository implements ColorRepository{

    getColors(from:number, limit:number):Promise<Color[]>{
        return ColorModel.findAll<ColorModel>({attributes: ['id', 'name', 'color'], offset: from, limit: limit, order: [['id', 'DESC']]});
    }

    getById(id:number): Promise<Color>{
        return ColorModel.findByPk<ColorModel>(id);
    }

    newColor(color:Color): Promise<Color>{
        return ColorModel.create<ColorModel>(color);
    }
}