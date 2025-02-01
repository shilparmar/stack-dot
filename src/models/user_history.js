module.exports = (sequelize, Sequelize) => {
  const userHistory = sequelize.define(
    'user_history',
    {
      medium: {
        type: Sequelize.STRING(),
        allowNull: false
      },
      education_board: {
        type: Sequelize.STRING(),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'user_history'
    }
  )
  userHistory.associate = models => {
    userHistory.belongsTo(models.user, {
      foreignKey: 'user_id',
      targetKey: 'id'
    })
    userHistory.belongsTo(models.institute_type, {
      foreignKey: 'institute_type_id',
      targetKey: 'institute_type_id'
    })
    userHistory.belongsTo(models.institute_sector, {
      foreignKey: 'institute_sector_id',
      targetKey: 'institute_sector_id'
    })
    userHistory.belongsTo(models.class, {
      foreignKey: 'class_id',
      targetKey: 'class_id'
    })
  }

  return userHistory
}
