public:: true

# Trusted Setup

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:trusted-setup",
  "@type": "Page",
  "title": "Trusted Setup",
  "vc:slug": "trusted-setup",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trusted-setup",
  "@type": "Class",
  "label": "Trusted Setup",
  "definition": "A trusted setup is a one-time procedure that generates the public parameters (a common reference string) required by certain cryptographic protocols, notably succinct zero-knowledge proof systems. The procedure produces secret randomness, often called toxic waste, that must be irrecoverably destroyed; if it leaks, an adversary can forge proofs. Multi-party ceremonies distribute trust so that the setup remains sound as long as a single participant behaves honestly.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    },
    "requires": [
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:polynomial-commitment",
        "label": "Polynomial Commitment"
      },
      {
        "@id": "urn:ngm:class:kzg-commitment",
        "label": "KZG Commitment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:plonk",
        "label": "PLONK"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A trusted setup is a procedure in [[Cryptography]] that produces public parameters for [[ZK-SNARK]] systems.
  - It depends on [[Commitment Scheme]] and [[Elliptic Curve Cryptography]] primitives.
  - Multi-party ceremonies use [[Multi-Party Computation]] to dilute trust and enable [[Zero-Knowledge Proof]] verification.
- ### Overview
  - The setup samples secret randomness to build a structured reference string consumed by the prover and verifier.
  - Security hinges on destroying the secret; a multi-party ceremony makes the parameters trustworthy as long as one contributor is honest.
  - Universal and updatable setups, as in PLONK, reduce the need to re-run the ceremony for each circuit.
- ### Mechanisms
  - Generation of a common reference string from secret randomness.
  - Toxic-waste destruction so the trapdoor cannot be reconstructed.
  - Powers-of-tau multi-party ceremonies for distributed trust.
  - Universal and updatable variants that decouple setup from circuit.
- ### Applications
  - Bootstrapping zk-SNARK proving systems in privacy-preserving blockchains.
  - Establishing parameters for verifiable computation and rollups.
  - Securing confidential transactions and identity proofs.
- ### Risks
  - Compromise of toxic waste permits undetectable proof forgery.
  - Ceremony coordination and verifiability are critical to soundness.
  - Transparent proof systems avoid setup at higher proof cost.
- ### Relationships
  - partOf:: [[Cryptography]]
  - requires:: [[Multi-Party Computation]]
  - requires:: [[Hash Function]]
  - dependsOn:: [[Commitment Scheme]]
  - dependsOn:: [[Elliptic Curve Cryptography]]
  - enables:: [[ZK-SNARK]]
  - enables:: [[Zero-Knowledge Proof]]
  - enables:: [[Verifiable Computation]]
  - uses:: [[Polynomial Commitment]]
  - uses:: [[KZG Commitment]]
  - relatedTo:: [[PLONK]]
  - relatedTo:: [[Public-Key Cryptography]]
  - supports:: [[Blockchain]]
  - contrastsWith:: [[Forward Secrecy]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
