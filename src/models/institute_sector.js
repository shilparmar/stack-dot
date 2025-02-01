module.exports = (sequelize, Sequelize) => {
  const instituteSector = sequelize.define(
    'institute_sector',
    {
      institute_sector_id: {
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
      tableName: 'institute_sector'
    }
  )
  instituteSector.associate = models => {
    instituteSector.belongsTo(models.institute_type, {
      foreignKey: 'institute_type_id',
      targetKey: 'institute_type_id'
    })
    instituteSector.hasMany(models.user_history, {
      foreignKey: 'institute_sector_id',
      sourceKey: 'institute_sector_id'
    })
  }

  return instituteSector
}
