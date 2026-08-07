public:: true

# Carbon Tax
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdb8b976ed4d4aad4f12ffa4fc10c8b2b3dabb64fc82381d03a3542d3ce6f0f8",
  "@type": "Page",
  "vc:slug": "carbon-tax",
  "title": "Carbon Tax",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:climate-policy",
      "vc:label": "Climate Policy"
    },
    {
      "@id": "urn:visionflow:linked:emissions-trading-scheme",
      "vc:label": "Emissions Trading Scheme"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    },
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-tax",
  "@type": "Class",
  "label": "Carbon Tax",
  "definition": "A carbon tax is a government levy charged per tonne of carbon dioxide (or CO2-equivalent) emitted, putting an explicit, predictable price on greenhouse-gas pollution so that emitters internalise the climate damage their activities cause. Unlike an emissions trading scheme, which caps the quantity of emissions and lets the price float, a carbon tax fixes the price and lets emitted quantities adjust; examples include Sweden's levy of over 100 euros per tonne and carbon taxes in Canada, Singapore and South Africa.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:climate-policy",
    "label": "Climate Policy"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:emissions-trading-scheme",
        "label": "Emissions Trading Scheme"
      },
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:carbon-markets",
        "label": "Carbon Markets"
      },
      {
        "@id": "urn:ngm:class:compliance-carbon-market",
        "label": "Compliance Carbon Market"
      },
      {
        "@id": "urn:ngm:class:voluntary-carbon-market",
        "label": "Voluntary Carbon Market"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A carbon tax is a government levy charged per tonne of carbon dioxide (or CO2-equivalent) emitted, putting an explicit, predictable price on greenhouse-gas pollution so that emitters internalise the climate damage their activities cause. Unlike an emissions trading scheme, which caps the quantity of emissions and lets the price float, a carbon tax fixes the price and lets emitted quantities adjust; examples include Sweden's levy of over 100 euros per tonne and carbon taxes in Canada, Singapore and South Africa."

- ### Semantic Classification
  - owl-class:: governance:CarbonTax
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Climate Policy]]
  - contrasts-with:: [[Emissions Trading Scheme]]
  - contrasts-with:: [[Carbon Credits]]
  - related-to:: [[Carbon Markets]]

- ### Content

  ## Definition

  A **carbon tax** is the price instrument of [[Climate Policy]]: a per-tonne charge on CO₂ (or CO₂-equivalent greenhouse gases) levied on fossil fuels in proportion to their carbon content, usually collected upstream from fuel suppliers or large emitters. Its economic rationale is Pigouvian — greenhouse-gas emissions impose damages on third parties that market prices ignore, and taxing each tonne at (ideally) the social cost of carbon makes polluters internalise that externality. Once carbon carries a price, every actor in the economy faces a continuous, decentralised incentive to abate wherever abatement is cheapest: switching fuels, improving efficiency, electrifying processes or redesigning products, without regulators needing to prescribe how.

  The instrument's defining contrast is with the [[Emissions Trading Scheme]] (cap-and-trade): a tax fixes the carbon price and leaves the resulting emission quantity uncertain, whilst a cap fixes quantity and leaves the price uncertain — Weitzman's classic "prices vs quantities" analysis frames the choice under uncertainty. Taxes offer price predictability for investment decisions, administrative simplicity (they piggyback on existing fuel-excise machinery) and revenue stability; caps offer certainty of environmental outcome and generate tradeable allowances and [[Carbon Credits]]. Hybrids blur the line: price floors and ceilings inside trading schemes, and tax rates that escalate on legislated schedules, each borrowing the other's virtues. Revenue use is politically decisive — options include "fee and dividend" rebates to households (British Columbia's model, later Canada's federal backstop), cutting other taxes, or funding green investment — and poorly designed schemes can be regressive or provoke backlash, as France's gilets jaunes protests demonstrated in 2018.

  ## Current Landscape

  According to the World Bank's annual State and Trends of Carbon Pricing, around a quarter of global emissions are now covered by some carbon price, split between roughly three dozen carbon taxes and a similar number of trading schemes within the world's [[Carbon Markets]]. Sweden's tax, introduced in 1991 and now exceeding €100 per tonne, is the long-run exemplar, with national taxes also operating in Norway, Switzerland, Canada, Singapore, South Africa, Uruguay and elsewhere; the UK applies a Carbon Price Support tax alongside its emissions trading scheme rather than a standalone economy-wide tax. Most observed rates remain well below estimates of the social cost of carbon, and coverage gaps persist in agriculture and international transport. The frontier issue is carbon leakage: border carbon adjustments — led by the EU's Carbon Border Adjustment Mechanism, phasing in charges on embodied carbon in imports from 2026 — extend domestic carbon prices to traded goods and pressure trading partners in the [[Compliance Carbon Market]] world to price carbon themselves.
