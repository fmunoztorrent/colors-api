import getColors from './getColors';
import getColor from './getColor';
import { ColorMySQLRepository } from '../../Infrastructure/Repositories/ColorMySQLRepository';

const mysqlColorRepo = new ColorMySQLRepository();

// Denpendecy injection here
const getColorUseCase = getColor(mysqlColorRepo);
const getColorsUseCase = getColors(mysqlColorRepo);

export { getColorUseCase as getColor, getColorsUseCase as getColors}