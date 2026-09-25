HATEOAS, hypermedia as the engine of application state, is the REST constraint requiring that a client interact with an application entirely through hypermedia links and controls supplied dynamically by the server in its responses. Rather than hard-coding endpoint structures, the client discovers available actions and transitions at runtime by following links the server provides, mirroring how a browser navigates the web. This constraint decouples clients from fixed URI schemes and is the distinguishing feature of a fully RESTful, self-describing API.

### Overview

- In a HATEOAS-compliant API, a response not only carries data but also the links and controls describing what the client may do next.
- This mirrors web browsing: a person follows links discovered on each page rather than memorising URL structures.
- Because transitions come from the server, clients tolerate URI changes and new capabilities without redeployment.
- HATEOAS is the highest level of the Richardson maturity model for REST APIs.

### Key aspects

- Hypermedia controls: links and forms embedded in representations define legal state transitions.
- Runtime discovery: clients navigate the API by following links, not by prior knowledge of endpoints.
- Decoupling: servers may evolve their URI space while clients keep working through link relations.
- Self-description: media types and link relations make responses understandable without out-of-band documentation.

### Applications

- Long-lived public APIs that must evolve without breaking existing clients.
- Workflow and process APIs where available next steps depend on current resource state.
- Hypermedia formats such as HAL, JSON:API and Siren that operationalise the constraint.
- Service ecosystems prioritising loose coupling and discoverability.

### Provenance

