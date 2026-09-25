API key authentication is a simple scheme in which a client includes a static, secret key with each request to identify and authenticate itself to an API. The server checks the key against issued keys to grant or deny access and to attribute usage and rate limits. Although easy to adopt, it offers coarse-grained control and weaker security than token-based or signature-based schemes because the long-lived key alone confers access.

- [[Api Key Authentication]] identifies a client by a static secret key on each request; it implements [[Authentication]] for an [[API]] but contrasts with stronger schemes like [[Bearer Token]] and [[Mutual TLS]].

### Overview

- API keys are static secrets issued to clients and sent with each API call.
- The server validates the key to authenticate the caller and meter usage.
- They are simple to integrate but provide coarse, long-lived access.
- Best practice scopes, rotates, and rate-limits keys and never embeds them in clients.

### Mechanisms

- Issuance: the provider generates a unique key per client or project.
- Transmission: the key is sent in a header, query, or body field over TLS.
- Validation: the server matches the key and applies quotas and scopes.
- Rotation: keys are periodically replaced to limit exposure.
- Limitations: no per-request proof of possession; theft equals access.

### Applications

- Authenticating server-to-server API calls.
- Metering and rate-limiting third-party API usage.
- Gating access to public data and SDK endpoints.
- Bootstrapping integrations before adopting stronger token flows.

### Provenance

