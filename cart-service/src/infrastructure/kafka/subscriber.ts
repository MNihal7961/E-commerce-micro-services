import userCreatedConsumers from "./consumers/userCreatedConsumer";
import productCreatedConsumers from "./consumers/productCreatedConsumer";


export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumers,
        productcreated: productCreatedConsumers
    }
}