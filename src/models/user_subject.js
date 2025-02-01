module.exports = (sequelize, Sequelize) => {
  const userSubject = sequelize.define(
    'user_subject',
    {
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
      tableName: 'user_subject'
    }
  )
  userSubject.associate = models => {
    userSubject.belongsTo(models.user_history, {
      foreignKey: 'user_history_id',
      targetKey: 'user_history_id'
    })
    userSubject.belongsTo(models.class, {
      foreignKey: 'subject_id',
      targetKey: 'subject_id'
    })
  }

  return userSubject
}
