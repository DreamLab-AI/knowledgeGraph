public:: true

# Mediation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9e44dae2c5ca8dc916878b28f5ec3720e42ea22d2add139759780727e6f487ce",
  "@type": "Page",
  "vc:slug": "mediation",
  "title": "Mediation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dispute-resolution",
      "vc:label": "Dispute Resolution"
    },
    {
      "@id": "urn:visionflow:linked:negotiation",
      "vc:label": "Negotiation"
    },
    {
      "@id": "urn:visionflow:linked:conflict-resolution",
      "vc:label": "Conflict Resolution"
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
  "@id": "urn:ngm:class:mediation",
  "@type": "Class",
  "label": "Mediation",
  "definition": "A structured, consensual dispute resolution process in which a neutral third party — the mediator — helps disputing parties communicate, surface underlying interests, and negotiate their own settlement, without the power to impose an outcome. Confidential, without prejudice, and typically far cheaper and faster than litigation or arbitration, mediation resolves the majority of commercial, family, workplace, and community disputes that reach it, and any agreement becomes binding only when the parties choose to contract on it.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:dispute-resolution",
    "label": "Dispute Resolution"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:negotiation",
        "label": "Negotiation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution"
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
  - "A structured, consensual dispute resolution process in which a neutral third party — the mediator — helps disputing parties communicate, surface underlying interests, and negotiate their own settlement, without the power to impose an outcome. Confidential, without prejudice, and typically far cheaper and faster than litigation or arbitration, mediation resolves the majority of commercial, family, workplace, and community disputes that reach it, and any agreement becomes binding only when the parties choose to contract on it."

- ### Semantic Classification
  - owl-class:: governance:Mediation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Dispute Resolution]]
  - contrasts-with:: [[Negotiation]]
  - related-to:: [[Conflict Resolution]]

- ### Content

  ## Definition

  **Mediation** is assisted negotiation: a neutral mediator facilitates the parties' own search for settlement but, unlike a judge or arbitrator, decides nothing. The mediator's leverage is procedural and psychological rather than coercive — structuring the discussion, moving between parties in private caucuses, testing the realism of each side's position, and reframing entrenched demands into underlying interests that can be traded. This distinguishes mediation from direct [[Negotiation]], where the parties face each other without a neutral, and from adjudicative processes, where a third party imposes an outcome; on the [[Dispute Resolution]] spectrum it sits between the two, keeping outcome control with the parties while adding a third party's process control.

  Three properties do most of the work. **Consent**: participation and settlement are voluntary, so agreements tend to hold — parties comply with terms they authored. **Confidentiality**: proceedings are private and "without prejudice", so parties can make concessions and disclose weaknesses without those admissions surfacing in later litigation. **Interest focus**: drawing on the Fisher-Ury tradition of principled negotiation, mediators move parties from positions ("I want £X") to interests (cash flow, reputation, a continuing relationship), which multiplies the settlement options beyond what a court could order — apologies, future contracts, restructured payments.

  Practice styles range from *facilitative* (the mediator manages process only) through *evaluative* (the mediator offers views on the merits, common in commercial disputes) to *transformative* and restorative approaches oriented to repairing the relationship itself, the territory mediation shares with broader [[Conflict Resolution]] practice in workplaces, communities, and peace processes.

  ## Current Landscape

  - **Institutionalisation**: in Churchill v Merthyr Tydfil County Borough Council [2023] EWCA Civ 1416 (29 November 2023) the Court of Appeal held that a court can lawfully stay proceedings or order parties to engage in ADR, provided it does not impair the right to a fair trial — displacing the Halsey barrier to court-mandated mediation. This was operationalised by amendments to the Civil Procedure Rules on 1 October 2024 (CPR 1.1, 1.4, 3.1(2)(o) and 44.2), which expressly empower courts to order ADR and to penalise unreasonable refusal on costs.
  - **Compulsory small-claims mediation**: the Small Claims Track Automatic Referral to Mediation pilot (PD 51ZE) runs from 22 May 2024 to 21 May 2026, requiring most money claims allocated to the small claims track to attend a free one-hour mediation with HMCTS before a hearing; bodies such as CEDR continue to report commercial settlement rates around 70-90% on the day or shortly after.
  - **Cross-border enforcement**: the Singapore Convention on Mediation (in force since 12 September 2020) gives international mediated settlement agreements an enforcement route analogous to the New York Convention for arbitral awards; the UK signed on 3 May 2023 but, as of 2025, had not yet completed ratification, so it is not yet in force domestically.
  - **Sector forms**: family mediation (with MIAMs required before most family court applications in England and Wales), workplace and employment schemes (Acas), community and restorative justice mediation, and investor-state and peace mediation at the international level.
  - **Online dispute resolution**: platform-scale ODR (pioneered by eBay/PayPal at millions of disputes per year) and video-mediation normalised since 2020; current experimentation applies AI to case triage, option generation, and asynchronous shuttle mediation, raising open questions about neutrality and confidentiality when a model sits in the mediator's chair.

  **Sources**:
  - https://www.reedsmith.com/articles/the-impact-of-churchill-adr-20-months-on/
  - https://www.legal500.com/fivehundred-magazine/dispute-yearbook-2024/the-uk-mediation-sector/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
