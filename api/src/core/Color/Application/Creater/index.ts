import newColor from './newColor';
import { ColorMySQLRepository } from '../../Infrastructure/Repositories/ColorMySQLRepository';

const mysqlColorRepo = new ColorMySQLRepository();

const newColorUseCase = newColor(mysqlColorRepo);

export { newColorUseCase as newColor}