import Color from '../../Domain/entities/Color';
import ColorRepository from '../../Domain/repo/Color';

const getColors = (repo: ColorRepository) => async(page:number=0) =>{
    
    const COLORS_PER_PAGE:number = 5;

    let from:number = 0;
    let limit:number = COLORS_PER_PAGE;

    if(page > 0){
        from = (page - 1) * COLORS_PER_PAGE;
    }

    const colors: Color[] = await repo.getColors(from, limit);
    return colors;
}

export default getColors;