public:: true

# Peer To Peer Payment

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:peer-to-peer-payment", "@type":"Page", "title":"Peer To Peer Payment", "vc:slug":"peer-to-peer-payment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:peer-to-peer-payment",
  "@type": "Class",
  "label": "Peer To Peer Payment",
  "definition": "Peer-to-peer payment is the direct transfer of monetary value between two parties without a traditional intermediary settling each side of the transaction. In cryptocurrency systems it is realised by signing a transaction that reassigns ownership of digital tokens on a shared ledger, validated by network consensus rather than a bank. The model reduces reliance on centralised clearing and enables programmable, near-instant value exchange.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:payment-system",
      "label": "Payment System"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:remittances",
        "label": "Remittance"
      },
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:mobile-payment",
        "label": "Mobile Payment"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cbdcs",
        "label": "CBDC"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      },
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
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
	- [[Peer To Peer Payment]] is the direct exchange of value between two parties without a clearing intermediary settling each leg of the transaction.
	- In blockchain systems it is realised by a signed [[Smart Contract]] or transaction that reassigns [[Cryptocurrency]] ownership on a shared ledger.
	- It enables low-friction [[Remittance]] and underpins [[DeFi]] value flows.
- ### Overview
	- Traditional payments route through a chain of banks, card networks and clearing houses, each charging fees and adding settlement latency.
	- Peer-to-peer payment compresses this chain: the payer authorises a transfer that is validated by network consensus and recorded directly, with finality determined by the ledger's confirmation rules.
	- Cryptocurrency P2P payment uses public-key signatures to authorise spending and a consensus mechanism to prevent double-spending without a trusted operator.
	- Outside crypto, the term also covers app-based transfers between individuals, which still settle through bank rails but present a direct sender-to-recipient experience.
- ### Mechanisms
	- Transaction construction: the sender specifies recipient, amount and fee, then signs with their private key.
	- Validation: network nodes verify signatures, balances and consensus rules before inclusion.
	- Settlement: value is considered transferred once the transaction reaches sufficient confirmation depth or instant finality.
	- Programmability: smart contracts can condition transfers on time, multi-signature approval or external events.
- ### Applications
	- Cross-border remittance with reduced intermediary cost.
	- Micropayments and tipping where card fees are uneconomic.
	- Merchant settlement using stablecoins.
	- Wallet-to-wallet transfers within decentralised finance.
- ### Relationships
	- enables:: [[Remittance]]
	- enables:: [[Digital Payment]]
	- uses:: [[Smart Contract]]
	- uses:: [[Cryptocurrency]]
	- requires:: [[Settlement]]
	- dependsOn:: [[Cryptocurrency]]
	- supports:: [[DeFi]]
	- supports:: [[Mobile Payment]]
	- bridgesTo:: [[CBDC]]
	- bridgesTo:: [[Stablecoin]]
	- contrastsWith:: [[Custody]]
	- relatedTo:: [[Settlement]]
	- relatedTo:: [[Digital Payment]]
	- implements:: [[Settlement]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
