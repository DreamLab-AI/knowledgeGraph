public:: true

# Economic Finality
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:economic-finality", "@type":"Page", "title":"Economic Finality", "vc:slug":"economic-finality", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:economic-finality",
  "@type": "Class",
  "label": "Economic Finality",
  "definition": "Economic finality is a guarantee in proof-of-stake blockchains that reverting a finalised block would require an attacker to forfeit an economically prohibitive amount of staked capital through slashing. Rather than relying on probabilistic confirmation depth, it makes reversal irrational by binding the cost of an attack to a large, destroyable bond. A block is economically final once enough validators have attested to it that any conflicting chain would entail penalising at least a quantified fraction of the total stake. It is the cryptoeconomic foundation of settlement assurance in modern staking-based consensus.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:finality",
      "label": "Finality"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:slashing",
        "label": "Slashing"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:settlement-finality",
        "label": "Settlement Finality"
      },
      {
        "@id": "urn:ngm:class:economic-security",
        "label": "Economic Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptoeconomics",
        "label": "Crypto-Economics"
      },
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:slashing",
        "label": "Slashing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
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
- Economic finality guarantees that reverting a finalised block would cost an attacker an economically prohibitive amount of staked capital via [[Slashing]]. Built on [[Proof of Stake]] and validator [[Staking]], it is a cryptoeconomic strengthening of [[Finality]] that underwrites [[Settlement Finality]].
- ### Overview
- Probabilistic finality grows confidence with confirmation depth; economic finality instead makes reversal irrational by attaching a destroyable bond to validator behaviour.
- Once a supermajority of validators attest to a block, any conflicting fork would require slashing at least a quantified fraction of total stake, making attacks self-defeating.
- It anchors settlement assurance in capital at risk rather than raw hash power.
- ### Key aspects
- Bonded stake that is forfeitable through [[Slashing]] on equivocation.
- Validator attestations crossing a finalisation threshold.
- A quantifiable, large cost-of-corruption for reorganisation.
- ### Applications
- Settlement assurance for high-value on-chain transfers.
- Bridging and interoperability protocols relying on finalised state.
- Cryptoeconomic security budgeting in [[Proof of Stake]] networks.
- ### Relationships
- hasPart:: [[Slashing]]
- hasPart:: [[Staking]]
- enables:: [[Settlement Finality]]
- enables:: [[Economic Security]]
- relatedTo:: [[Crypto-Economics]]
- relatedTo:: [[Consensus]]
- relatedTo:: [[Validator]]
- dependsOn:: [[Proof of Stake]]
- dependsOn:: [[Slashing]]
- requires:: [[Validator]]
- requires:: [[Staking]]
- uses:: [[Cryptographic Proof]]
- supports:: [[Blockchain]]
- ### Provenance
- updated:: 2026-06-15
