public:: true

# Digital Collectible
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:digital-collectible", "@type":"Page", "title":"Digital Collectible", "vc:slug":"digital-collectible", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:digital-collectible",
  "@type":"Class",
  "label":"Digital Collectible",
  "definition":"A digital collectible is a uniquely identifiable digital item whose scarcity, ownership and authenticity are recorded on a blockchain, allowing it to be owned, displayed and traded much like a physical collectible. Typically issued as a non-fungible token or an inscription, each collectible carries provenance and metadata that distinguish it from copies of the same media. Digital collectibles span art, trading cards, in-game items and membership artefacts, and they form a core consumer use case for blockchain-based digital assets.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:non-fungible-token","label":"Non-Fungible Token"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:metadata","label":"Metadata"},
      {"@id":"urn:ngm:class:digital-art","label":"Digital Art"}
    ],
    "partOf":[{"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"}],
    "uses":[
      {"@id":"urn:ngm:class:token-standard","label":"Token Standard"},
      {"@id":"urn:ngm:class:inscription","label":"Inscription"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:blockchain","label":"Blockchain"},
      {"@id":"urn:ngm:class:provenance","label":"Provenance"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:nft-marketplace","label":"NFT Marketplace"},
      {"@id":"urn:ngm:class:utility-token","label":"Utility Token"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:digital-art","label":"Digital Art"},
      {"@id":"urn:ngm:class:provenance","label":"Provenance"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"},
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:nft","label":"NFT"},
      {"@id":"urn:ngm:class:ordinals","label":"Ordinals"},
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A digital collectible is a uniquely identifiable blockchain artefact whose scarcity and ownership are verifiable, usually issued as a [[Non-Fungible Token]] or an [[Inscription]]. Its [[Provenance]] and [[Metadata]] distinguish the owned item from freely copyable media.
- ### Overview
- Digital collectibles brought the cultural logic of physical collecting, scarcity, sets, rarity tiers and trading, into a fully digital, programmable medium.
- Ownership is anchored on a [[Blockchain]], so an item's history of mints and transfers is public and tamper-evident, supporting authenticity claims that copied files cannot match.
- The category spans generative art, sports and entertainment trading cards, in-game items and membership passes, and it is a leading consumer-facing application of [[Digital Asset]] technology.
- ### Key aspects
- Verifiable scarcity enforced by token supply rules or unique inscriptions.
- Provenance: an auditable on-chain history of creation and ownership.
- Interoperability with wallets, galleries and secondary marketplaces.
- Utility layers that grant access, perks or in-experience functionality.
- Royalty and licensing arrangements expressed through contracts or convention.
- ### Applications
- Issuing and trading generative [[Digital Art]] through an [[NFT Marketplace]].
- Sports and entertainment trading cards with verifiable rarity.
- Membership and access passes implemented as a [[Utility Token]].
- In-game items portable across experiences via a [[Token Standard]].
- ### Relationships
- hasPart:: [[Metadata]]
- hasPart:: [[Digital Art]]
- partOf:: [[Digital Asset]]
- uses:: [[Token Standard]]
- uses:: [[Inscription]]
- requires:: [[Blockchain]]
- requires:: [[Provenance]]
- enables:: [[NFT Marketplace]]
- enables:: [[Utility Token]]
- supports:: [[Digital Art]]
- supports:: [[Provenance]]
- bridgesTo:: [[Ethereum]]
- bridgesTo:: [[Bitcoin]]
- relatedTo:: [[NFT]]
- relatedTo:: [[Ordinals]]
- relatedTo:: [[Smart Contract]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
