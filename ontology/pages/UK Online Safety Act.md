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
  "definition": "The UK Online Safety Act 2023 is landmark primary legislation that imposes statutory duties of care on providers of user-to-user services and search engines operating in or accessible from the United Kingdom, compelling them to assess and mitigate risks of illegal content and content harmful to children. It designates Ofcom as the UK's online safety regulator with powers to set binding codes of practice, conduct compliance audits, and impose fines of up to ten per cent of global annual turnover for non-compliance. The Act introduces mandatory age assurance obligations for services hosting pornographic or other age-restricted content, transparency reporting requirements, and a suite of user empowerment tools designed to give adults greater control over the content they encounter. A contested set of provisions concerning end-to-end encrypted messaging — deferring client-side scanning requirements until Ofcom deems them technically feasible — reflect the Act's tension between child protection goals and the integrity of secure communications.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-regulation",
      "label": "Digital Regulation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:age-verification",
        "label": "Age Verification"
      },
      {
        "@id": "urn:ngm:class:transparency-reporting",
        "label": "Transparency Reporting"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:platform-accountability",
        "label": "Platform Accountability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:user-safety",
        "label": "User Safety"
      },
      {
        "@id": "urn:ngm:class:trust-and-safety",
        "label": "Trust and Safety"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:content-moderation-standards",
        "label": "Content Moderation Standards"
      },
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Reporting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:freedom-of-expression",
        "label": "Freedom of Expression"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ofcom",
        "label": "Ofcom"
      },
      {
        "@id": "urn:ngm:class:uk-parliament",
        "label": "UK Parliament"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-services-act",
        "label": "Digital Services Act"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:end-to-end-encryption",
        "label": "End-to-End Encryption"
      },
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:client-side-scanning",
        "label": "Client-Side Scanning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:online-safety-act-2023",
      "label": "Online Safety Act 2023"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The [[UK Online Safety Act]] 2023 is landmark UK primary legislation receiving Royal Assent in October 2023 that imposes statutory duties of care on providers of user-to-user services and [[Search Engine]] operators accessible in the United Kingdom. It requires services to identify, assess, and mitigate risks of [[Illegal Content]] and content harmful to children, establishes [[Ofcom]] as the online safety regulator, and introduces mandatory [[Age Verification]] for age-restricted services. The Act interacts closely with the EU's [[Digital Services Act]], UK [[GDPR]], and debates around [[End-to-End Encryption]], positioning the UK as a distinct regulatory jurisdiction for [[Platform Governance]].

- ### Overview
  - The Online Safety Act culminated a decade of UK policy debate tracing back to the 2017 Internet Safety Strategy Green Paper, the 2019 Online Harms White Paper, and multiple parliamentary inquiries. Proponents argued that [[Platform Accountability]] required a legal basis equivalent to duty-of-care obligations in the physical world; critics raised concerns about freedom of expression, the practicability of [[Content Moderation]] at scale, and the risks to [[End-to-End Encryption]].
  - The Act received Royal Assent on 26 October 2023 and is being implemented in phases, with Ofcom publishing codes of practice and guidance across 2024–2025. Services must complete [[Content Risk Assessment]] before Ofcom finalises each code, then implement compliant systems within specified timescales.
  - **Scope**: The Act covers user-to-user services (platforms where users can publish content visible to other users) and [[Search Engine]] services that are accessible in the UK, regardless of where the provider is established. Small forums with low-risk profiles and internal business communications tools are generally out of scope.
  - **Regulatory architecture**: [[Ofcom]] sits at the centre, issuing Codes of Practice for illegal content, children's safety, and user empowerment. Non-compliance can trigger enforcement notices, fines up to ten per cent of global annual turnover (or £18 million if larger), and — for the most serious cases — business disruption orders requiring ISPs to block a service.

- ### Key Components
  - **Illegal Content Duties** — All in-scope services must conduct [[Content Risk Assessment]] for priority illegal content (terrorism, child sexual abuse material, fraud, hate crime) and take proportionate steps to prevent, detect, and remove it. Ofcom's Codes specify minimum standards.
  - **Children's Safety Duties** — Services likely to be accessed by under-18s face heightened obligations: [[Age Verification]] or age estimation, safe design defaults, restrictions on recommender systems known to amplify harmful content, and prohibition on certain features (e.g. stranger messaging for minors on some platforms).
  - **[[Age Verification]]** — Services hosting pornography or other content harmful to children must deploy technically accurate age assurance. Ofcom must approve methods; privacy-preserving approaches using [[Zero-Knowledge Proofs]] and [[Verifiable Credentials]] are among mechanisms under consideration to avoid creating centralised age databases.
  - **User Empowerment Tools** — Large services must provide adults with controls over the content they encounter (e.g. filtering, blocking, flagging), treating autonomous adult users as capable of making informed choices while still protecting them from the most severe harms.
  - **[[Transparency Reporting]]** — Category 1 and Category 2 services must publish annual transparency reports covering content takedowns, proactive detection, appeals, and compliance with Ofcom Codes.
  - **Safety by Design** — Platforms are expected to embed [[Platform Governance]] measures at product level, not merely as post-hoc moderation. Risk assessment must precede product launches and feature updates.
  - **Encrypted Communications** — The Act empowers Ofcom to issue notices requiring detection of child sexual abuse material in encrypted services, but only where Ofcom determines that technically feasible methods exist that do not compromise the security of encrypted communications. This clause effectively defers [[Client-Side Scanning]] requirements pending technological development and has been widely noted as a political compromise.
  - **Senior Manager Liability** — Individuals designated as senior managers can face personal criminal prosecution for wilful or grossly negligent failure to comply with certain duties, particularly those affecting child safety.

