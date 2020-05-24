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

    /**
    * 
    * Pagination information
    * 
    */

    // Set current functional pagination (actual current page)
    const currentPage = (page===0)? 1: page;    
    const totalItems = await repo.countTotalItems();
    const totalPages = Math.ceil(totalItems / COLORS_PER_PAGE);
    
    return {
        color_list: colors,
        current_page: currentPage,
        total_items: totalItems,
        total_pages: totalPages
    }
}

export default getColors;