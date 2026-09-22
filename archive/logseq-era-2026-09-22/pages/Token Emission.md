public:: true

# Token Emission

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:token-emission", "@type":"Page", "title":"Token Emission", "vc:slug":"token-emission", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:token-emission",
  "@type":"Class",
  "label":"Token Emission",
  "definition":"Token emission is the process by which new units of a protocol's native token are created and distributed over time, typically to reward liquidity providers, stakers, or validators for participating in the network. It is governed by an emission schedule that specifies the rate and decay of issuance, balancing the need to bootstrap participation against the dilution that excessive emission imposes on existing holders. In DeFi, protocols competing for liquidity, such as in curve wars and yield farming, use token emission as an incentive lever, directing rewards toward pools or strategies the protocol wants to attract capital into. Poorly calibrated emission schedules are a common cause of unsustainable yields that collapse once emission-driven demand outpaces genuine protocol usage.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:tokenomics","label":"Tokenomics"}],
  "relations":{}
}
```

- ### Definition
	- Token emission is the process by which new units of a protocol's native token are created and distributed over time, typically to reward liquidity providers, stakers, or validators for participating in the network. It is governed by an emission schedule that specifies the rate and decay of issuance, balancing the need to bootstrap participation against the dilution that excessive emission imposes on existing holders. In DeFi, protocols competing for liquidity, such as in curve wars and yield farming, use token emission as an incentive lever, directing rewards toward pools or strategies the protocol wants to attract capital into. Poorly calibrated emission schedules are a common cause of unsustainable yields that collapse once emission-driven demand outpaces genuine protocol usage.
- ### Relationships
	- subClassOf:: [[Tokenomics]]
