public:: true

# Polkadot Parachains
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:95aaa543560c9f8762346df81c33152e63f444921d9a41fe5a950b79b33c865e",
  "@type": "Page",
  "vc:slug": "polkadot-parachains",
  "title": "Polkadot Parachains",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:polkadot",
      "vc:label": "Polkadot"
    },
    {
      "@id": "urn:visionflow:linked:web3-foundation",
      "vc:label": "Web3 Foundation"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Polkadot Parachains"
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
  "@id": "urn:ngm:class:polkadot-parachains",
  "@type": "Class",
  "label": "Polkadot Parachains",
  "definition": "Application-specific blockchains that connect to and are secured by the Polkadot Relay Chain, enabling interoperability and shared security across heterogeneous blockchain networks.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
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
  "@id": "urn:visionflow:annotation:link-resolutions:polkadot-parachains:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:95aaa543560c9f8762346df81c33152e63f444921d9a41fe5a950b79b33c865e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Polkadot]]",
      "resolved": "urn:visionflow:linked:polkadot",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web3 Foundation]]",
      "resolved": "urn:visionflow:linked:web3-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
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
  - Application-specific blockchains that connect to and are secured by the Polkadot Relay Chain, enabling interoperability and shared security across heterogeneous blockchain networks.

- ### Semantic Classification
  - owl-class:: blockchain:PolkadotParachains
  - owl-role:: Process
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Content
  Polkadot Parachains — content pending enrichment.

- ### Provenance
  - sources:: [[Polkadot]], [[Web3 Foundation]]
  - migration-date:: 2026-04-26T00:00:00Z
