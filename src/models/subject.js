module.exports = (sequelize, Sequelize) => {
  const subject = sequelize.define(
    'subject',
    {
      subject_id: {
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
      tableName: 'subject'
    }
  )
  subject.associate = models => {
    subject.belongsTo(models.class, {
      foreignKey: 'class_id',
      targetKey: 'class_id'
    })
    subject.hasMany(models.user_subject, {
      foreignKey: 'subject_id',
      sourceKey: 'subject_id'
    })
  }

  return subject
}
