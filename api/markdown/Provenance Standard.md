schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ProvenanceStandard
legacy_uri:: urn:visionclaw:concept:spatial-computing:provenance-standard
public:: true

# Provenance Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:241698c2e877707ac76d981ff10609089c0de9fbfefc47db6578429bfed7063d",
  "@type": "Page",
  "vc:slug": "provenance-standard",
  "title": "Provenance Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-authenticity",
      "vc:label": "Asset Authenticity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-standards",
      "vc:label": "Digital Asset Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-ae6480a1cfe2"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ProvenanceStandard"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10013"
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
      "vc:value": "Provenance Standard"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:provenance-standard"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:provenance-standard"
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
    "@id": "urn:visionflow:page:241698c2e877707ac76d981ff10609089c0de9fbfefc47db6578429bfed7063d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:provenance-standard",
  "@type": "Class",
  "label": "Provenance Standard",
  "definition": "Technical specifications and protocols for recording immutable ownership history and authenticity verification of digital assets through blockchain-based token IDs, contract addresses, and metadata that establish chain of custody from creation to present ownership.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset-standards",
      "label": "Digital Asset Standards"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:asset-authenticity",
        "label": "Asset Authenticity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:provenance-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:241698c2e877707ac76d981ff10609089c0de9fbfefc47db6578429bfed7063d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Authenticity]]",
      "resolved": "urn:visionflow:linked:asset-authenticity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Asset Standards]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:241698c2e877707ac76d981ff10609089c0de9fbfefc47db6578429bfed7063d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Technical specifications and protocols for recording immutable ownership history and authenticity verification of digital assets through blockchain-based token IDs, contract addresses, and metadata that establish chain of custody from creation to present ownership.

- ### Semantic Classification
  - owl-class:: spatial-computing:ProvenanceStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Asset Standards]]
  - enables:: [[Asset Authenticity]]

- ### Content

  - #### Verification Methods
		- Token ID and contract address lookup
		- Blockchain explorer verification (Etherscan)
		- NFT Ownership APIs for tracking
		- Provenance Blockchain identity verification
		- Metadata analysis for authenticity
  - #### Applications
		- LVMH blockchain authentication for luxury goods
		- Real estate NFT ownership records
		- Art provenance tracking
		- Supply chain authenticity verification
		- Forgery detection through historical analysis

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
