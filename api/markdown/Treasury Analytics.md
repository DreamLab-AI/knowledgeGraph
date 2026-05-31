public:: true

# Treasury Analytics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:treasury-analytics",
  "@type": "Page",
  "vc:slug": "treasury-analytics",
  "title": "Treasury Analytics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:treasury-analytics",
  "@type": "Class",
  "label": "Treasury Analytics",
  "definition": "Treasury analytics is the analysis of an organisation's or DAO's financial holdings, cash flows, and asset allocation to inform liquidity, runway, and risk-management decisions. In the on-chain context it aggregates wallet balances, token positions, and protocol revenues into dashboards and metrics that support transparent, data-driven treasury governance.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "Blockchain DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:dao-analytics", "label": "DAO Analytics"}, {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The analysis of holdings, cash flows, and allocation to inform liquidity, runway, and risk decisions, often surfaced through on-chain dashboards. It is a component of [[DAO Analytics]] and a supporting capability for [[Treasury Management]].
- ### Content
  - Analytics pipelines ingest on-chain balances, token prices, and protocol revenue to compute metrics such as runway, diversification, and value-at-risk. For DAOs in particular, transparent treasury reporting strengthens member trust and enables governance votes grounded in current financial reality.
