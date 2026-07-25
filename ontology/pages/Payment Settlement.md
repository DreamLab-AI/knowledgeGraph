public:: true

# Payment Settlement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:payment-settlement",
  "@type": "Page",
  "title": "Payment Settlement",
  "vc:slug": "payment-settlement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-settlement",
  "@type": "Class",
  "label": "Payment Settlement",
  "definition": "Payment settlement is the process by which a payment obligation between parties is irrevocably discharged through the transfer of value, completing a transaction so that the recipient gains final, unconditional ownership of funds. Settlement may occur gross or net, in real time or in batches, and across traditional rails or blockchain ledgers, with finality being the property that the transfer can no longer be reversed. In distributed-ledger contexts, settlement is achieved when an on-chain transaction reaches consensus finality.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:settlement",
      "label": "Settlement"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      },
      {
        "@id": "urn:ngm:class:real-time-gross-settlement",
        "label": "Real-Time Gross Settlement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
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
	- [[Payment Settlement]] is a form of [[Settlement]] that irrevocably discharges a payment obligation by transferring value.
	- It completes a transaction so the recipient gains final, unconditional funds, governed by [[Finality]].
	- It spans traditional rails and [[Distributed Ledger]] networks.
- ### Overview
	- Settlement can be gross or net, real-time or batched, and may run over [[Real-Time Gross Settlement]] systems or messaging networks like [[SWIFT]].
	- In blockchain contexts settlement is reached when an [[On-Chain Transaction]] attains [[Consensus]] [[Finality]].
	- [[Liquidity]] availability and credit risk shape how and when settlement occurs.
- ### Mechanisms
	- Match payment instructions and verify available [[Liquidity]].
	- Transfer value across accounts or ledger states.
	- Achieve irreversibility through [[Finality]], whether legal or consensus-based.
	- Reconcile balances and confirm completion to both parties.
- ### Applications
	- Interbank settlement via [[Real-Time Gross Settlement]] and [[Central Bank]] infrastructure.
	- Cross-border value transfer messaging through [[SWIFT]].
	- On-chain settlement of crypto payments and [[Stablecoin]] transfers.
	- Trust-minimised exchange via [[Atomic Swap]].
- ### Relationships
	- partOf:: [[Financial Regulation]]
	- requires:: [[Finality]]
	- requires:: [[Liquidity]]
	- enables:: [[Atomic Swap]]
	- enables:: [[Stablecoin]]
	- dependsOn:: [[Consensus]]
	- dependsOn:: [[Central Bank]]
	- uses:: [[On-Chain Transaction]]
	- uses:: [[Real-Time Gross Settlement]]
	- supports:: [[SWIFT]]
	- bridgesTo:: [[Distributed Ledger]]
	- contrastsWith:: [[State Channel]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
