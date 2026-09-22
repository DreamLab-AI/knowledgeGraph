public:: true

# Audience Segmentation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:audience-segmentation", "@type":"Page", "title":"Audience Segmentation", "vc:slug":"audience-segmentation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:audience-segmentation",
  "@type":"Class",
  "label":"Audience Segmentation",
  "definition":"Audience segmentation is the practice of dividing a population of users or customers into distinct groups that share attributes, behaviours, or needs. Segments are derived from demographic, behavioural, contextual, and inferred signals and are used to tailor messaging, targeting, and experiences. Segmentation makes personalisation, efficient targeting, and measurement possible across marketing and product functions.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-marketing","label":"Digital Marketing"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:first-party-data","label":"First Party Data"},{"@id":"urn:ngm:class:behavioural-analytics","label":"Behavioural Analytics"}],
    "uses":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:identity-resolution","label":"Identity Resolution"}],
    "enables":[{"@id":"urn:ngm:class:personalisation","label":"Personalisation"},{"@id":"urn:ngm:class:programmatic-advertising","label":"Programmatic Advertising"}],
    "supports":[{"@id":"urn:ngm:class:conversion-rate-optimisation","label":"Conversion Rate Optimisation"},{"@id":"urn:ngm:class:user-engagement","label":"User Engagement"}],
    "dependsOn":[{"@id":"urn:ngm:class:customer-data-platform","label":"Customer Data Platform"}],
    "implements":[{"@id":"urn:ngm:class:a-b-testing","label":"A B Testing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "relatedTo":[{"@id":"urn:ngm:class:search-engine-optimisation","label":"Search Engine Optimisation"},{"@id":"urn:ngm:class:recommendation-system","label":"Recommendation System"},{"@id":"urn:ngm:class:gdpr","label":"GDPR"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Audience segmentation is a [[Digital Marketing]] practice that divides users into groups sharing attributes or behaviours. It draws on [[First Party Data]] and [[Behavioural Analytics]], often resolved through a [[Customer Data Platform]], to build segments that drive tailored experiences.
- ### Overview
- Segments can be defined along demographic, geographic, behavioural, psychographic, and contextual dimensions, or learned automatically through clustering and predictive modelling.
- High-quality segmentation depends on resolving fragmented identities into coherent profiles, which is where [[Identity Resolution]] and consented first-party data become decisive.
- Increasingly, [[Machine Learning]] produces dynamic, look-alike, and propensity-based segments that update continuously rather than being fixed rule-based cohorts.
- ### Key aspects
- Multi-dimensional segmentation criteria from explicit and inferred signals.
- Rule-based versus model-derived (clustering, propensity) segments.
- Identity resolution to unify cross-channel behaviour into profiles.
- Privacy and consent constraints governing permissible signals.
- Continuous refresh and measurement of segment performance.
- ### Applications
- Targeting and bidding inputs for [[Programmatic Advertising]].
- Tailored content and offers via [[Personalisation]] engines.
- Experiment design and cohort analysis in [[A B Testing]].
- Lifecycle and retention campaigns improving [[User Engagement]].
- ### Relationships
- subClassOf:: [[Digital Marketing]]
- requires:: [[First Party Data]]
- requires:: [[Behavioural Analytics]]
- uses:: [[Machine Learning]]
- uses:: [[Identity Resolution]]
- enables:: [[Personalisation]]
- enables:: [[Programmatic Advertising]]
- supports:: [[Conversion Rate Optimisation]]
- supports:: [[User Engagement]]
- dependsOn:: [[Customer Data Platform]]
- implements:: [[A B Testing]]
- bridgesTo:: [[Privacy]]
- relatedTo:: [[Search Engine Optimisation]]
- relatedTo:: [[Recommendation System]]
- relatedTo:: [[GDPR]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
