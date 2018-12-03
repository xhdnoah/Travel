// 配置目录别名alias
const path = require("path");
function resolve(dir){
    return path.join(__dirname,dir);
}

const mockData = require("./mock/index.json");
const cityData = require("./mock/city.json");
const detailData = require("./mock/detail.json");

module.exports = {
    chainWebpack:config =>{
        config.resolve.alias
            .set("@",resolve("src"))
            .set("assets",resolve("src/assets"));
    },
    devServer:{
        port: 8080,
        proxy:{
            "/api":{
                target:"http://localhost:8080/api",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        },
        before(app){
            app.get("/api/index",(req,res) =>{
                res.json(mockData)
            });
            app.get('/api/city',(req,res) =>{
                res.json(cityData)
            });
            app.get('/api/detail',(req,res) =>{
                res.json(detailData)
            })
        }
    }
};
