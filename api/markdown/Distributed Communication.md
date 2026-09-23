
Distributed communication is the exchange of messages between processes running on separate machines across a network, forming the substrate of distributed systems. It encompasses paradigms such as remote procedure calls, message queues, publish-subscribe, and streaming, each managing serialisation, addressing, ordering, and failure handling. Middleware abstracts these mechanics so application components can interact reliably despite network partitions and latency.

- ### Content
  - Common models include synchronous RPC/gRPC, asynchronous message queues, and pub-sub event buses, each trading latency, coupling, and delivery guarantees. Designers must address serialisation formats, idempotency, back-pressure, and partial-failure semantics, since the network is unreliable and messages can be lost, duplicated, or reordered.

