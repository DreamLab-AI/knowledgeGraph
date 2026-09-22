public:: true

# Streaming Payments

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:streaming-payments", "@type":"Page", "title":"Streaming Payments", "vc:slug":"streaming-payments", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:streaming-payments",
  "@type":"Class",
  "label":"Streaming Payments",
  "definition":"Streaming payments are a payment model in which value flows continuously from payer to payee in real time, accruing per second or per block rather than in discrete lump sums. On programmable ledgers and payment channels this is implemented by smart contracts or channel updates that let a recipient withdraw the proportion earned at any moment. The model suits salaries, subscriptions, rentals, and machine-to-machine billing where settlement should track elapsed time or usage.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:programmable-money","label":"Programmable Money"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:programmable-money","label":"Programmable Money"}],
    "enables":[{"@id":"urn:ngm:class:micropayment","label":"Micropayment"}],
    "requires":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},{"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"}],
    "uses":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},{"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"},{"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"}],
    "implements":[{"@id":"urn:ngm:class:programmable-money","label":"Programmable Money"}],
    "supports":[{"@id":"urn:ngm:class:micropayment","label":"Micropayment"}],
    "dependsOn":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "relatedTo":[{"@id":"urn:ngm:class:superfluid","label":"Superfluid"},{"@id":"urn:ngm:class:sablier","label":"Sablier"},{"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}],
    "bridgesTo":[{"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Streaming Payments]] let value flow continuously from payer to payee in real time, a continuous-settlement form of [[Programmable Money]].
- They are implemented by a [[Smart Contract]] or a [[Payment Channel]] that lets the recipient withdraw the amount earned at any instant.
- Protocols such as [[Superfluid]] and [[Sablier]] popularised the pattern on-chain, while the [[Lightning Network]] enables comparable streaming via channels.
- ### Overview
- Instead of paying a salary or subscription as a periodic lump sum, streaming payments accrue value second by second, aligning cash flow with elapsed time or usage.
- On programmable ledgers a stream contract records a flow rate and start time; the withdrawable balance is computed on demand, so funds settle without per-tick transactions.
- Off-chain channels achieve a similar effect by exchanging signed balance updates, enabling high-frequency micropayments without on-chain congestion.
- ### Mechanisms
- Flow rate accrual: a per-second or per-block rate determines the recipient's claimable balance over time.
- Continuous withdrawal: recipients can claim accrued value at any point without waiting for a payout cycle.
- Channel updates: off-chain signed states stream value with on-chain settlement only at open and close.
- Stablecoin denomination: streams are often denominated in stablecoins to avoid volatility in payroll and subscriptions.
- ### Applications
- Real-time payroll and continuous salaries.
- Usage-based subscriptions, rentals, and SaaS billing.
- Machine-to-machine and pay-per-use micropayments.
- Vesting and continuous distribution of tokens.
- ### Relationships
- partOf:: [[Programmable Money]]
- enables:: [[Micropayment]]
- requires:: [[Smart Contract]]
- requires:: [[Payment Channel]]
- uses:: [[Smart Contract]]
- uses:: [[Stablecoin]]
- uses:: [[Payment Channel]]
- implements:: [[Programmable Money]]
- supports:: [[Micropayment]]
- dependsOn:: [[Smart Contract]]
- relatedTo:: [[Superfluid]]
- relatedTo:: [[Sablier]]
- relatedTo:: [[Lightning Network]]
- bridgesTo:: [[Payment Channel]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
