import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';

class Cpf extends Model {
  cpf!: string;
  createdAt?: Date;
}

Cpf.init(
  {
    cpf: {
      type: INTEGER,
      primaryKey: true,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
  },
},
{
    tableName: 'cpf',
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);
export default Cpf;