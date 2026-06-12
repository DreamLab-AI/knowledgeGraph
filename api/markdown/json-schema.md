- ### Definition
  - JSON Schema is an IETF-standardised declarative vocabulary for annotating and validating the structure, data types, required fields, and value constraints of JSON documents. It enables machine-readable contracts between API producers and consumers by expressing rules such as property types, enumerated values, pattern matching, minimum/maximum boundaries, and composition via allOf, anyOf, and oneOf combiners. JSON Schema is widely used in REST API description languages, configuration file validation, and as the basis for verifiable credential schemas in decentralised identity systems.

- ### Semantic Classification
  - owl-class:: json-schema:JSON Schema
  - owl-role:: Concept

- ### Relationships
  - requires [[JSON Data Interchange Format]]
  - enables [[REST API]]
  - enables [[Credential Schema]]
  - relatedTo [[JSON-LD]]
  - relatedTo [[Data Format]]

- ### Content
  - JSON Schema is defined through a series of IETF Internet-Drafts, with the 2020-12 draft being the most widely implemented version at the time of writing. A schema document is itself a JSON object that describes the permitted shape of instance data. Keywords such as `type`, `properties`, `required`, `additionalProperties`, `format`, `pattern`, `minimum`, and `maximum` cover the majority of structural validation needs.
  - Tooling ecosystems are mature across most programming languages: libraries such as ajv (JavaScript), jsonschema (Python), and NetworkNT json-schema-validator (Java) perform keyword evaluation against instance documents. OpenAPI 3.x embeds JSON Schema as its mechanism for describing request and response bodies, making it ubiquitous in web API development. AsyncAPI extends the same approach to event-driven architectures.
  - In the decentralised identity space, the W3C Verifiable Credentials specification uses JSON Schema (alongside JSON-LD contexts) to validate credential subject properties, ensuring interoperability between issuers and verifiers. Configuration management tools such as Kubernetes CRD validation and Helm chart value validation also rely on JSON Schema, demonstrating its breadth beyond data interchange into infrastructure-as-code workflows.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z