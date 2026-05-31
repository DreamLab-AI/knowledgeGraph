public:: true

# Global Digital Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a49a735ac8281b894082a85480d0a937965950a33d2df054882bd6834a58bbb2",
  "@type": "Page",
  "vc:slug": "global-digital-finance",
  "title": "Global Digital Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Global Digital Finance"
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
  "@id": "urn:ngm:class:global-digital-finance",
  "@type": "Class",
  "label": "Global Digital Finance",
  "definition": "An industry membership association that develops voluntary standards and codes of conduct for digital assets and engages with policymakers on their regulation.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:global-digital-finance:c5212e9fadbf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a49a735ac8281b894082a85480d0a937965950a33d2df054882bd6834a58bbb2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:linked:standards-body",
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
  - An industry membership association that develops voluntary standards and codes of conduct for digital assets and engages with policymakers on their regulation.

- ### Semantic Classification
  - owl-class:: blockchain:GlobalDigitalFinance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - bridges-to:: [[Standards Body]]
  - requires:: [[Digital Asset]]
  - enables:: [[Cryptocurrency]]

- ### Content
  - Global Digital Finance is a membership body for participants in the digital asset and cryptocurrency sector. It convenes working groups that produce codes of conduct, taxonomy and best practice guidance intended to promote responsible adoption.
  - The association also engages with regulators and standard setters to inform policy on digital assets, acting as a coordinating point between industry participants and public authorities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
