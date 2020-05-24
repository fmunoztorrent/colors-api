import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import Color from '../../Domain/entities/Color';

const sequelize = new Sequelize("sqlite::memory:", {logging: false});

// Color model
export default class ColorModel extends Model implements Color{
    public id!: number;
    public name!: string;
    public year!: number;
    public color!: string;
    public pantoneValue!: string;
  }
  
  ColorModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      year: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      color: {
          type: DataTypes.STRING(7),
          allowNull: false
      },
      pantoneValue: {
          type: DataTypes.STRING(7),
          allowNull: false
      },
    },
    {
      tableName: "colors",
      sequelize: sequelize // this bit is important
    }
  );
  
  try{
    ColorModel.sync({ force: false }).then(() => console.log("Colors table created")).catch(e=>e);
  } catch(e){

  }