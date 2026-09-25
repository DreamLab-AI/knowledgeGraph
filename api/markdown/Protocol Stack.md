A protocol stack is the layered set of network protocols that cooperate to provide communication services, where each layer offers services to the layer above and uses services of the layer below. Canonical examples are the OSI seven-layer model and the TCP/IP suite. Layering isolates concerns such as physical transmission, routing, transport reliability, and application semantics, enabling modular interoperable networking.

### Content

- In the TCP/IP model, the link layer handles local frame delivery, the internet layer (IP) routes packets across networks, the transport layer (TCP/UDP) provides end-to-end delivery and optional reliability, and the application layer carries protocols such as HTTP. Encapsulation wraps higher-layer data in lower-layer headers, and well-defined interfaces between layers let implementations evolve independently while preserving interoperability.

