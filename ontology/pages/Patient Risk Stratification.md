public:: true

# Patient Risk Stratification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:patient-risk-stratification", "@type":"Page", "title":"Patient Risk Stratification", "vc:slug":"patient-risk-stratification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:patient-risk-stratification",
  "@type":"Class",
  "label":"Patient Risk Stratification",
  "definition":"Patient risk stratification is the process of classifying patients into groups by their likelihood of experiencing a particular clinical outcome, such as hospital readmission, disease progression, or adverse drug reaction, using clinical, demographic, and increasingly machine-learned features. It allows clinicians and health systems to prioritise limited resources, such as closer monitoring or preventive intervention, toward the patients most likely to benefit. Modern risk stratification tools combine electronic health record data with predictive models to produce continuously updated risk scores rather than static categorical assessments.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:healthcare-ai","label":"Healthcare AI"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[],
    "partOf":[
      {"@id":"urn:ngm:class:precision-medicine","label":"Precision Medicine"}
    ]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Patient risk stratification is the process of classifying patients into groups by their likelihood of experiencing a particular clinical outcome, such as hospital readmission, disease progression, or adverse drug reaction, using clinical, demographic, and increasingly machine-learned features. It allows clinicians and health systems to prioritise limited resources, such as closer monitoring or preventive intervention, toward the patients most likely to benefit. Modern risk stratification tools combine electronic health record data with predictive models to produce continuously updated risk scores rather than static categorical assessments.
- ### Relationships
	- subClassOf:: [[Healthcare AI]]
	- partOf:: [[Precision Medicine]]
