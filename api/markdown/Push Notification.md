
A push notification is a server-initiated message delivered to a client device or application without an explicit client request, enabling real-time alerts about events, state changes, or incoming communications. It relies on persistent connections or platform push services that maintain a delivery channel even when the application is backgrounded. It is a foundational primitive for presence, messaging, and event-driven user engagement.

- ### Content
  - Delivery typically flows through platform services (APNs, FCM, Web Push) or persistent WebSocket/SSE channels. Key design concerns include token registration, delivery guarantees, throttling, and privacy of notification payloads, which may be encrypted end-to-end to prevent intermediaries from reading content.

