schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#Erc20Token
legacy_uri:: urn:visionclaw:concept:blockchain:erc20-token
public:: true

# ERC20 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0",
  "@type": "Page",
  "vc:slug": "erc20-token",
  "title": "ERC20 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:fungible-token",
      "vc:label": "Fungible Token"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Virtual Economy]], [[DID Nostr Identity]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-489ec79c407c"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#Erc20Token"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0515"
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
      "vc:value": "ERC20 Token"
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
      "vc:value": "urn:visionclaw:concept:blockchain:erc20-token"
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
      "vc:value": "urn:visionclaw:concept:blockchain:erc20-token"
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
    "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:erc20-token",
  "@type": "Class",
  "label": "ERC20 Token",
  "definition": "A fungible token implementing the ERC-20 standard on ereum blockchain. The most widely used ereum token standard providing uniform API for token operations within smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc20-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:fungible-token",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A fungible token implementing the ERC-20 standard on Ethereum blockchain. The most widely used Ethereum token standard providing uniform API for token operations within smart contracts.

- ### Semantic Classification
  - owl-class:: blockchain:ERC20Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Fungible Token]]

- ### Content
  ERC-20 Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
