import amqplib from "amqplib";

let channel,connection;

export const connectRabbitMq=async(retries=5,delay=3000)=>{
    while(retries)
    {
        try{
            connection=await amqplib.connect('amqp://rabbitmq');
            channel=await connection.createChannel();
            await channel.assertQueue('taskQueue');
            console.log("RabbitMQ Connected");
            return;
        }
        catch(err)
        {
            console.log("RabbitMQ Connection Failed",err);
            retries--;
            console.log("Retries left",retries);
            await new Promise(resolve=>setTimeout(resolve,delay));
        }
    }
}

export {channel,connection};