
A webhook is an event-driven integration mechanism in which a server sends an HTTP request to a pre-registered URL when a specified event occurs, pushing data to consumers instead of requiring them to poll. It enables loosely coupled, near-real-time communication between web services and is a standard pattern for notifications, CI triggers, and payment events. Reliability concerns are addressed through retries, idempotency keys, and signature verification.

- ### In Plain Terms
  - An automatic alert one service sends to another the instant something happens — like your phone buzzing the moment a payment lands, rather than you checking your bank every five minutes. It lets your tools react to events straight away instead of constantly asking 'anything new yet?'.
- ### Content
  - The provider registers a consumer endpoint and POSTs a payload on each event; robust implementations sign payloads (e.g. HMAC), retry with exponential backoff on failure, and expect consumers to respond quickly and deduplicate by event ID. Webhooks trade the simplicity of polling for lower latency and load, at the cost of requiring publicly reachable, secured receiver endpoints.

