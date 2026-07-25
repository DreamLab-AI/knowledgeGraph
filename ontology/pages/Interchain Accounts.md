public:: true

# Interchain Accounts

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:interchain-accounts", "@type": "Page", "title": "Interchain Accounts", "vc:slug": "interchain-accounts", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interchain-accounts",
  "@type": "Class",
  "label": "Interchain Accounts",
  "definition": "Interchain Accounts (ICA) is an Inter-Blockchain Communication protocol extension that lets an account on one Cosmos SDK chain control an account on another chain over IBC, without needing a local key or a bridge contract on the counterparty chain. It enables cross-chain operations, such as staking, voting or trading, to be initiated on a home chain and executed remotely by an owned account elsewhere in the Cosmos ecosystem. It is a standard module built on top of the Cosmos IBC transport, authentication and ordering layers.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cosmos-ibc",
      "label": "Cosmos IBC"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:cosmos-ibc",
        "label": "Cosmos IBC"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      }
    ],
    "supports": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Interchain Accounts (ICA) is an Inter-Blockchain Communication protocol extension that lets an account on one Cosmos SDK chain control an account on another chain over IBC, without needing a local key or a bridge contract on the counterparty chain. It enables cross-chain operations, such as staking, voting or trading, to be initiated on a home chain and executed remotely by an owned account elsewhere in the Cosmos ecosystem. It is a standard module built on top of the Cosmos IBC transport, authentication and ordering layers.
- ### Relationships
	- partOf:: [[Cosmos IBC]]
	- relatedTo:: [[Cosmos]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