- ### Applications / Use Cases
  - **Social Media Platforms** — [[Content Moderation]] of harmful content including self-harm promotion, abuse, and extremism; mandatory child safety audits; age gating for adult content sections.
  - **Search Engines** — Risk assessments of search results returning illegal content; safe search defaults for child users; greater transparency about content ranking signals.
  - **Messaging Services** — Obligations to assess risks in private and public messaging; controversial intersection with [[End-to-End Encryption]] for platforms such as WhatsApp, Signal, and iMessage.
  - **Dating Applications** — [[Age Verification]] obligations; risk assessment for non-consensual intimate image sharing; design requirements to reduce grooming risks.
  - **Video Sharing Platforms** — Alignment with Audiovisual Media Services Directive rules and OSA duties; mandatory reporting on harmful content exposure metrics.
  - **Small and Medium Platforms** — Proportionate obligations scaled by user numbers, functionality, and risk profile; simplified risk assessment templates from Ofcom for lower-risk services.
  - **[[Regulatory Compliance]] Teams** — Internal governance functions using [[Risk Assessment Framework]] methodologies to document OSA compliance, track Ofcom Code updates, and manage enforcement correspondence.

- ### Relationships
  - requires:: [[Content Moderation]]
  - requires:: [[Regulatory Compliance]]
  - requires:: [[Platform Accountability]]
  - enables:: [[User Safety]]
  - enables:: [[Trust and Safety]]
  - enables:: [[Child Protection Online]]
  - hasPart:: [[Age Verification]]
  - hasPart:: [[Transparency Reporting]]
  - hasPart:: [[Content Risk Assessment]]
  - uses:: [[Content Moderation Standards]]
  - uses:: [[Regulatory Reporting]]
  - uses:: [[Risk Assessment Framework]]
  - supports:: [[Freedom of Expression]]
  - supports:: [[Data Protection]]
  - standardizedBy:: [[Ofcom]]
  - standardizedBy:: [[UK Parliament]]
  - contrastsWith:: [[Digital Services Act]]
  - contrastsWith:: [[GDPR]]
  - contrastsWith:: [[US Section 230]]
  - relatedTo:: [[End-to-End Encryption]]
  - relatedTo:: [[Platform Governance]]
  - relatedTo:: [[Illegal Content Detection]]
  - bridges-to:: [[Verifiable Credentials]]
  - bridges-to:: [[Client-Side Scanning]]

- ### Standards & Context
  - **Ofcom's Role** — [[Ofcom]] is the UK's communications and media regulator, granted new online safety powers under the Act. It consults publicly on draft Codes of Practice, maintains a register of in-scope services (Category 1 and Category 2), and investigates complaints and non-compliance. Ofcom's approach draws on experience regulating broadcasting and telecommunications, adapted to the substantially different technical and commercial landscape of internet platforms.
  - **Relationship to EU Law** — The [[Digital Services Act]] is the most analogous EU instrument, covering similar ground with a risk-based obligations model and designated Digital Services Coordinators. Key differences include the OSA's explicit children's safety duties, the role of Ofcom vs the EU's distributed DSC network, and the UK's post-Brexit freedom to diverge from EU harmonisation. Both regimes apply simultaneously to large platforms with UK and EU users.
  - **Relationship to Data Protection** — [[Data Protection]] compliance under UK [[GDPR]] and the Data Protection Act 2018 intersects with OSA obligations: age verification systems must be designed to minimise data collection, and content moderation processing of personal data must have a lawful basis. The Information Commissioner's Office and Ofcom issued joint guidance on the interface between regimes.
  - **US Contrast** — [[US Section 230]] of the Communications Decency Act provides broad immunity to US platforms for third-party content, creating a fundamentally different liability regime. The OSA explicitly rejects that model, replacing immunity with affirmative duties.
  - **Children's Code** — The UK's Age Appropriate Design Code (Children's Code) under [[GDPR]] pre-dates the OSA and applies complementary design obligations for services likely used by children; the OSA builds on rather than replaces that regime.
  - **Technical Standards** — Ofcom is expected to reference standards developed by BSI, ISO, and industry bodies when specifying technical measures for [[Age Verification]], [[Illegal Content Detection]], and [[Transparency Reporting]].
  - **International Influence** — The OSA is closely watched as a potential template by jurisdictions including Canada, Australia, and others developing platform safety frameworks. Its implementation experience will influence future regulation internationally.

- ### Provenance
  - sources:: UK Online Safety Act 2023 (c. 50); Ofcom online safety programme documentation; UK Parliament Joint Committee pre-legislative scrutiny report; DSIT and DCMS policy documents
  - updated:: 2026-06-13
