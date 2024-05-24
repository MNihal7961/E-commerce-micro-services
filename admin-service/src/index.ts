import server from './presentation/server'
import dbConnect from './infrastructure/database/dbConnect'

(async () => {
    try {
        server
        await dbConnect().catch((error: any) => {
            console.error("AdminDB ❌:", error.message);
            process.exit(1)
        })
        console.log("admin service all ok 👍")
    } catch (error: any) {
        console.error("Admin service failed 😨:", error.message);
        process.exit(1);
    }
})()