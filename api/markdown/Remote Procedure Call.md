A remote procedure call (RPC) is a communication paradigm in which a program invokes a procedure that executes on a different address space, typically another machine on a network, as if it were a local call. The runtime marshals arguments, transmits them over a transport, executes the procedure remotely, and returns the result, hiding the underlying network mechanics from the caller. RPC underpins distributed systems and service-to-service communication, with modern frameworks adding streaming, code generation, and efficient binary serialisation.

### Overview

- RPC raises the level of abstraction above raw sockets so developers think in terms of function calls, not byte streams.
- A stub on the caller serialises arguments; a skeleton on the callee deserialises, executes, and replies.
- Modern frameworks generate this glue from an interface definition and use compact binary encodings.
- Because the network can fail, RPC must handle timeouts, retries, and partial failure that local calls never face.

### Mechanisms

- Interface definition languages specify procedures and message schemas.
- Marshalling and unmarshalling translate between in-memory objects and wire formats.
- Transports carry requests and responses, with optional streaming in either direction.
- Service discovery and load balancing route calls to healthy instances.

### Applications

- Internal service-to-service communication in microservice architectures.
- High-throughput backend APIs using binary RPC frameworks.
- Distributed consensus and coordination protocols built on request-reply.
- Cross-language integration where clients and servers are written in different stacks.

### Provenance

