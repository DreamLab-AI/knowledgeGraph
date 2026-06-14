public:: true

# Surveillance Capitalism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:surveillance-capitalism",
  "@type": "Page",
  "vc:slug": "surveillance-capitalism",
  "title": "Surveillance Capitalism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:surveillance-capitalism",
  "@type": "Class",
  "label": "Surveillance Capitalism",
  "definition": "Surveillance Capitalism is an economic logic, theorised by Shoshana Zuboff (2019), in which human experience is unilaterally claimed as a free raw material to be translated into behavioural data, processed by machine intelligence into prediction products, and sold in behavioural futures markets to business customers who seek to influence human behaviour. The model originated in digital advertising — Google's repurposing of surplus behavioural data from search to predict and influence click-through — and has since colonised social media, IoT devices, retail analytics, health apps, and smart-city infrastructure. Unlike industrial capitalism's exploitation of natural resources, surveillance capitalism exploits human behaviour and psyche as its primary resource, generating epistemic asymmetries between platform owners and the surveilled population and challenging the foundational conditions for autonomous selfhood, democratic deliberation, and market competition.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:platform-economy", "label": "Platform Economy"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:behavioral-surplus", "label": "Behavioral Surplus"},
      {"@id": "urn:ngm:class:prediction-products", "label": "Prediction Products"},
      {"@id": "urn:ngm:class:behavioral-futures-markets", "label": "Behavioral Futures Markets"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:mass-data-collection", "label": "Mass Data Collection"},
      {"@id": "urn:ngm:class:behavioral-analytics", "label": "Behavioral Analytics"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:targeted-advertising", "label": "Targeted Advertising"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"},
      {"@id": "urn:ngm:class:social-media-platform-infrastructure", "label": "Social Media Platform Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:data-broker", "label": "Data Broker"},
      {"@id": "urn:ngm:class:third-party-cookies", "label": "Third-Party Cookies"},
      {"@id": "urn:ngm:class:telemetry", "label": "Telemetry"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:platform-economy", "label": "Platform Economy"},
      {"@id": "urn:ngm:class:network-effects", "label": "Network Effects"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"},
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"},
      {"@id": "urn:ngm:class:digital-markets-act", "label": "Digital Markets Act"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-sovereignty", "label": "Data Sovereignty"},
      {"@id": "urn:ngm:class:digital-rights", "label": "Digital Rights"},
      {"@id": "urn:ngm:class:privacy-preserving-computation", "label": "Privacy-Preserving Computation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-society", "label": "Digital Society"},
      {"@id": "urn:ngm:class:digital-society-surveillance", "label": "Digital Society Surveillance"},
      {"@id": "urn:ngm:class:epistemic-asymmetry", "label": "Epistemic Asymmetry"},
      {"@id": "urn:ngm:class:political-polarisation", "label": "Political Polarisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:smart-city", "label": "Smart City"},
      {"@id": "urn:ngm:class:iot", "label": "IoT"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:behavioural-surveillance-economy", "label": "Behavioural Surveillance Economy"},
    {"@id": "urn:ngm:class:data-driven-advertising-economy", "label": "Data-Driven Advertising Economy"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Surveillance Capitalism is the economic system in which [[Behavioral Analytics]] derived from continuous monitoring of human activity is commodified into prediction products and sold to advertisers and institutional clients seeking to influence behaviour, representing a structural challenge to [[Data Sovereignty]], [[Digital Rights]], and [[Digital Society]] autonomy.

- ### Relationships
  - Surveillance Capitalism is an expression of [[Platform Economy]] logic taken to its behavioural extreme, and it is the principal target of [[GDPR]] and similar [[Data Protection Regulation]] frameworks that mandate [[Consent Management]] and [[Data Minimisation]]. Its outputs, predictive behavioural profiles, are produced by [[Behavioral Analytics]] pipelines operating on mass telemetry from [[Social Media]] platforms, search engines, and connected devices. Resistance to surveillance capitalism focuses on [[Data Sovereignty]] — users reclaiming control of their data — and [[Digital Rights]] frameworks. The harms it produces are catalogued under [[Digital Society Surveillance]] and have driven legislative moves towards [[Algorithmic Accountability]].

- ### Content
  - Zuboff's analysis distinguishes surveillance capitalism from earlier capitalism by identifying the transformation of behavioural surplus — data collected beyond what is needed to improve the service — into a privately owned asset traded in opaque markets. The original Google AdWords system exemplified this: behavioural signals from billions of searches (query terms, click patterns, dwell times) were found to predict advertising engagement with unprecedented accuracy, creating a feedback loop where more data produced better predictions, better predictions attracted more advertisers, and more advertising revenue funded more data collection.

  - The logic spread from search to social media (Facebook's social graph and emotional reaction data), mobile platforms (app telemetry and location data), and the physical world (smart speakers, fitness trackers, retail loyalty programmes, smart-city sensors). Each domain contributes a different dimension of behavioural data — social graphs, biometrics, mobility patterns, consumption habits — that, when combined, allow the construction of remarkably detailed and actionable individual profiles. Data brokers aggregate and re-sell these profiles, creating secondary markets largely invisible to the subjects.

  - The political economy of surveillance capitalism produces structural harms beyond individual privacy violations. Platform epistemic power — the ability to shape what information users encounter through ranking and recommendation algorithms — has been implicated in political polarisation, radicalisation, and manipulation of democratic processes. The Cambridge Analytica scandal demonstrated that behavioural data profiles could be weaponised for targeted political messaging at scale, blurring the line between advertising and manipulation.

  - Regulatory responses have evolved from the EU's GDPR (2018), which constrains processing bases and consent requirements, to the Digital Markets Act (2022), which targets platform gatekeeping behaviours, and proposed algorithmic transparency and adtech reform legislation in multiple jurisdictions. Technical countermeasures include browser privacy sandbox proposals to replace third-party cookies, privacy-preserving attribution measurement, and differential-privacy mechanisms that allow aggregate analytics without individual tracking. Scholars debate whether these reforms are sufficient or whether structural remedies — data ownership rights, platform interoperability mandates — are needed to displace the surveillance capitalist business model.

