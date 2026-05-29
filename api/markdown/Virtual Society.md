public:: true

# Virtual Society
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6e403c0775309efdf6ef25cfb6810c52207cdf344b78da25db87a518e7108054",
  "@type": "Page",
  "vc:slug": "virtual-society",
  "title": "Virtual Society",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:social-structure",
      "vc:label": "Social Structure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Society"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:virtual-society",
  "@type": "Class",
  "label": "Virtual Society",
  "definition": "An organised social structure emerging within virtual worlds and metaverse platforms, comprising the norms, governance mechanisms, economic systems, communities, and social interactions of persistent digital environments. Virtual societies exhibit properties analogous to physical societies — ownership, law, culture, and commerce — mediated through digital platforms, avatars, and blockchain-based economies.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:social-structure",
      "label": "Social Structure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:virtual-economy", "label": "Virtual Economy"},
      {"@id": "urn:ngm:class:virtual-world", "label": "Virtual World"},
      {"@id": "urn:ngm:class:community-governance", "label": "Community Governance"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:virtual-currency", "label": "Virtual Currency"},
      {"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"},
      {"@id": "urn:ngm:class:community-standards", "label": "Community Standards"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-world-platform", "label": "Virtual World Platform"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"},
      {"@id": "urn:ngm:class:cross-metaverse-commerce", "label": "Cross Metaverse Commerce"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-commerce", "label": "Digital Commerce"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-society:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6e403c0775309efdf6ef25cfb6810c52207cdf344b78da25db87a518e7108054"
  },
  "vc:resolutions": [
    {
      "raw": "[[Social Structure]]",
      "resolved": "urn:visionflow:linked:social-structure",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A virtual society component in the Metaverse domain that enables VirtualWorld.

- ### Semantic Classification
  - owl-class:: spatial-computing:Virtualsociety
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Social Structure]]

- ### Content
  VirtualSociety — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
