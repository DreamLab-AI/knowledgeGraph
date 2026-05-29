- ### Definition
  - [[Message Passing]] is a communication paradigm in which processes or components interact by sending and receiving discrete messages rather than sharing memory, enabling [[Distributed Computing]] with strong [[Asynchronous Communication]] and decoupling properties.

- ### Relationships
  - Message passing underpins [[Event Driven Architecture]] and actor-based concurrency systems, relying on [[Message Queue]] infrastructure and [[Middleware]] layers to route, buffer, and deliver messages. It supports [[Distributed Architecture]] patterns in [[Distributed System]] deployments and is the primary mechanism for [[Inter-Agent Communication]] in multi-agent AI frameworks.

- ### Content
  - Message passing emerged from early time-sharing operating systems and formal models of concurrent computation. Carl Hewitt's Actor Model (1973) codified the concept: actors communicate exclusively through asynchronous messages, holding no shared state. Erlang's implementation of this model in the 1980s proved the paradigm at scale in telecoms, achieving nine-nines reliability through isolated, message-passing processes.

  - In practice, a sender constructs a message containing a payload and routing metadata, then dispatches it to a named destination — a mailbox, topic, queue, or channel — without blocking on receipt. The receiving process dequeues the message when it is ready, processes it, and may emit further messages. Synchronous variants block the sender until an acknowledgment arrives; request-reply patterns impose RPC-style semantics on top of asynchronous primitives.

  - Message passing is the architectural backbone of microservice systems, distributed AI agent frameworks, and cloud-native applications. Brokers such as Apache Kafka, RabbitMQ, and NATS provide durable, ordered message delivery at scale. The paradigm eliminates shared-memory race conditions, enables horizontal scaling, supports fault isolation, and allows components to evolve independently because they couple only through message schemas.

  - In 2024-2025, message passing remains central to large-scale AI orchestration: multi-agent systems coordinate tool calls and observations through structured message buses; LLM inference servers handle concurrent requests via internal message-passing runtimes; and the Model Context Protocol (MCP) standardises JSON-RPC message exchange between AI assistants and tool servers. Research interest focuses on formal verification of message-passing protocols and on reducing latency jitter in high-frequency trading and real-time control systems.