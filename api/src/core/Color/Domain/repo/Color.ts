import Color from '../entities/Color';

interface ColorRepository {
    getColors(from:number, limit:number): Promise<Color[]>;
    getById(id:number): Promise<Color>;
    newColor(color:Color): Promise<Color>;
    countTotalItems(): Promise<number>;
}

export default ColorRepository;