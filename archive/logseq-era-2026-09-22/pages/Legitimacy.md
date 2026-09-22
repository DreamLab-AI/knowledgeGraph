public:: true

# Legitimacy
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:legitimacy", "@type":"Page", "title":"Legitimacy", "vc:slug":"legitimacy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:legitimacy",
  "@type":"Class",
  "label":"Legitimacy",
  "definition":"Legitimacy is the property of an authority, institution or decision being widely accepted as rightful and worthy of compliance by the people it governs. It rests on perceptions of fairness, due process, representation and shared values rather than on coercion alone, and it can be derived from procedure, performance, tradition or consent. In governance systems, including decentralised and blockchain communities, legitimacy is what makes coordinated action stable and what allows rules to be followed without constant enforcement.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "dependsOn":[
      {"@id":"urn:ngm:class:trust","label":"Trust"},
      {"@id":"urn:ngm:class:consensus","label":"Consensus"},
      {"@id":"urn:ngm:class:transparency","label":"Transparency"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:stakeholder-engagement","label":"Stakeholder Engagement"},
      {"@id":"urn:ngm:class:governance-model","label":"Governance Model"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:accountability","label":"Accountability"},
      {"@id":"urn:ngm:class:fairness","label":"Fairness"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:community-governance","label":"Community Governance"},
      {"@id":"urn:ngm:class:decentralised-governance","label":"Decentralised Governance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:stakeholder-trust","label":"Stakeholder Trust"},
      {"@id":"urn:ngm:class:transparency","label":"Transparency"},
      {"@id":"urn:ngm:class:accountability","label":"Accountability"},
      {"@id":"urn:ngm:class:social-contract","label":"Social Contract"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Legitimacy is the quality that makes a form of [[Governance]] accepted as rightful by those it governs.
	- It is built on [[Trust]], [[Transparency]] and a credible claim to represent the governed, not on force.
	- Where legitimacy holds, rules are followed because they are seen as fair, reducing the need for enforcement.
- ### Overview
	- Political theory distinguishes input legitimacy (fair process and participation) from output legitimacy (effective results).
	- Legitimacy can flow from consent, tradition, legal-rational procedure or charismatic authority.
	- In digital and decentralised communities it determines which forks, upgrades or decisions the community will actually follow.
	- It is fragile: perceived capture, opacity or unfairness can erode it faster than it accrues.
- ### Key aspects
	- Procedural legitimacy arises from transparent, inclusive and consistent decision processes.
	- Performance legitimacy depends on delivering outcomes that stakeholders value.
	- Representational legitimacy requires that affected parties have voice through [[Stakeholder Engagement]].
	- Continuity legitimacy draws on precedent and the credible expectation that rules persist.
- ### Applications
	- Constitutional design and electoral systems that confer the right to rule.
	- Standards bodies and [[Community Governance]] whose authority rests on voluntary adoption.
	- Blockchain protocol upgrades where social consensus, not code alone, decides the canonical chain.
	- Institutional reform programmes that seek to rebuild eroded public trust.
- ### Relationships
	- subClassOf:: [[Governance]]
	- dependsOn:: [[Trust]]
	- dependsOn:: [[Consensus]]
	- dependsOn:: [[Transparency]]
	- enables:: [[Stakeholder Engagement]]
	- enables:: [[Governance Model]]
	- requires:: [[Accountability]]
	- requires:: [[Fairness]]
	- supports:: [[Community Governance]]
	- supports:: [[Decentralised Governance]]
	- relatedTo:: [[Stakeholder Trust]]
	- relatedTo:: [[Transparency]]
	- relatedTo:: [[Accountability]]
	- relatedTo:: [[Social Contract]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
