schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#Erc1155Token
legacy_uri:: urn:visionclaw:concept:blockchain:erc1155-token
public:: true

# ERC1155 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607",
  "@type": "Page",
  "vc:slug": "erc1155-token",
  "title": "ERC1155 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:semi-fungible-token",
      "vc:label": "Semi-Fungible Token"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8a1e5bc07777"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#Erc1155Token"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0517"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC1155 Token"
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
      "vc:value": "urn:visionclaw:concept:blockchain:erc1155-token"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:erc1155-token"
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
    "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:erc1155-token",
  "@type": "Class",
  "label": "ERC1155 Token",
  "definition": "A multi-token standard offering semi-fungibility where tokens represent classes of interchangeable assets. Bundles multiple assets (fungible and non-fungible) in one smart contract for efficient gas usage and reduced network congestion.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:semi-fungible-token",
      "label": "Semi-Fungible Token"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc1155-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semi-Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:semi-fungible-token",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:195a330b7a502361b814aa6df64e5b7fe9c2d0fa017e0ba7fd614d6f91ae4607@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A multi-token standard offering semi-fungibility where tokens represent classes of interchangeable assets. Bundles multiple assets (fungible and non-fungible) in one smart contract for efficient gas usage and reduced network congestion.

- ### Semantic Classification
  - owl-class:: blockchain:ERC1155Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Semi-Fungible Token]]

- ### Content
  ERC-1155 Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
