public:: true

# UK Online Safety Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:uk-online-safety-act",
  "@type": "Page",
  "vc:slug": "uk-online-safety-act",
  "title": "UK Online Safety Act",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uk-online-safety-act",
  "@type": "Class",
  "label": "UK Online Safety Act",
  "definition": "The UK Online Safety Act 2023 is landmark legislation that places statutory duties of care on platforms hosting user-generated content and search services, requiring them to identify, assess, and mitigate risks of illegal content and content harmful to children. It establishes Ofcom as the UK's internet regulator with powers to issue codes of practice, conduct audits, and levy fines of up to ten per cent of global annual turnover for non-compliance. The Act introduces mandatory age verification obligations, transparency reporting requirements, and provisions — controversially — concerning encrypted communications and client-side scanning.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:digital-regulation", "label": "Digital Regulation"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:online-safety-act-2023", "label": "Online Safety Act 2023"},
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"},
      {"@id": "urn:ngm:class:digital-services-act", "label": "Digital Services Act"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:age-verification", "label": "Age Verification"},
      {"@id": "urn:ngm:class:trust-and-safety", "label": "Trust and Safety"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:content-moderation-standards", "label": "Content Moderation Standards"},
      {"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:user-safety", "label": "User Safety"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[UK Online Safety Act]] 2023 is landmark [[Digital Regulation]] legislation that imposes statutory duties of care on platforms hosting user-generated content, requiring risk assessment and mitigation of illegal and child-harmful content, and designating Ofcom as the enforcing internet regulator with powers linked to [[Content Moderation]] and [[Age Verification]] obligations.
- ### Relationships
  - The UK Online Safety Act is closely related to the [[Online Safety Act 2023]] (its formal statutory name) and parallels the EU's [[Digital Services Act]] in its approach to platform accountability. It mandates [[Content Moderation]] against illegality and harm, requires [[Age Verification]] to protect minors, and demands [[Regulatory Reporting]] through transparency reports. It ultimately serves [[User Safety]] and [[Trust and Safety]] goals, and its implementation depends on [[Content Moderation Standards]] developed in Ofcom's codes of practice.
- ### Content
  - The Online Safety Act represents the culmination of a decade of UK policy debate about the responsibility of technology platforms for harms facilitated through their services. The theoretical basis — that platforms should bear a duty of care comparable to that of physical world operators — was developed through a sequence of white papers, consultations, and parliamentary scrutiny processes that eventually produced legislation receiving Royal Assent in October 2023. The Act covers a vast range of services, from large social media platforms to niche forums, search engines, and dating apps.

  - The Act's structure distinguishes between illegal content duties (applying to all in-scope services) and children's safety duties (applying to services likely to be accessed by under-18s). For illegal content, services must conduct risk assessments and deploy proportionate measures to prevent, detect, and remove priority illegal harms including terrorism material, child sexual abuse content, and fraud. Children's safety duties go further, requiring age assurance, safe design defaults, and restrictions on recommender system features known to expose minors to harmful content.

  - [[Age Verification]] is one of the Act's most technically challenging requirements. Ofcom must develop codes specifying acceptable methods, which must balance reliable age estimation against privacy concerns — particularly the risk that centralised age databases create honeypots for sensitive personal data. Privacy-preserving approaches using [[Verifiable Credentials]] and zero-knowledge proofs are under discussion as potential solutions that avoid creating new surveillance infrastructure whilst meeting the Act's child protection objectives.

  - The Act's provisions regarding encrypted communications generated substantial controversy. Draft proposals would have required platforms to scan encrypted messages for child sexual abuse material — so-called client-side scanning — potentially undermining end-to-end encryption. Following intense criticism from civil liberties groups, security researchers, and technology companies, the final Act includes a provision that Ofcom may only require such scanning where technically feasible without compromising security, effectively deferring the issue pending development of privacy-preserving solutions that do not currently exist. This remains an active area of regulatory and technical debate at the intersection of [[Trust and Safety]] and [[Data Security]].
