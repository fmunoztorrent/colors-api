import { Response, Request } from 'express';
import {getColors, getColor} from '../../Application/Finder';
import { newColor } from '../../Application/Creater';
import xml from 'xml';

export class ColorController {

  // List paged color list
  async list(request: Request, response: Response){

    try{

      const responseType = request.query.format || 'json';
      const page = Number(request.query.page) || 0;
      const colorList = await getColors(page);

      if(responseType === 'xml'){

        response.set('Content-Type', 'text/xml');

        const colorsXmlCompatibleList = colorList.map(colorItem=>{
          return {color: [{ id: colorItem.id }, { name: colorItem.name }, { color: colorItem.color }]}
        });

        const colorXmlList = xml({colors: colorsXmlCompatibleList }, { declaration: true });
        return response.status(200).send(colorXmlList);

      }

      return response.status(200).json(colorList);

    } catch(error){

      return response.status(500).json({
        error: true,
        message: error
      });
    }

  }

  // Get color by id (numeric)
  async getById(request: Request, response: Response){

    try{

      const responseType = request.query.format || 'json';
      const color = await getColor(Number(request.params.colorId));

      if(!color){
        return response.status(404).json();
      }

      if(responseType === 'xml'){
        response.set('Content-Type', 'text/xml');
        return response.status(200).send(xml({color: [{ id: color.id }, { name: color.name }, { color: color.color }]}));
      }

      return response.status(200).json(color);

    } catch(error){

      return response.status(500).json({
        error: true,
        message: error
      });

    }
  }

  // Saves a new color into database
  async createNewColor(request: Request, response: Response){

    try{

      const responseType = request.query.format || 'json';
      const createdColor = await newColor(request.body);

      if(responseType === 'xml'){
        response.set('Content-Type', 'text/xml');
        return response.status(201).send(xml({color: [{ id: createdColor.id }, { name: createdColor.name }, { color: createdColor.color }]}));
      }

      return response.status(201).json(createdColor);

    } catch(error){

      return response.status(500).json({
        error: true,
        message: error
      });
    }

  }
}

export default ColorController;