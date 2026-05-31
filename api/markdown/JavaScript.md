public:: true

# JavaScript
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c57050455ebb7fb5bf2774aedd6fdbcbe835b3832a6179a17d4a7429054cf27f",
  "@type": "Page",
  "vc:slug": "java-script",
  "title": "JavaScript",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "JavaScript"
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
  "@id": "urn:ngm:class:java-script",
  "@type": "Class",
  "label": "JavaScript",
  "definition": "JavaScript is a high-level programming language standardised as ECMAScript, originally created for web browsers and now used for client-side, server-side, and tooling code.",
  "domain": "software-engineering",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:java-script:2d1ae8e7aa29",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c57050455ebb7fb5bf2774aedd6fdbcbe835b3832a6179a17d4a7429054cf27f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
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
  - JavaScript is a high-level programming language standardised as ECMAScript, originally created for web browsers and now used for client-side, server-side, and tooling code.

- ### Semantic Classification
  - owl-class:: software-engineering:JavaScript
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Programming Language]]

- ### Content
  - JavaScript was created in 1995 and standardised as ECMAScript. It is a dynamically typed language with first-class functions and prototype-based objects, and it is the primary scripting language executed by web browsers.
  - Through runtimes such as Node.js it also runs outside the browser for server-side and command-line use. A large ecosystem of libraries and frameworks supports its use in web and application development.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
