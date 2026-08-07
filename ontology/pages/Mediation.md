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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
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

  - **Institutionalisation**: courts in England and Wales actively push parties to mediate — costs sanctions for unreasonable refusal (Halsey line of cases), and since Churchill v Merthyr Tydfil (2023) courts may order it; small claims now face integrated mediation, and bodies such as CEDR report commercial settlement rates around 70-90% on the day or shortly after.
  - **Cross-border enforcement**: the 2019 Singapore Convention on Mediation gives international mediated settlement agreements an enforcement route analogous to the New York Convention for arbitral awards; the UK signed in 2023.
  - **Sector forms**: family mediation (with MIAMs required before most family court applications in England and Wales), workplace and employment schemes (Acas), community and restorative justice mediation, and investor-state and peace mediation at the international level.
  - **Online dispute resolution**: platform-scale ODR (pioneered by eBay/PayPal at millions of disputes per year) and video-mediation normalised since 2020; current experimentation applies AI to case triage, option generation, and asynchronous shuttle mediation, raising open questions about neutrality and confidentiality when a model sits in the mediator's chair.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
