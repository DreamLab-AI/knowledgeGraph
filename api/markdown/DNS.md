public:: true

# DNS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0c1ddf454d53616d915ac7f901802a039a9045e62f0d6a17bed5b6afd2a7aaa",
  "@type": "Page",
  "vc:slug": "dns",
  "title": "DNS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DNS"
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
  "@id": "urn:ngm:class:dns",
  "@type": "Class",
  "label": "DNS",
  "definition": "The Domain Name System, a hierarchical and distributed naming system that resolves human-readable domain names into IP addresses and other resource records.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:application-layer",
      "label": "Application Layer"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dns:dd75a9d6fb30",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f0c1ddf454d53616d915ac7f901802a039a9045e62f0d6a17bed5b6afd2a7aaa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
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
  - The Domain Name System, a hierarchical and distributed naming system that resolves human-readable domain names into IP addresses and other resource records.

- ### Semantic Classification
  - owl-class:: general:DNS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Application Layer]]
  - bridges-to:: [[Communication Protocols]]
  - requires:: [[Network Protocol]]
  - enables:: [[HTTP]]

- ### Content
  - DNS is a globally distributed database that maps domain names to IP addresses and other records through a hierarchy of authoritative name servers rooted at the DNS root zone. Resolvers query this hierarchy, often using caching, to translate a name such as a website address into the numeric address needed to establish a connection.
  - The system underpins almost all internet usage because users and applications reference services by name rather than address. Extensions such as DNSSEC add cryptographic authentication of records to mitigate spoofing and cache poisoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
