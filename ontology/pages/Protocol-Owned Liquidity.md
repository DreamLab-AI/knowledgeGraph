public:: true

# Protocol-Owned Liquidity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:protocol-owned-liquidity",
  "@type": "Page",
  "vc:slug": "protocol-owned-liquidity",
  "title": "Protocol-Owned Liquidity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:protocol-owned-liquidity",
  "@type": "Class",
  "label": "Protocol-Owned Liquidity",
  "definition": "Protocol-owned liquidity (POL) is a DeFi treasury strategy in which a protocol acquires and holds its own trading-pair liquidity rather than renting it from third-party liquidity providers through mercenary incentives. By owning the liquidity, the protocol earns trading fees, gains durable market depth, and reduces dependence on emissions that can trigger capital flight. It was popularised by bonding mechanisms in OlympusDAO-style designs.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Protocol-owned liquidity is the practice of a protocol owning its own liquidity-pool positions rather than renting them through incentives. It is a core component of [[Treasury Management]] and a tool for durable, self-funded market depth.
- ### Content
  - POL is typically accumulated via bonding, where users sell liquidity-provider tokens or assets to the protocol in exchange for discounted native tokens, transferring liquidity ownership to the treasury. Owning liquidity converts a recurring incentive cost into a fee-earning asset and stabilises markets, but it concentrates risk in the treasury's holdings and exposes it to impermanent loss and native-token price swings.
