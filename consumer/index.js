import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "consumer-app",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "my-group" });

const run = async () => {
  await consumer.connect();

  console.log("Consumer connected!");

  await consumer.subscribe({ topic: "my-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
