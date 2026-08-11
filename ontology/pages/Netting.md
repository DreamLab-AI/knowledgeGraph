public:: true

# Netting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:19f5d15b8a7d046d6df53fc2a8d174054150f43f7b69556ec86e4fdf7680d093",
  "@type": "Page",
  "vc:slug": "netting",
  "title": "Netting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:clearing",
      "vc:label": "Clearing"
    },
    {
      "@id": "urn:visionflow:linked:settlement",
      "vc:label": "Settlement"
    },
    {
      "@id": "urn:visionflow:linked:settlement-finality",
      "vc:label": "Settlement Finality"
    },
    {
      "@id": "urn:visionflow:linked:central-securities-depository",
      "vc:label": "Central Securities Depository"
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
  "@id": "urn:ngm:class:netting",
  "@type": "Class",
  "label": "Netting",
  "definition": "The offsetting of mutual obligations between counterparties so that only the net balance is settled, rather than each gross obligation individually. Netting compresses large volumes of bilateral or multilateral exposures into a single payable or receivable per party, dramatically reducing settlement volumes, liquidity needs, and counterparty credit risk. Legally enforceable forms include payment netting, novation netting, and close-out netting on default, and it is the core economic function performed by clearing houses and payment systems.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:clearing",
    "label": "Clearing"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:settlement-finality",
        "label": "Settlement Finality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:central-securities-depository",
        "label": "Central Securities Depository"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The offsetting of mutual obligations between counterparties so that only the net balance is settled, rather than each gross obligation individually. Netting compresses large volumes of bilateral or multilateral exposures into a single payable or receivable per party, dramatically reducing settlement volumes, liquidity needs, and counterparty credit risk. Legally enforceable forms include payment netting, novation netting, and close-out netting on default, and it is the core economic function performed by clearing houses and payment systems."

- ### Semantic Classification
  - owl-class:: finance:Netting
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Clearing]]
  - part-of:: [[Settlement]]
  - enables:: [[Settlement Finality]]
  - related-to:: [[Central Securities Depository]]

- ### Content

  ## Definition

  **Netting** is the contractual and operational process of offsetting reciprocal obligations so that counterparties settle only net amounts. If bank A owes bank B £100m and B owes A £80m across the day's payments, payment netting reduces the flows to a single £20m transfer from A to B. Applied multilaterally through a central counterparty, the compression is far greater: a clearing house that novates all trades can typically net away well over 90% of gross settlement value, which is why netting sits at the heart of [[Clearing]].

  Three legal forms dominate. *Payment (settlement) netting* offsets amounts due on the same date in the same currency. *Netting by novation* replaces each new obligation with a running net contract as trades accumulate. *Close-out netting* — the most important for systemic risk — is triggered by a counterparty default: all outstanding transactions under a master agreement (such as the ISDA Master Agreement) are terminated, valued, and collapsed into a single net claim, preventing an insolvency administrator from cherry-picking profitable contracts whilst repudiating unprofitable ones.

  Enforceability is the critical property. Netting only reduces risk if it survives insolvency law, so jurisdictions have enacted specific statutory protections (the EU Settlement Finality and Financial Collateral Directives, the US FDICIA and Bankruptcy Code safe harbours, the UK's settlement finality regulations), and ISDA maintains legal opinions on close-out netting enforceability in over 90 jurisdictions. Where netting is enforceable, prudential capital rules allow banks to hold capital against net rather than gross exposures.

  ## Technical Details

  - **Bilateral vs. multilateral**: bilateral netting operates between two parties under a master agreement; multilateral netting requires a central counterparty or netting scheme to become the legal counterparty (through novation or open offer) to every position.
  - **Deferred net settlement (DNS) vs. RTGS**: DNS systems batch and net payments before settling at cycle end, economising on liquidity at the cost of intraday exposure; real-time gross settlement eliminates that exposure but demands more liquidity — hybrid systems use continuous netting-and-offsetting algorithms to combine the two.
  - **Interaction with settlement finality**: netting arrangements depend on legally designated moments of [[Settlement Finality]] — the point after which transfers and the net calculation itself are irrevocable even in insolvency.
  - **Securities markets**: clearing houses net trading obligations before instructing delivery at the [[Central Securities Depository]]; netting efficiency shortens settlement pipelines but complicates settlement-date compression debates such as the move to T+1.
  - **Portfolio compression**: in derivatives markets, multilateral compression runs (e.g. TriOptima) tear up offsetting contracts across dealers, reducing gross notional outstanding by hundreds of trillions of dollars since 2008.

  ## Current Landscape

  - **ISDA's netting opinions now cover more than 90 jurisdictions** (with collateral opinions in over 60), the benchmark for close-out netting enforceability relied on by prudential capital rules.
  - The **UK will move to T+1 settlement on 11 October 2027**: the government accepted the Accelerated Settlement Taskforce's recommendations in February 2025 and published a draft statutory instrument on 20 November 2025 to mandate the change.
  - The **EU (and Switzerland) will migrate to T+1 on the same date, 11 October 2027**, following ESMA's November 2024 recommendation; a June 2025 trilogue agreement exempted securities financing transactions documented as single two-leg transactions. The US, Canada, Mexico, and Argentina already moved to T+1 in May 2024.
  - Shorter settlement cycles compress the window in which multilateral netting accumulates, raising the operational premium on same-day affirmation, automated allocation, and efficient netting algorithms across CCPs and CSDs.

  **Sources**:
  - https://www.isda.org/opinions-overview/
  - https://www.fca.org.uk/markets/about-t1-settlement
  - https://www.esma.europa.eu/esmas-activities/markets-and-infrastructure/shortening-settlement-cycle-t1-eu
  - https://www.gov.uk/government/publications/accelerated-settlement-t1

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
