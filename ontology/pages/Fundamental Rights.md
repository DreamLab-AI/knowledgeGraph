public:: true

# Fundamental Rights
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdcff4b6ed8ff202b29cda3cdee01c20c0473dfc8d60a0702da43acafb601083",
  "@type": "Page",
  "vc:slug": "fundamental-rights",
  "title": "Fundamental Rights",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:human-rights",
      "vc:label": "Human Rights"
    },
    {
      "@id": "urn:visionflow:linked:rule-of-law",
      "vc:label": "Rule of Law"
    },
    {
      "@id": "urn:visionflow:linked:eu-hleg-ai",
      "vc:label": "EU HLEG AI"
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
  "@id": "urn:ngm:class:fundamental-rights",
  "@type": "Class",
  "label": "Fundamental Rights",
  "definition": "The basic rights and freedoms guaranteed to individuals by constitutional orders and supranational charters — dignity, privacy, freedom of expression, equality, non-discrimination, and effective remedy among them — which bind public authorities and increasingly shape technology governance, serving as the normative benchmark for instruments such as the EU Charter of Fundamental Rights, the GDPR, and the EU AI Act.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:human-rights",
    "label": "Human Rights"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:rule-of-law",
        "label": "Rule of Law"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:human-rights-law",
        "label": "Human Rights Law"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:eu-hleg-ai",
        "label": "EU HLEG AI"
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
  - "The basic rights and freedoms guaranteed to individuals by constitutional orders and supranational charters — dignity, privacy, freedom of expression, equality, non-discrimination, and effective remedy among them — which bind public authorities and increasingly shape technology governance, serving as the normative benchmark for instruments such as the EU Charter of Fundamental Rights, the GDPR, and the EU AI Act."

- ### Semantic Classification
  - owl-class:: governance:FundamentalRights
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Human Rights]]
  - requires:: [[Rule of Law]]
  - related-to:: [[Human Rights Law]]
  - related-to:: [[Privacy]]

- ### Content

  ## Definition

  **Fundamental rights** are the basic entitlements a legal order guarantees to individuals against the state and, in defined circumstances, against private actors: human dignity, life and integrity, liberty, privacy and data protection, freedom of expression and assembly, equality and non-discrimination, fair trial, and effective remedy. The term is closely related to "human rights" but carries a jurisdictional inflection: human rights denote universal moral-legal claims articulated in international instruments (the Universal Declaration, the ICCPR, the European Convention on Human Rights), while fundamental rights are those claims as entrenched and enforceable within a specific constitutional order — the EU Charter of Fundamental Rights, the German Grundrechte, or rights given domestic effect in the UK through the Human Rights Act 1998. [[Human Rights Law]] is the body of doctrine and adjudication through which both are implemented.

  Their operation depends on the [[Rule of Law]]: rights are only meaningful where public power is exercised under law, subject to independent courts and proportionality review. Most fundamental rights are qualified rather than absolute — interference is lawful only if prescribed by law, in pursuit of a legitimate aim, and necessary and proportionate — a structure that supplies the analytical machinery for nearly all technology-policy disputes, from surveillance to content moderation.

  In digital governance, fundamental rights have become the explicit design benchmark. The GDPR is formally an implementation of the Charter's Articles 7 (private life) and 8 (data protection); the EU AI Act classifies systems as high-risk according to their potential impact on fundamental rights and mandates fundamental-rights impact assessments for certain deployers; and the [[EU HLEG AI]] Ethics Guidelines for Trustworthy AI ground their entire framework in fundamental rights as the source of ethical principles for AI development.

  ## Current Landscape

  - **Instruments**: EU Charter of Fundamental Rights (binding since 2009), European Convention on Human Rights enforced by the Strasbourg court, national constitutional catalogues, and the UN framework including the Guiding Principles on Business and Human Rights
  - **Technology jurisprudence**: CJEU rulings on data retention (Digital Rights Ireland), transfers (Schrems I/II), and the right to erasure (Google Spain) show fundamental rights invalidating or reshaping digital legislation and practice
  - **AI governance**: the AI Act's prohibited-practices list (social scoring, certain biometric surveillance) is a direct fundamental-rights judgement; the Council of Europe's 2024 Framework Convention on AI extends rights-based obligations beyond the EU
  - **Institutions**: the EU Agency for Fundamental Rights (FRA) publishes empirical assessments of rights impacts of AI and biometrics; national equality bodies and data-protection authorities act as day-to-day enforcers
  - **Open tensions**: horizontal effect between private parties, extraterritorial reach of rights-based regulation, and reconciling innovation policy with precautionary rights protection
