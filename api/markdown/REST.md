public:: true

# REST
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:093c0f25e6cde6eae904d9f701e66595ee46f9db57aff86ff5bc81dba38c56d6",
  "@type": "Page",
  "vc:slug": "rest",
  "title": "REST",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:payment-protocol",
      "vc:label": "Payment Protocol"
    },
    {
      "@id": "urn:visionflow:linked:microservices",
      "vc:label": "Microservices"
    },
    {
      "@id": "urn:visionflow:linked:web-standards",
      "vc:label": "Web Standards"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ics-uci-edu-fielding-pubs-dissertation-rest-arch-style-htm",
      "vc:label": "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-glossary-rest",
      "vc:label": "https://developer.mozilla.org/en-US/docs/Glossary/REST"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "REST"
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
  "@id": "urn:ngm:class:rest",
  "@type": "Class",
  "label": "REST",
  "definition": "REST is an architectural style for distributed systems that uses stateless requests over HTTP and a uniform interface based on resources and standard methods.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-standards",
      "label": "Web Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-protocol",
        "label": "Payment Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rest:2e09d5210db8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:093c0f25e6cde6eae904d9f701e66595ee46f9db57aff86ff5bc81dba38c56d6"
  },
  "vc:resolutions": [
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Protocol]]",
      "resolved": "urn:visionflow:linked:payment-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Microservices]]",
      "resolved": "urn:visionflow:linked:microservices",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web Standards]]",
      "resolved": "urn:visionflow:linked:web-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm]]",
      "resolved": "urn:visionflow:linked:https-www-ics-uci-edu-fielding-pubs-dissertation-rest-arch-style-htm",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://developer.mozilla.org/en-US/docs/Glossary/REST]]",
      "resolved": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-glossary-rest",
      "kind": "StubLink"
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
  - REST is an architectural style for distributed systems that uses stateless requests over HTTP and a uniform interface based on resources and standard methods.

- ### Semantic Classification
  - owl-class:: distributed-systems:REST
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Web Standards]]
  - bridges-to:: [[Microservices]]
  - requires:: [[HTTP]]
  - enables:: [[Payment Protocol]]

- ### Content
  - REST, short for Representational State Transfer, was described by Roy Fielding and defines constraints such as statelessness, a uniform interface and resource-based addressing. Resources are identified by URLs and manipulated using standard HTTP methods.
  - RESTful APIs are a common integration mechanism for web and cloud services. They exchange representations of resources, frequently encoded as JSON, and rely on HTTP status codes to communicate outcomes.

- ### Provenance
  - sources:: [[https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm]], [[https://developer.mozilla.org/en-US/docs/Glossary/REST]]
  - migration-date:: 2026-05-29T00:00:00Z
