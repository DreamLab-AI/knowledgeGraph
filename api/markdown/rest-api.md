- ### Definition
  - A REST API (Representational State Transfer Application Programming Interface) is a web service interface architected around the six REST constraints—client–server separation, statelessness, cacheability, uniform interface, layered system, and optional code-on-demand—that collectively enable scalable, evolvable distributed systems. Resources are addressed by IRIs, manipulated via standard HTTP verbs (GET, POST, PUT, PATCH, DELETE), and represented in negotiated formats such as JSON or XML. In AI infrastructure, REST APIs serve as the primary integration surface between model inference servers, orchestration platforms, and downstream applications, exposing endpoints for prediction, model management, dataset ingestion, and telemetry collection in a language-agnostic, horizontally scalable manner.

- ### Semantic Classification
  - owl-class:: rest-api:REST API
  - owl-role:: Concept

- ### Relationships
  - implements [[Web Standard]]
  - implements [[API Standard]]
  - enables [[Microservices Architecture]]
  - uses [[json]]
  - uses [[Software Architecture]]

- ### Content
  - REST APIs adhere to Roy Fielding's architectural style described in his 2000 dissertation. The uniform interface constraint—comprising resource identification via URIs, resource manipulation through representations, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS)—enables client–server decoupling and independent evolution. In practice, most so-called REST APIs implement only the first three of Fielding's constraints and omit HATEOAS, a pragmatic simplification that trades evolvability for implementation simplicity.
  - In AI and data infrastructure, REST APIs are the dominant integration pattern: model serving frameworks such as TorchServe, BentoML, and Triton Inference Server expose standardised REST endpoints for synchronous prediction requests; orchestration platforms such as Kubeflow Pipelines and MLflow expose REST APIs for pipeline management; and cloud AI services (OpenAI, Google Vertex AI, AWS SageMaker) are accessed exclusively via REST. The OpenAI Chat Completions API has become a de facto standard REST interface for LLM access, adopted by many alternative inference providers as a compatibility target.
  - REST APIs are specified using OpenAPI (formerly Swagger), a machine-readable description language for HTTP APIs that enables automatic generation of client SDKs, interactive documentation, and validation middleware. Alternatives to REST for specialised use cases include GraphQL (flexible query-driven schema), gRPC (binary protocol with schema-first design, preferred for high-throughput microservice communication), and WebSocket (bidirectional streaming, used for token-streaming LLM responses). Despite these alternatives, REST remains the default choice for public-facing AI APIs due to its ubiquity, tooling maturity, and compatibility with HTTP infrastructure including caches, proxies, and API gateways.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z