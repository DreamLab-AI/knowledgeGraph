Server push is an HTTP/2 mechanism that allows a server to proactively send resources to a client before the client explicitly requests them, anticipating what a page will need next. It reduces round-trip latency by eliminating the request phase for predictable secondary resources such as stylesheets or scripts. The related technique of Server-Sent Events uses a similar unidirectional push model over a persistent connection to stream updates to a client.

### Provenance

