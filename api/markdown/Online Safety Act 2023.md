public:: true

# Online Safety Act 2023
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:online-safety-act-2023",
  "@type": "Page",
  "vc:slug": "online-safety-act-2023",
  "title": "Online Safety Act 2023",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:online-safety-act-2023",
  "@type": "Class",
  "label": "Online Safety Act 2023",
  "definition": "The Online Safety Act 2023 is a landmark piece of UK legislation that received Royal Assent in October 2023, establishing a comprehensive duty-of-care framework for online platforms and search services operating in the United Kingdom. The Act creates tiered obligations proportionate to service size and risk: all in-scope services must conduct risk assessments and remove illegal content; larger platforms with significant reach face additional requirements including transparency reporting, user empowerment tools, and protections for children. Ofcom is designated as the regulator with powers to audit compliance, issue fines of up to 10% of global annual turnover, and in extreme cases block services from UK users. The Act also introduces criminal liability for senior managers of companies that fail to protect children from serious online harms.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:digital-regulation", "label": "Digital Regulation"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"},
      {"@id": "urn:ngm:class:digital-safety", "label": "Digital Safety"},
      {"@id": "urn:ngm:class:digital-services-act", "label": "Digital Services Act"},
      {"@id": "urn:ngm:class:age-verification", "label": "Age Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trust-and-safety", "label": "Trust and Safety"},
      {"@id": "urn:ngm:class:content-moderation-standards", "label": "Content Moderation Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:digital-society-harms", "label": "Digital Society Harms"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:regulatory-framework", "label": "Regulatory Framework"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The Online Safety Act 2023 is UK primary legislation imposing duty-of-care obligations on online platforms and search services to proactively tackle illegal and harmful [[Content Moderation]] failures, with [[Age Verification]] mandates for adult content sites and Ofcom as the statutory regulator empowered to levy global-turnover fines.

- ### Relationships
  - The Online Safety Act is the UK's parallel to the EU's [[Digital Services Act]], differing in its risk-based rather than size-based categorisation and in its explicit focus on [[Digital Safety]] for children. [[Content Moderation]] obligations under the Act extend beyond reactive takedowns to proactive risk assessment and mitigation duties. [[Age Verification]] requirements for pornographic content were among the most debated provisions, given prior failures to implement the Digital Economy Act 2017's age verification clauses. [[Trust and Safety]] teams at major platforms restructured their compliance programmes to satisfy the Act's transparency and accountability requirements. [[Digital Society Harms]] — including cyberflashing, online fraud, intimate image abuse, and child sexual abuse material — are specifically enumerated categories requiring expedited removal procedures.

- ### Content
  - The Online Safety Act had an unusually protracted legislative journey, introduced as a draft bill in December 2020 and passing through multiple revisions before receiving Royal Assent in October 2023. The passage was complicated by politically contentious debates about encryption: early drafts contained provisions requiring platforms to use "accredited technology" to scan encrypted messages for child abuse material, drawing criticism from privacy advocates and technologists who argued this was technically incompatible with end-to-end encryption. The final Act includes a "last resort" clause that makes scanning obligations contingent on Ofcom determining that adequate privacy-preserving technology exists.

  - The tiered duty-of-care structure creates three categories of regulated service. Category 1 services — large search engines and platforms with the highest reach and risk — face the most demanding obligations, including annual transparency reports, user empowerment features (tools to filter out legal-but-harmful content), and duties around news publisher content. Category 2A services are large platforms below the Category 1 threshold; Category 2B covers all other in-scope services with lower compliance burdens focused primarily on illegal content removal.

  - Child protection provisions are the most extensive part of the Act. Services likely to be accessed by children must conduct Children's Risk Assessments, implement age assurance measures proportionate to the content they host, and apply the Children's Code (the ICO's Age Appropriate Design Code) to their design decisions. Platforms hosting primary priority content — material promoting self-harm, eating disorders, or suicidal ideation — face the strictest obligations regarding children's access.

  - The territorial scope of the Act is extraterritorial in practice. Any service that has UK users or specifically targets UK users falls within scope regardless of where the provider is incorporated. This brings major US and global platforms squarely within Ofcom's jurisdiction, creating potential conflicts with US First Amendment norms and triggering extensive compliance programmes from the world's largest technology companies.

  - Enforcement timelines are phased, with Ofcom publishing Codes of Practice and regulatory guidance before enforcement begins. The illegal harms duties came into force in early 2024, with the child protection duties following once Ofcom's Children's Safety Codes were finalised. The criminal liability provisions for senior managers represent a significant escalation of regulatory risk that has driven board-level attention to online safety compliance in a way that previous self-regulatory frameworks never achieved.
