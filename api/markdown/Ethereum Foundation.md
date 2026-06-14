public:: true

# Ethereum Foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b80a4d30cab542037a225aa835273faf8ed27559a141f98bc875f830a1cea38a",
  "@type": "Page",
  "vc:slug": "ethereum-foundation",
  "title": "Ethereum Foundation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:governance-domain",
      "vc:label": "Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Foundation"
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
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-foundation",
  "@type": "Class",
  "label": "Ethereum Foundation",
  "definition": "The Ethereum Foundation is a non-profit organisation, registered in Switzerland, that supports the development of the Ethereum protocol and its surrounding research and developer community. It funds core protocol research, client development, security audits and educational initiatives, but does not control the network, which is maintained by a decentralised set of clients, validators and contributors. The Foundation was established around the 2014 to 2015 launch of Ethereum.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-foundation:9d260e2a409a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b80a4d30cab542037a225aa835273faf8ed27559a141f98bc875f830a1cea38a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Ethereum Foundation is a non-profit organisation, registered in Switzerland, that supports the development of the Ethereum protocol and its surrounding research and developer community. It funds core protocol research, client development, security audits and educational initiatives, but does not control the network, which is maintained by a decentralised set of clients, validators and contributors. The Foundation was established around the 2014 to 2015 launch of Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumFoundation
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Governance Domain]], [[Blockchain Domain]]
  - enables:: [[Ethereum Smart Contract Platform]], [[Proof of Stake]]

- ### Content
  - The Foundation coordinates and finances work on Ethereum's reference specifications, multiple independent clients and the research programmes behind major upgrades such as the transition to proof-of-stake. It distributes grants to external teams and runs initiatives covering cryptography, scaling, formal verification and developer tooling.
  - Although closely associated with Ethereum's origins, the Foundation deliberately holds no protocol-level authority. Network rules change only when client implementations and validators adopt them, so the Foundation's influence is exercised through research, funding and convening rather than control.
  - Its remit also includes community building, including conferences, documentation and stewardship of the project's intellectual direction. This positions it as one of several stakeholders, alongside client teams, application developers and the validator set, within Ethereum's broader governance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
