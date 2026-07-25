public:: true

# Additionality

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:additionality", "@type":"Page", "title":"Additionality", "vc:slug":"additionality", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:additionality",
  "@type":"Class",
  "label":"Additionality",
  "definition":"Additionality is the principle, central to carbon markets and climate finance, that an emissions-reduction or removal activity counts only if it would not have occurred under a business-as-usual baseline without the incentive of credit revenue. Demonstrating additionality requires showing that the project faces financial, regulatory, or technical barriers it overcomes specifically because of the credit mechanism. It is the key integrity test that separates credible carbon credits from those representing reductions that would have happened anyway.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:carbon-markets","label":"Carbon Markets"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:carbon-markets","label":"Carbon Markets"}],
    "requires":[{"@id":"urn:ngm:class:verification","label":"Verification"},{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
    "enables":[{"@id":"urn:ngm:class:carbon-credits","label":"Carbon Credits"},{"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"}],
    "supports":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"}],
    "dependsOn":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
    "uses":[{"@id":"urn:ngm:class:audit","label":"Audit"}],
    "standardizedBy":[{"@id":"urn:ngm:class:paris-agreement","label":"Paris Agreement"}],
    "bridgesTo":[{"@id":"urn:ngm:class:climate-finance","label":"Climate Finance"}],
    "contrastsWith":[{"@id":"urn:ngm:class:greenwashing","label":"Greenwashing"}],
    "relatedTo":[{"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"},{"@id":"urn:ngm:class:sustainable-finance","label":"Sustainable Finance"},{"@id":"urn:ngm:class:esg","label":"ESG"},{"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Additionality is the test that a carbon project's reductions are genuinely extra — they would not have happened without credit revenue. It is the integrity core of [[Carbon Markets]] and [[Climate Finance]], distinguishing real [[Carbon Credits]] from spurious ones.
- It guards against crediting reductions that the [[Net Zero]] baseline would have delivered anyway.
- ### Overview
- A baseline scenario estimates emissions absent the project; additionality is the difference the project causes beyond that baseline.
- Projects must show they faced barriers — financial, regulatory, or technological — that the credit incentive helped overcome.
- Weak additionality undermines offset integrity and exposes buyers to accusations of [[Greenwashing]].
- ### Key aspects
- Baseline determination: defining the counterfactual against which reductions are measured.
- Barrier analysis: evidencing the obstacles the project overcomes because of crediting.
- Financial test: showing the activity is not viable on its own without credit revenue.
- Regulatory surplus: confirming the reductions exceed what law already mandates.
- ### Mechanisms
- Standardised methodologies define how baselines and additionality are assessed.
- Independent [[Verification]] and [[Audit]] confirm claims before credits are issued.
- [[Carbon Accounting]] quantifies reductions relative to the baseline.
- Registries record issuance and retirement to prevent double counting.
- ### Applications
- Issuing credible [[Carbon Offset]] credits in voluntary and compliance markets.
- Underpinning corporate [[Net Zero]] and [[ESG]] claims with defensible offsets.
- Channelling [[Climate Finance]] and [[Sustainable Finance]] to genuinely additional projects.
- Strengthening trust in carbon markets under frameworks like the [[Paris Agreement]].
- ### Relationships
- partOf:: [[Carbon Markets]]
- requires:: [[Verification]]
- requires:: [[Carbon Accounting]]
- enables:: [[Carbon Credits]]
- enables:: [[Carbon Offset]]
- supports:: [[Net Zero]]
- dependsOn:: [[Carbon Accounting]]
- uses:: [[Audit]]
- standardizedBy:: [[Paris Agreement]]
- bridgesTo:: [[Climate Finance]]
- contrastsWith:: [[Greenwashing]]
- relatedTo:: [[Carbon Offset]]
- relatedTo:: [[Sustainable Finance]]
- relatedTo:: [[ESG]]
- relatedTo:: [[Carbon Footprint]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
