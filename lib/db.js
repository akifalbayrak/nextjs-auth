import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        "mongodb+srv://akif:YZetSKnqRUNrBLl9@auth.0andi8r.mongodb.net/auth-user?retryWrites=true&w=majority&appName=Auth"
    );
    return client;
}
