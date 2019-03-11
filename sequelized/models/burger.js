module.exports=function(sequelize,dataType){
    var burger=sequelize.define("burger",{
        burger_name:dataType.STRING,
        ate:{
            type:dataType.BOOLEAN,
            default:true,
        },
        id:{
            type:dataType.INTEGER,
            autoIncrement:true,
            unique:true,
            notNull:true,
            primaryKey:true,
        }
    })
    return burger
}
