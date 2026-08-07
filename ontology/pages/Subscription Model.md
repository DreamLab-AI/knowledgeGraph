public:: true

# Subscription Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a3672b78638a01d6babd95be92f8c3912c7393340e828a11b6cee5f797bd994b",
  "@type": "Page",
  "vc:slug": "subscription-model",
  "title": "Subscription Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economic-model",
      "vc:label": "Economic Model"
    },
    {
      "@id": "urn:visionflow:linked:software-as-a-service",
      "vc:label": "Software As A Service"
    },
    {
      "@id": "urn:visionflow:linked:streaming-payment",
      "vc:label": "Streaming Payment"
    },
    {
      "@id": "urn:visionflow:linked:creator-economy",
      "vc:label": "Creator Economy"
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
  "@id": "urn:ngm:class:subscription-model",
  "@type": "Class",
  "label": "Subscription Model",
  "definition": "A revenue model in which customers pay a recurring fee — monthly or annually — for continuing access to a product or service rather than purchasing it outright, converting one-off sales into predictable recurring revenue; the economic backbone of Software as a Service, media streaming, and the membership tiers of the creator economy, it shifts the commercial burden from closing sales to retaining customers, measured through metrics such as MRR, churn, and customer lifetime value.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:economic-model",
    "label": "Economic Model"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:software-as-a-service",
        "label": "Software As A Service"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:streaming-payment",
        "label": "Streaming Payment"
      },
      {
        "@id": "urn:ngm:class:micropayments",
        "label": "Micropayments"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      },
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
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
  - "A revenue model in which customers pay a recurring fee — monthly or annually — for continuing access to a product or service rather than purchasing it outright, converting one-off sales into predictable recurring revenue; the economic backbone of Software as a Service, media streaming, and the membership tiers of the creator economy, it shifts the commercial burden from closing sales to retaining customers, measured through metrics such as MRR, churn, and customer lifetime value."

- ### Semantic Classification
  - owl-class:: finance:SubscriptionModel
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Economic Model]]
  - part-of:: [[Software As A Service]]
  - contrasts-with:: [[Streaming Payment]], [[Micropayments]]
  - related-to:: [[Digital Economy]], [[Creator Economy]]

- ### Content

  ## Definition

  The **subscription model** charges customers a recurring fee for ongoing access instead of a one-time price for ownership. It long predates software — newspapers, book clubs, and utilities ran on subscriptions for centuries — but digital delivery made it the dominant commercial pattern of the modern [[Digital Economy]]: [[Software As A Service]] replaced perpetual licences with monthly seats, streaming services replaced media purchases with all-you-can-consume access, and membership platforms such as Patreon and Substack built the [[Creator Economy]]'s most durable income stream on small recurring pledges.

  Economically, the model exchanges large uncertain transactions for smaller predictable ones. For the seller, recurring revenue smooths cash flow, raises company valuations (revenue multiples reward predictability), and aligns income with continuing service costs; for the buyer, it lowers the entry price, transfers maintenance and upgrade risk to the vendor, and converts capital expenditure into operating expenditure. The pivotal consequence is that revenue is *earned continuously*: a subscription business loses money on acquisition and recovers it over the customer's lifetime, so its health is read through monthly recurring revenue (MRR/ARR), churn and net revenue retention, customer acquisition cost, and lifetime value — and its organisational centre of gravity shifts from sales to retention, onboarding, and continuous product improvement.

  Within this graph the model is contrasted with finer-grained payment primitives. [[Micropayments]] and [[Streaming Payment]] (continuous per-second value transfer, typically on payment channels or programmable-money rails) charge for actual usage in near-real time, eliminating the subscription's characteristic dead-weight — paying for access one does not use — at the cost of price unpredictability and metering complexity. Hybrid usage-based and credit-based pricing, now standard for AI and cloud services, sits between the two poles.

  ## Current Landscape

  - **Ubiquity and fatigue**: the average household now holds many overlapping subscriptions; "subscription fatigue" and regulatory pressure (e.g. click-to-cancel rules and UK/EU auto-renewal consumer protections) push providers towards clearer cancellation and pause options.
  - **Pricing evolution**: seat-based SaaS pricing is giving ground to usage-based and hybrid models, particularly for AI products whose marginal costs scale with consumption; tiered freemium remains the standard acquisition funnel.
  - **Creator tiers**: membership platforms standardised tiered patronage (access, community, perks), making recurring support the creator economy's counterweight to volatile advertising income.
  - **Key metrics**: MRR/ARR growth, gross and net churn, net revenue retention above 100% (expansion outpacing cancellation), CAC payback period, and LTV:CAC ratio as the canonical viability test.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
