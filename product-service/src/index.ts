import server from './presentation/server'
import dbConnection from './infrastrucure/database/dbConnection'

(async () => {
    try {
        server
        await dbConnection()
        console.log("Product service all done 👍")
    } catch (error: any) {
        console.error("Error at Product Service ❌ ", error.message);
        process.exit(1);
    }
})()