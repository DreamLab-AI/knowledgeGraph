public:: true

# Decentralisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralisation",
  "@type": "Page",
  "vc:slug": "decentralisation",
  "title": "Decentralisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralisation",
  "@type": "Class",
  "label": "Decentralisation",
  "definition": "Decentralisation is the architectural and governance principle of distributing authority, control, computation, or data storage across multiple independent nodes or actors rather than concentrating it in a single entity. In technical systems it manifests as distributed ledgers, peer-to-peer networks, and federated protocols that eliminate single points of failure and censorship. In governance it refers to transferring decision-making power from central authorities to local or community actors. The degree of decentralisation exists on a spectrum and involves trade-offs between efficiency, security, scalability, and resilience.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-framework",
      "label": "Governance Framework"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:nakamoto-coefficient",
        "label": "Nakamoto Coefficient"
      },
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:incentive-mechanism",
        "label": "Incentive Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:permissionless-innovation",
        "label": "Permissionless Innovation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      },
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-system",
        "label": "Federated Architecture"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      },
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:distributed-control",
      "label": "Distributed Control"
    },
    {
      "@id": "urn:ngm:class:decentralization",
      "label": "Decentralization"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Decentralisation is the principle of distributing control and decision-making across independent actors, underpinning [[Distributed Ledger Technology]], [[Peer-to-Peer Network]] architectures, and [[DAO]] governance models.
- ### Relationships
  - Decentralisation is the foundational concept behind [[Blockchain Governance]] and [[Decentralized Governance]], enabling [[Censorship Resistance]] by removing the ability of any single party to unilaterally alter records or deny service. It provides the structural basis for [[Decentralised Finance]] and [[Decentralised Identity]], and is implemented at the network layer through [[Peer-to-Peer Network]] topologies and [[Distributed Ledger Technology]].
- ### Content
  - Decentralisation as an architectural principle gained widespread attention with the publication of the Bitcoin whitepaper in 2008, which demonstrated that a trustless, permissionless payment system could operate without a central clearing authority. The core insight is that Byzantine fault tolerance and economic incentive alignment can substitute for institutional trust when nodes are geographically and jurisdictionally distributed. This framework has since been generalised to smart contract platforms, decentralised storage, and autonomous organisations.

  - The degree of decentralisation is not binary. Nakamoto decentralisation measures the minimum fraction of network participants required to collude and compromise the system. In practice, mining pool concentration, client software monoculture, and infrastructure dependencies on cloud providers introduce hidden centralisation. Critics argue that many systems marketed as decentralised exhibit significant practical centralisation at the infrastructure or governance layer, prompting research into more robust decentralisation metrics.

  - In governance, decentralisation transfers legislative and executive power from hierarchical institutions to distributed communities. DAOs implement this through on-chain voting, token-weighted governance, and executable smart contracts that automate the enactment of decisions. The trade-offs are real: decentralised systems are generally slower to coordinate, more vulnerable to Sybil attacks without robust identity layers, and harder to upgrade or repair when bugs are discovered. Research into optimistic governance and delegated voting attempts to balance responsiveness with decentralisation ideals.
