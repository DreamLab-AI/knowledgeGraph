schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#Erc721Token
legacy_uri:: urn:visionclaw:concept:blockchain:erc721-token
public:: true

# ERC721 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8",
  "@type": "Page",
  "vc:slug": "erc721-token",
  "title": "ERC721 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:non-fungible-token",
      "vc:label": "Non Fungible Token"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "vc:value": "sha256-12-4da344f0c453"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#Erc721Token"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0516"
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
      "vc:value": "ERC721 Token"
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
      "vc:value": "urn:visionclaw:concept:blockchain:erc721-token"
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
      "vc:value": "urn:visionclaw:concept:blockchain:erc721-token"
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
    "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:erc721-token",
  "@type": "Class",
  "label": "ERC721 Token",
  "definition": "A non-fungible token implementing the ERC-721 standard, a free, open standard for building unique tokens on ereum blockchain with trackable ownership via token identification numbers and ownerOf function.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:non-fungible-token",
      "label": "Non Fungible Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc721-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Non Fungible Token]]",
      "resolved": "urn:visionflow:linked:non-fungible-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2780a532b4dc920b658dbcd520d4ef1f3f5290b1a9603747dce6d8492e0d2da8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A non-fungible token implementing the ERC-721 standard, a free, open standard for building unique tokens on Ethereum blockchain with trackable ownership via token identification numbers and ownerOf function.

- ### Semantic Classification
  - owl-class:: blockchain:ERC721Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Non Fungible Token]]

- ### Content
  ERC-721 Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
