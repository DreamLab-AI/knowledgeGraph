public:: true

# API Specification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-api-specification",
  "@type": "Page",
  "vc:slug": "api-specification",
  "title": "API Specification",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api-specification",
  "@type": "Class",
  "label": "API Specification",
  "definition": "An API Specification is a formal, machine-readable document that precisely defines the interface contract of a software API, including its endpoints, request and response schemas, authentication requirements, and error codes. It enables automated tooling such as code generation, validation, and interactive documentation to be derived directly from a single source of truth. Common specification formats include OpenAPI, AsyncAPI, and GraphQL SDL.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:web-services", "label": "Web Services"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - A formal document describing an API's interface contract — endpoints, schemas, authentication, and error codes — enabling automated tooling, code generation, and documentation.
