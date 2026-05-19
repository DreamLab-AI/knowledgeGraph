schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#VerifiableDataRegistry
legacy_uri:: urn:visionclaw:concept:infrastructure:verifiable-data-registry
public:: true

# Verifiable Data Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833",
  "@type": "Page",
  "vc:slug": "verifiable-data-registry",
  "title": "Verifiable Data Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:data-registry",
      "vc:label": "Data Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-48c96b710bbd"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#VerifiableDataRegistry"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10101"
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
      "vc:value": "Verifiable Data Registry"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:verifiable-data-registry"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:verifiable-data-registry"
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
    "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:verifiable-data-registry",
  "@type": "OntologyClass",
  "label": "Verifiable Data Registry",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:data-registry",
      "vc:label": "Data Registry"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:verifiable-data-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Registry]]",
      "resolved": "urn:visionflow:owl:class:data-registry",
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
    "@id": "urn:visionflow:page:17a86a6c77e245855b102e70e6d93214ae4266727a2e664829e49acade190833@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A system that mediates the creation, verification, and resolution of decentralized identifiers and verifiable credentials, typically implemented as a blockchain, distributed ledger, or decentralized network for storing public key and revocation information.

- ### Semantic Classification
  - owl-class:: infrastructure:VerifiableDataRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Registry]]

- ### Content

  - ## Overview
  - Verifiable data registries provide the infrastructure for resolving DIDs to their associated documents containing public keys and service endpoints. These registries enable verification of credentials without requiring direct issuer contact.
  - ## Technical Details
  - ### Registry Functions
		- DID document storage and resolution
		- Public key anchoring
		- Revocation status tracking
		- Schema and context hosting
  - ### Implementation Types
		- **Blockchain-based**: Ethereum, Bitcoin, Hyperledger
		- **Distributed Ledger**: IOTA, Hedera Hashgraph
		- **Decentralized Storage**: IPFS, Ceramic Network
		- **Web-based**: did:web method using DNS
  - ### Key Properties
		- Immutability of historical records
		- Public accessibility for verification
		- Decentralized control
		- Cryptographic security
  - ## Applications
  - Metaverse identity resolution
  - Credential revocation checking
  - Cross-platform identity interoperability
  - Decentralized PKI infrastructure
  - Trust registry for issuers

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
