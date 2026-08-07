public:: true

# Risk Classification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83376a4f2cf91d99de0915e45626469eeed313eadbc0df3356b2981732294ceb",
  "@type": "Page",
  "vc:slug": "risk-classification",
  "title": "Risk Classification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:linked:risk-based-regulation",
      "vc:label": "Risk Based Regulation"
    },
    {
      "@id": "urn:visionflow:linked:policy-framework",
      "vc:label": "Policy Framework"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-framework",
      "vc:label": "Regulatory Framework"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance-law-and-privacy",
      "vc:label": "AI Governance Law and Privacy"
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
  "@id": "urn:ngm:class:risk-classification",
  "@type": "Class",
  "label": "Risk Classification",
  "definition": "The systematic assignment of activities, systems, or products into ordered categories of risk severity so that regulatory obligations, controls, and oversight can be proportioned to potential harm. It combines criteria such as likelihood, impact, affected populations, and context of use into defined tiers, exemplified by the EU AI Act's four-level scheme running from prohibited unacceptable-risk practices through high-risk conformity requirements to limited-risk transparency duties and minimal-risk freedom.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:risk-assessment",
    "label": "Risk Assessment"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-based-regulation",
        "label": "Risk Based Regulation"
      },
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-governance-law-and-privacy",
        "label": "AI Governance Law and Privacy"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
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
  - "The systematic assignment of activities, systems, or products into ordered categories of risk severity so that regulatory obligations, controls, and oversight can be proportioned to potential harm. It combines criteria such as likelihood, impact, affected populations, and context of use into defined tiers, exemplified by the EU AI Act's four-level scheme running from prohibited unacceptable-risk practices through high-risk conformity requirements to limited-risk transparency duties and minimal-risk freedom."

- ### Semantic Classification
  - owl-class:: governance:RiskClassification
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Risk Assessment]]
  - part-of:: [[Risk Based Regulation]], [[Policy Framework]]
  - related-to:: [[AI Governance Law and Privacy]]

- ### Content

  ## Definition

  **Risk classification** is the step in any risk-governance process where assessed risks are sorted into defined categories that carry consequences. Where [[Risk Assessment]] estimates likelihood and severity, classification converts those estimates into a discrete tier — negligible, limited, high, unacceptable — to which a [[Policy Framework]] attaches proportionate obligations: nothing at the bottom, disclosure duties in the middle, certification and audit near the top, outright prohibition beyond. The device is what makes [[Risk Based Regulation]] operational, because regulators cannot scrutinise everything equally; classification concentrates scarce oversight where potential harm is greatest and spares low-risk activity from compliance burden.

  Classification schemes vary along a few design dimensions. Criteria may be *ex ante* and categorical (an activity is high-risk because it appears on a statutory list) or *ex post* and analytic (a score computed from likelihood × impact matrices). Tiers may attach to products (medical device classes I–III), activities (money-laundering risk categories of customers), organisations (systemically important banks), or systems (safety integrity levels in functional safety). Good schemes are transparent about criteria, contestable through reclassification procedures, and dynamic — able to promote or demote items as evidence accumulates. Poor schemes invite boundary-gaming, where regulated parties restructure offerings to sit just below a threshold.

  The paradigm case in contemporary technology policy — and the reason the concept anchors [[AI Governance Law and Privacy]] discussions in this graph — is the EU AI Act's pyramid. *Unacceptable-risk* practices (social scoring by public authorities, manipulative subliminal techniques, most real-time remote biometric identification in public spaces) are banned. *High-risk* systems — those embedded in regulated products or deployed in listed contexts such as employment, education, credit, essential services, law enforcement, and migration — must meet requirements on risk management, data governance, documentation, human oversight, robustness, and conformity assessment before market entry. *Limited-risk* systems face transparency duties (chatbots must disclose they are machines; synthetic media must be labelled), while *minimal-risk* systems are unregulated. A parallel classification distinguishes general-purpose AI models with systemic risk, using training-compute thresholds as a proxy.

  ## Current Landscape

  Risk classification predates AI governance by decades: medical device classes under the EU MDR and the FDA's 510(k)/PMA pathways, biosafety levels BSL-1–4, aviation's design assurance levels, IEC 61508 safety integrity levels, and Basel's risk-weighted asset categories all embody the same logic, and the AI Act consciously imports the product-safety version via the New Legislative Framework. Active debates concern the classifier itself: critics argue static lists misfit general-purpose models whose risk depends on deployment context; compute thresholds are attacked as both over- and under-inclusive as algorithmic efficiency improves; and jurisdictions diverge — the UK's principles-based, sector-led approach and the NIST AI Risk Management Framework's non-tiered, function-based structure deliberately avoid rigid EU-style tiers. In corporate practice, classification is the routing mechanism of AI governance programmes: intake questionnaires classify proposed use cases, and the resulting tier determines which review boards, evaluations, and [[Compliance]] controls apply before deployment.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
