public:: true

# Targeted Advertising

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:targeted-advertising", "@type":"Page", "title":"Targeted Advertising", "vc:slug":"targeted-advertising", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:targeted-advertising",
  "@type":"Class",
  "label":"Targeted Advertising",
  "definition":"Targeted advertising is the practice of delivering advertisements to specific individuals or audience segments selected on the basis of inferred characteristics, behaviour, or context. It relies on collecting and analysing personal data to predict which users are most likely to respond, and on automated systems that match adverts to audiences in real time. Because it depends on extensive data collection and profiling, targeted advertising sits at the centre of debates about privacy, consent, and the governance of digital platforms.",
  "domain":"governance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:advertising","label":"Advertising"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:surveillance-capitalism","label":"Surveillance Capitalism"},{"@id":"urn:ngm:class:digital-marketing","label":"Digital Marketing"}],
    "uses":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"},{"@id":"urn:ngm:class:personalisation","label":"Personalisation"},{"@id":"urn:ngm:class:programmatic-advertising","label":"Programmatic Advertising"}],
    "enables":[{"@id":"urn:ngm:class:personalisation","label":"Personalisation"},{"@id":"urn:ngm:class:digital-marketing","label":"Digital Marketing"}],
    "requires":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
    "implements":[{"@id":"urn:ngm:class:programmatic-advertising","label":"Programmatic Advertising"}],
    "supports":[{"@id":"urn:ngm:class:surveillance-capitalism","label":"Surveillance Capitalism"}],
    "standardizedBy":[{"@id":"urn:ngm:class:gdpr","label":"GDPR"}],
    "relatedTo":[{"@id":"urn:ngm:class:privacy","label":"Privacy"},{"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"},{"@id":"urn:ngm:class:consumer-protection","label":"Consumer Protection"}],
    "contrastsWith":[{"@id":"urn:ngm:class:privacy","label":"Privacy"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Targeted Advertising]] delivers adverts to specific individuals or segments chosen from inferred traits and behaviour.
	- It depends on [[Data Collection]] and profiling to predict which users will respond.
	- The practice is central to debates about [[Privacy]], consent, and platform [[Governance]].
- ### Overview
	- Unlike broadcast advertising, targeted advertising tailors which message reaches whom, aiming to maximise relevance and conversion.
	- Modern systems assemble profiles from browsing, location, purchase history, and other signals, then use predictive models to score audiences.
	- Automated marketplaces match adverts to users in milliseconds as pages load, integrating measurement and bidding into a single pipeline.
	- The reliance on pervasive tracking has driven regulation, consent requirements, and a broader reckoning over the data economy.
- ### Key aspects
	- Audience segmentation: dividing users into groups by inferred attributes and intent.
	- Behavioural profiling: building predictive models from collected signals.
	- Real-time delivery: matching adverts to users automatically as content loads.
	- Measurement and optimisation: tracking outcomes to refine targeting continuously.
	- Privacy tension: effectiveness depends on data collection that regulation increasingly constrains.
- ### Mechanisms
	- Data is gathered across sites and devices and consolidated into user or cohort profiles.
	- Predictive models rank the likelihood that a given user responds to a given advert.
	- Programmatic systems auction impressions and serve the winning advert in real time.
- ### Applications
	- Personalised marketing across web, mobile, and social platforms via [[Digital Marketing]].
	- Real-time bidding through [[Programmatic Advertising]] exchanges.
	- Monetisation models underpinning [[Surveillance Capitalism]].
	- Use cases scrutinised under [[Data Privacy]] frameworks such as [[GDPR]].
- ### Relationships
	- subClassOf:: [[Advertising]]
	- partOf:: [[Surveillance Capitalism]]
	- partOf:: [[Digital Marketing]]
	- uses:: [[Data Collection]]
	- uses:: [[Personalisation]]
	- uses:: [[Programmatic Advertising]]
	- enables:: [[Personalisation]]
	- enables:: [[Digital Marketing]]
	- requires:: [[Data Collection]]
	- dependsOn:: [[Data Collection]]
	- implements:: [[Programmatic Advertising]]
	- supports:: [[Surveillance Capitalism]]
	- standardizedBy:: [[GDPR]]
	- relatedTo:: [[Privacy]]
	- relatedTo:: [[Data Privacy]]
	- relatedTo:: [[Consumer Protection]]
	- contrastsWith:: [[Privacy]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
