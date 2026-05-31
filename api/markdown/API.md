public:: true

# API
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f63117566be4bef2fe6f40b9da2842486b5769664591a718b9928abae0dcb4d",
  "@type": "Page",
  "vc:slug": "api",
  "title": "API",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:interoperability-standards",
      "vc:label": "Interoperability Standards"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "API"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api",
  "@type": "Class",
  "label": "API",
  "definition": "An Application Programming Interface, a defined set of operations, inputs and outputs through which software components or services communicate without exposing their internal implementation.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:communication-protocols",
        "label": "Communication Protocols"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:api:14c2529eb449",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8f63117566be4bef2fe6f40b9da2842486b5769664591a718b9928abae0dcb4d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability Standards]]",
      "resolved": "urn:visionflow:linked:interoperability-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An Application Programming Interface, a defined set of operations, inputs and outputs through which software components or services communicate without exposing their internal implementation.

- ### Semantic Classification
  - owl-class:: general:API
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Software Engineering]]
  - bridges-to:: [[HTTP]], [[Interoperability Standards]]
  - requires:: [[Communication Protocols]]
  - enables:: [[Interoperability]]

- ### Content
  - An API specifies the contract by which one piece of software requests services from another, defining available operations, the structure of requests and responses, and expected behaviour. By hiding internal details behind a stable interface, it lets independently developed components interoperate and evolve.
  - Web APIs are commonly exposed over HTTP using styles such as REST, with data encoded in formats like JSON. Well-designed APIs support versioning, authentication and clear error semantics, and are a foundation for integration between systems and services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
