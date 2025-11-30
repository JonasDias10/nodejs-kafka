# Node.js + Kafka

This repository contains a practical example of using **Apache Kafka** with **Node.js**, demonstrating how to implement a simple **Producer** and **Consumer** setup for messaging and streaming data between services.

> ⚠️ Note: This is a **basic learning example**, meant for educational purposes only. It does **not include production-level configurations, security, or fault-tolerance optimizations**.

## What is Kafka?

**Apache Kafka** is a **distributed streaming platform** used for building real-time data pipelines and streaming applications. It allows applications to **publish and subscribe to streams of records** and **process them reliably**.

Kafka is widely used in **microservices architectures**, **event sourcing**, and **real-time analytics**.

---

## How it works

Kafka works around a few core concepts:

### Broker

The **Kafka Broker** is the server that **receives, stores, and distributes messages**. Think of it as a central post office.

### Topic

A **Topic** is like a **mailbox labeled by subject** (e.g., `orders`, `notifications`). Producers send messages to topics, and consumers read from them.

### Producer

The **Producer** is the **sender of messages**, placing data into a specific topic.

### Consumer

The **Consumer** is the **receiver**, reading messages from the topic and processing them.

### Partition

A **Partition** is like an **internal queue inside a topic**, allowing messages to be read and written in parallel for higher throughput.

### ZooKeeper

The **ZooKeeper** acts as the **supervisor of the Kafka cluster**, keeping track of brokers, topics, and partitions. In newer Kafka versions, ZooKeeper can be optional.

---

## Metaphor: Kafka as a Futuristic Post Office

- **Producer -> Sender**: You drop your letters (messages) into a mailbox (topic).
- **Topic -> Mailbox**: Each topic is a mailbox for a specific category.
- **Partition -> Queue inside mailbox**: Multiple internal queues help handle lots of letters at once.
- **Broker -> Post Office**: The broker stores all the mail and ensures it gets delivered.
- **Consumer -> Receiver**: You pick up letters from the mailbox and read them.
- **ZooKeeper -> Supervisor**: Ensures the post office runs smoothly and knows which mailbox is where.

Just like in a post office, messages are **stored reliably**, multiple consumers can read them, and delivery can happen **in parallel and in order** per partition.

---

## How to Run the Example

### 1. Clone the repository

```bash
git clone https://github.com/JonasDias10/nodejs-kafka.git
cd nodejs-kafka
```

### 2. Start Project

```bash
docker-compose up --build
```
