public:: true

# Digital Markets Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:digital-markets-act",
  "@type": "Page",
  "title": "Digital Markets Act",
  "vc:slug": "digital-markets-act",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-markets-act",
  "@type": "Class",
  "label": "Digital Markets Act",
  "definition": "The Digital Markets Act (DMA) is a European Union regulation that imposes ex ante obligations and prohibitions on large online platforms designated as gatekeepers to ensure contestable and fair digital markets. Rather than waiting for case-by-case competition enforcement, it sets binding rules on designated core platform services covering interoperability, data use, self-preferencing, default settings, and access for business users. Gatekeepers must comply with a list of do's and don'ts, with the European Commission as sole enforcer empowered to levy substantial fines and structural remedies for non-compliance.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-framework",
      "label": "Regulatory Framework"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:platform-economy",
        "label": "Platform Economy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:platform-economy",
        "label": "Platform Economy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:surveillance-capitalism",
        "label": "Surveillance Capitalism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-services-act",
        "label": "Digital Services Act"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:platform-economy",
        "label": "Platform Economy"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-union",
        "label": "European Union"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-services-act",
        "label": "Digital Services Act"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dma",
      "label": "DMA"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The Digital Markets Act is an EU regulation imposing ex ante obligations on large online platforms designated as gatekeepers to keep digital markets contestable and fair. It mandates [[Interoperability]], restricts self-preferencing and unfair data combination, and constrains default-setting practices across the [[Platform Economy]]. As a binding [[Regulatory Framework]] enforced by the European Commission, it complements the [[Digital Services Act]] and intersects with data-protection law under the [[GDPR]], requiring sustained [[Regulatory Compliance]] from designated firms.

- ### Overview
  - The DMA entered into force in 2022 and became applicable in 2023, marking a shift from reactive antitrust enforcement to proactive, rule-based regulation of digital gatekeepers.
  - Gatekeeper status is assigned to providers of core platform services (such as search, social networking, messaging, marketplaces, and operating systems) that meet quantitative and qualitative thresholds on size, user base, and entrenched market position.
  - Designated gatekeepers must comply with a defined set of obligations and prohibitions intended to lower switching costs and barriers to entry for business and end users.
  - The Commission is the sole enforcer, able to impose fines up to a significant percentage of global turnover and, for systematic breaches, behavioural or structural remedies.

- ### Key aspects
  - #### Gatekeeper designation
    - Providers crossing turnover, user, and durability thresholds are designated for specific core platform services and notified of their obligations.
  - #### Obligations (do's)
    - Allow business users to access their own data, permit third-party [[Interoperability]] (notably for messaging), and let users uninstall pre-loaded apps and change defaults.
  - #### Prohibitions (don'ts)
    - No self-preferencing of the gatekeeper's own services in rankings, no combining personal data across services without consent, and no preventing business users from offering better terms elsewhere.
  - #### Enforcement
    - Centralised Commission enforcement with significant fines and the power to require structural change for repeated infringement.

- ### Mechanisms
  - #### Compliance reporting
    - Gatekeepers submit detailed compliance reports and, for some obligations, regulatory dialogue on implementation, embedding ongoing [[Regulatory Compliance]].
  - #### Market investigations
    - The Commission can open investigations to designate new gatekeepers, add services, or address systematic non-compliance.
  - #### Interoperability mandates
    - Specific provisions require number-independent messaging services to offer cross-platform [[Interoperability]] on request.

- ### Applications
  - **Messaging interoperability** — large messaging gatekeepers must open interfaces to enable cross-service communication.
  - **App-store competition** — rules enabling sideloading and alternative app stores reshape mobile [[Platform Economy]] dynamics.
  - **Search and ranking fairness** — prohibitions on self-preferencing affect how gatekeepers rank their own versus third-party services.
  - **Data portability** — business and end users gain rights to access and port data, complementing the [[GDPR]].
  - **Regulatory benchmark** — the DMA informs digital-competition regimes elsewhere, contrasting with unconstrained [[Surveillance Capitalism]] business models.

- ### Relationships
  - implements:: [[Interoperability]]
  - enables:: [[Interoperability]]
  - enables:: [[Platform Economy]]
  - requires:: [[Regulatory Compliance]]
  - supports:: [[Platform Economy]]
  - contrastsWith:: [[Surveillance Capitalism]]
  - relatedTo:: [[Digital Services Act]]
  - relatedTo:: [[GDPR]]
  - relatedTo:: [[Platform Economy]]
  - partOf:: [[Regulatory Framework]]
  - standardizedBy:: [[European Union]]
  - bridgesTo:: [[Digital Services Act]]
  - dependsOn:: [[Regulatory Compliance]]

- ### Provenance
  - sources:: Regulation (EU) 2022/1925 on contestable and fair markets in the digital sector (Digital Markets Act); European Commission DMA implementation guidance
  - updated:: 2026-06-15
