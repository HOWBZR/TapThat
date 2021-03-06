module.exports = function (sequelize, DataTypes) {
    const BrewPost = sequelize.define("BrewPost", {

        beer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        abv: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    });
    // BrewPost.associate = function (models) {
    //     BrewPost.belongsTo(models.Users, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };


    return BrewPost;
};