import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "producer-app",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  console.log("Producer connected!");

  setInterval(async () => {
    const message = { value: `Message at ${new Date()}` };

    await producer.send({
      topic: "my-topic",
      messages: [message],
    });

    console.log("Sent:", message.value);
  }, 2000);
};

run().catch(console.error);
