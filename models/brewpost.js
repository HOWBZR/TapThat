module.exports = function (sequelize, DataTypes) {
    const BrewPost = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }
    });
    return BrewPost;
};