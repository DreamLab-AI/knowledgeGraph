public:: true

# Web3 Wallet
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:web3-wallet", "@type":"Page", "title":"Web3 Wallet", "vc:slug":"web3-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web3-wallet",
  "@type": "Class",
  "label": "Web3 Wallet",
  "definition": "A Web3 wallet is a software or hardware tool that manages a user's cryptographic key material and lets them hold blockchain assets, sign transactions and authenticate to decentralised applications. Unlike a custodial account, it places control of the private key with the user, who proves ownership and authorises state changes by signing locally. Web3 wallets typically expose an injected provider or connection protocol that bridges a browser or mobile app to one or more blockchain networks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency-wallet",
      "label": "Cryptocurrency Wallet"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self Custody"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:custodial-exchange",
        "label": "Custodial Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:non-custodial-wallet",
        "label": "Non-Custodial Wallet"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
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
	- A Web3 wallet manages a user's [[Private Key]] material so they can hold assets and sign transactions on a blockchain.
	- It is a kind of [[Cryptocurrency Wallet]] that emphasises [[Self Custody]] over a [[Custodial Exchange]] account.
	- It connects browsers and apps to networks such as [[Ethereum]] and authorises calls to a [[Smart Contract]].
- ### Overview
	- The wallet holds the secret key locally and never reveals it; only signatures derived from it leave the device.
	- A recovery [[Seed Phrase]] deterministically regenerates all keys, making backup the user's responsibility.
	- Wallets inject a provider into the page or expose a connection protocol so decentralised apps can request signatures.
	- They aggregate balances, token metadata and transaction history by reading on-chain state through node endpoints.
- ### Mechanisms
	- Hierarchical deterministic derivation expands a single seed into many [[Public Key]] and address pairs.
	- Transaction construction assembles a payload, estimates fees and presents it to the user for explicit approval.
	- Local signing produces an ECDSA or EdDSA signature that the network verifies against the sender address.
	- Connection sessions scope which accounts and chains an application may see, limiting exposure.
- ### Applications
	- Interacting with [[DeFi]] protocols for lending, swapping and yield without surrendering custody.
	- Minting, holding and transferring an [[NFT]] across marketplaces.
	- Authenticating to dapps via signature challenges instead of passwords.
	- Coordinating shared treasuries through a [[Multisig Wallet]] requiring multiple approvals.
- ### Relationships
	- subClassOf:: [[Cryptocurrency Wallet]]
	- uses:: [[Private Key]]
	- uses:: [[Public Key]]
	- uses:: [[Seed Phrase]]
	- requires:: [[Key Management]]
	- requires:: [[Self Custody]]
	- enables:: [[DeFi]]
	- enables:: [[NFT]]
	- enables:: [[Smart Contract]]
	- supports:: [[Ethereum]]
	- supports:: [[Multisig Wallet]]
	- contrastsWith:: [[Custodial Exchange]]
	- relatedTo:: [[Non-Custodial Wallet]]
	- relatedTo:: [[Hardware Wallet]]
	- relatedTo:: [[Wallet]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
