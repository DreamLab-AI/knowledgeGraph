public:: true

# API Lifecycle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e783eeba7ecb3168bd6166ec7bee1c2ba0a2e6e40cff06b5417568c39e7e96c3",
  "@type": "Page",
  "vc:slug": "api-lifecycle",
  "title": "API Lifecycle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:api-management",
      "vc:label": "API Management"
    },
    {
      "@id": "urn:visionflow:linked:api-versioning",
      "vc:label": "API Versioning"
    },
    {
      "@id": "urn:visionflow:linked:api-design",
      "vc:label": "API Design"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api-lifecycle",
  "@type": "Class",
  "label": "API Lifecycle",
  "definition": "The end-to-end progression of an application programming interface from design and specification through implementation, publication, versioning, monitoring, deprecation, and eventual retirement. Managing the API lifecycle as a deliberate process — with contract-first design, semantic versioning, sunset policies, and consumer migration paths — is what keeps evolving service interfaces stable for the clients that depend on them.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:api-management",
    "label": "API Management"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      },
      {
        "@id": "urn:ngm:class:api-versioning",
        "label": "API Versioning"
      },
      {
        "@id": "urn:ngm:class:deprecation",
        "label": "Deprecation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:semantic-versioning",
        "label": "Semantic Versioning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The end-to-end progression of an application programming interface from design and specification through implementation, publication, versioning, monitoring, deprecation, and eventual retirement. Managing the API lifecycle as a deliberate process — with contract-first design, semantic versioning, sunset policies, and consumer migration paths — is what keeps evolving service interfaces stable for the clients that depend on them."

- ### Semantic Classification
  - owl-class:: infrastructure:ApiLifecycle
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[API Management]]
  - has-part:: [[API Versioning]]
  - has-part:: [[API Design]]

- ### Content

  ## Definition

  The **API Lifecycle** is the full arc an application programming interface travels from first sketch to final switch-off. Unlike a one-off release, an API is a *contract* with external consumers, so its evolution has to be managed as a sequence of deliberate stages: design and specification, mocking and review, implementation and testing, publication and onboarding, operation and monitoring, versioned evolution, deprecation, and retirement. Each stage has its own artefacts (OpenAPI or AsyncAPI specifications, changelogs, sunset headers) and its own stakeholders (producers, consumers, platform teams).

  The lifecycle begins with [[API Design]] — ideally contract-first, where the specification is written, reviewed, and mocked before any implementation exists, so consumers can integrate against a stable interface early. Publication brings the API under [[API Management]] infrastructure: gateways enforce authentication, rate limits, and policy; developer portals handle documentation and key issuance; analytics track adoption and latency.

  The middle of the lifecycle is dominated by change management. [[API Versioning]] strategies (URI versions, header negotiation, additive-only evolution) let producers ship improvements without breaking existing clients, guided by compatibility rules such as semantic versioning. The lifecycle ends with deprecation and retirement: announcing sunset dates, emitting deprecation signals in responses, monitoring residual traffic, and finally decommissioning the endpoint once consumers have migrated.

  ## Technical Details

  **Canonical stages**:
  - **Design** — requirements, resource modelling, specification (OpenAPI/AsyncAPI/GraphQL schema), style-guide linting, mock servers.
  - **Develop and test** — implementation against the contract, contract testing (e.g. consumer-driven contracts), security review.
  - **Publish** — gateway registration, documentation portal, credential issuance, service-level objectives.
  - **Operate** — observability (latency, error rates, usage per consumer), throttling, incident response.
  - **Evolve** — versioned releases, backward-compatibility checks in CI, changelog discipline.
  - **Deprecate and retire** — sunset policy (RFC 8594 Sunset header, RFC 9745 Deprecation header), consumer notification, traffic drain, removal.

  **Practice notes**: mature platforms encode lifecycle state (draft, beta, general availability, deprecated, retired) as first-class metadata in their API catalogue, and gate transitions with automated checks — a breaking-change detector comparing successive specifications is the single highest-value control. Deprecation windows are typically six to twenty-four months for public APIs, and telemetry on per-consumer usage is what makes retirement safe rather than speculative. The lifecycle concept applies equally to REST, GraphQL, gRPC, and event-driven interfaces; only the contract artefacts differ.

  ## Current Landscape

  - **RFC 9745 standardised the Deprecation header (March 2025)**: The IETF published "The Deprecation HTTP Response Header Field", giving the deprecation signal formal standing alongside the older RFC 8594 Sunset header (May 2019). The two are designed to work together — Deprecation signals a resource is still available but no longer recommended; Sunset signals the date it will cease to exist.
  - **Format detail**: RFC 9745's Deprecation value is a Structured Field Date (RFC 9651), a Unix timestamp prefixed with `@`; the Sunset value is an IMF-fixdate HTTP-date. The Sunset timestamp must not be earlier than the Deprecation date, and both are paired with a `Link` header (RFC 8288, `rel="deprecation"`) pointing to human-readable migration docs.
  - **Retirement convention**: At the sunset date, return `410 Gone` for permanently removed resources rather than `404 Not Found`, so clients can distinguish deliberate retirement from an error.
  - **OpenAPI catching up**: OpenAPI 3.x already supports `deprecated: true` on operations and fields; an active OpenAPI 3.3/3.x proposal (2026) would add API-level `deprecationDate`, `sunsetDate`, and migration URLs mapping directly to the RFC 9745/8594/8288 headers.
  - **Finer granularity emerging**: an IETF draft (`application/deprecations+json`, 2026) proposes a machine-readable Deprecation Manifest to describe the lifecycle of individual fields within request/response bodies, which the resource-level headers cannot express.

  **Sources**:
  - https://www.rfc-editor.org/rfc/rfc9745.txt
  - https://apiguide.dev/guides/deprecation-sunsetting/
  - https://github.com/OAI/OpenAPI-Specification/discussions/5193
