import Color from '../../Domain/entities/Color';
import ColorRepository from '../../Domain/repo/Color';

const getColor = (repo: ColorRepository) => async(colorId: number) =>{
    const color: Color = await repo.getById(colorId);
    return color;
}

export default getColor;