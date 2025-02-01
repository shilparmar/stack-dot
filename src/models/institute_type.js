module.exports = (sequelize, Sequelize) => {
  const instituteType = sequelize.define(
    'institute_type',
    {
      institute_type_id: {
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
      tableName: 'institute_type'
    }
  )
  instituteType.associate = models => {
    instituteType.hasMany(models.institute_sector, {
      foreignKey: 'institute_type_id',
      sourceKey: 'institute_type_id'
    })
    instituteType.hasMany(models.user_history, {
      foreignKey: 'institute_type_id',
      sourceKey: 'institute_type_id'
    })
  }

  return instituteType
}
