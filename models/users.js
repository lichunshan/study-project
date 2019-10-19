module.exports = function(Sequelize,sequelize,Model){
    class User extends Model {}
    User.init({
    // 属性
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull 默认为 true
    }
    }, {
    sequelize,
    modelName: 'user'
    // 参数
    });
}