module.exports = (sequelize, Sequelize) => {
  const classType = sequelize.define(
    'class_type',
    {
      class_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      enable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'class_type'
    }
  )
  classType.associate = models => {
    classType.belongsTo(models.institute_type, {
      foreignKey: 'institute_type_id',
      targetKey: 'institute_type_id'
    })
    classType.belongsTo(models.institute_sector, {
      foreignKey: 'institute_sector_id',
      targetKey: 'institute_sector_id'
    })
    classType.hasMany(models.user_history, {
      foreignKey: 'class_id',
      sourceKey: 'class_id'
    })
  }

  return classType
}
