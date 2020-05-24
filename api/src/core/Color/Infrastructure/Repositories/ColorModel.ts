import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { mySqlDatabase } from "../../../../config/MySQL";
import Color from '../../Domain/entities/Color';

export class ColorModel extends Model implements Color{
  public id!: number;
  public name!: string;
  public year!: number;
  public color!: string;
  public pantoneValue!: string;
}

ColorModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    year: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    sequelize: mySqlDatabase // this bit is important
  }
);

ColorModel.sync({ force: false }).then(() => console.log("Colors table created"));