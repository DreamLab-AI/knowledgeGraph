schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#MultiPartyRoyalties
legacy_uri:: urn:visionclaw:concept:spatial-computing:multi-party-royalties
public:: true

# Multi Party Royalties
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df0842eeef90a7c1607ec32441047ce21fa77d6e1a6797e86f46ddc533670fcd",
  "@type": "Page",
  "vc:slug": "multi-party-royalties",
  "title": "Multi Party Royalties",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:creator-economy",
      "vc:label": "Creator Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:revenue-sharing",
      "vc:label": "Revenue Sharing"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2b92ae4ad4b4"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#MultiPartyRoyalties"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9975"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi Party Royalties"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:multi-party-royalties"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:multi-party-royalties"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df0842eeef90a7c1607ec32441047ce21fa77d6e1a6797e86f46ddc533670fcd@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:multi-party-royalties",
  "@type": "Class",
  "label": "Multi Party Royalties",
  "definition": "A blockchain-based distribution mechanism that uses smart contracts to automatically split and distribute royalty payments among multiple stakeholders including creators, collaborators, developers, and brands based on predefined ownership percentages.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:revenue-sharing",
      "label": "Revenue Sharing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:multi-party-royalties:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df0842eeef90a7c1607ec32441047ce21fa77d6e1a6797e86f46ddc533670fcd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Creator Economy]]",
      "resolved": "urn:visionflow:owl:class:creator-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Revenue Sharing]]",
      "resolved": "urn:visionflow:owl:class:revenue-sharing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df0842eeef90a7c1607ec32441047ce21fa77d6e1a6797e86f46ddc533670fcd@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A blockchain-based revenue distribution mechanism that uses smart contracts to automatically split and distribute royalty payments among multiple stakeholders including creators, collaborators, developers, and brands based on predefined ownership percentages.

- ### Semantic Classification
  - owl-class:: spatial-computing:MultiPartyRoyalties
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Revenue Sharing]]
  - enables:: [[Creator Economy]]

- ### Content

  - #### Technical Details
		- Implemented through split contracts that execute automatic distribution
		- Uses ERC-2981 royalty standard for marketplace compatibility
		- Supports platforms including Ethereum, Solana, and Polygon
		- Typical royalty rates range from 2.5% to 10% on secondary sales
		- Tracks sales figures, calculates fees, and monitors compliance
  - #### Challenges
		- Lack of universal royalty enforcement across marketplaces
		- Some platforms have moved to royalty-optional models
		- Cross-platform royalty parameter inconsistency
		- Interoperability issues when NFTs transfer between platforms

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
