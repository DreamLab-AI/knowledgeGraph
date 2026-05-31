public:: true

# TypeScript
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ce5e3912e70101a60f278a73b4d30f085d209b152de076da4280a75b9085e94",
  "@type": "Page",
  "vc:slug": "type-script",
  "title": "TypeScript",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
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
      "vc:value": "TypeScript"
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
  "@id": "urn:ngm:class:type-script",
  "@type": "Class",
  "label": "TypeScript",
  "definition": "A statically typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript and adds optional type annotations and compile-time checking.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:programming-language",
        "label": "Programming Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:type-script:6348933a3b3c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ce5e3912e70101a60f278a73b4d30f085d209b152de076da4280a75b9085e94"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
      "kind": "ResolvedLink"
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
  - A statically typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript and adds optional type annotations and compile-time checking.

- ### Semantic Classification
  - owl-class:: general:TypeScript
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Software Engineering]]
  - requires:: [[Programming Language]]
  - enables:: [[Software Engineering]]

- ### Content
  - TypeScript extends JavaScript with an optional static type system, interfaces, generics and richer tooling. Code is type-checked at compile time and then transpiled to standard JavaScript that runs in any JavaScript environment, so adoption can be incremental within existing codebases.
  - The type system helps catch errors before runtime, improves editor support such as autocompletion and refactoring, and documents intended interfaces. It has become a common choice for large web and server applications built on the JavaScript ecosystem.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
