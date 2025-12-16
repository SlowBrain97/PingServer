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
    await Promise.all(
        urls.map(async (url) => {
            try {
                const res = await fetch(url, { method: "GET" });
                console.log(`[${new Date().toISOString()}] - Pinged ${url} (${res.status})`);
            } catch (error) {
                console.log(`[${new Date().toISOString()}] - Failed to ping ${url}`, error);
            }
        })
    );
}
