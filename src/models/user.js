module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING(90),
        allowNull: false
      },
      middle_name: {
        type: Sequelize.STRING(90),
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING(90),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'user'
    }
  )
  user.associate = models => {
    user.hasMany(models.user_history, {
      foreignKey: 'user_id',
      sourceKey: 'id'
    })
  }

  return user
}
