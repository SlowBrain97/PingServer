export default{
    async scheduled(event,env,ctx){
        ctx.waitUntil(ping());
    }
}
const urls = [
    "https://tech-skill-webapp.onrender.com",
"https://download-convert-web-app.onrender.com/ping"
]
async function ping(){
    urls.forEach(async url => {
        try {
            await fetch(url,{method:"GET"});
            console.log(`[${new Date().toISOString()}] - Pinged ${url}`);
        } catch (error) {
            console.log(`[${new Date().toISOString()}] - Failed to ping ${url}`);
        }
    })
}