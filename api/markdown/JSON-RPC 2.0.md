JSON-RPC 2.0 is a lightweight, transport-agnostic remote procedure call protocol that encodes method invocations and responses as JSON objects. It defines request, response, notification and batch message structures along with a standard error object, while leaving the transport layer unspecified. Its simplicity has made it the wire format for many blockchain node APIs and AI tool-invocation protocols.

### Content

- A request specifies a method name, structured parameters and an id; the server returns a result or a typed error keyed to that id, with notifications omitting the id for fire-and-forget calls. Because it is transport-neutral, JSON-RPC runs over HTTP, WebSockets or stdio, which is why it was adopted as the message layer for tooling and node interfaces alike.

