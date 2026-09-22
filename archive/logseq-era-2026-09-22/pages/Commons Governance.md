public:: true

# Commons Governance

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:commons-governance", "@type":"Page", "title":"Commons Governance", "vc:slug":"commons-governance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:commons-governance",
  "@type":"Class",
  "label":"Commons Governance",
  "definition":"Commons governance is the set of institutions, rules and collective practices through which a community manages a shared resource so that it remains productive and is not depleted by individual self-interest. Drawing on Elinor Ostrom's design principles, it relies on clearly defined boundaries, participatory rule-making, monitoring and graduated sanctions rather than pure markets or central control. In blockchain contexts it is expressed through DAOs and public-goods funding that coordinate stewardship of shared digital infrastructure.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:retroactive-public-goods-funding","label":"Retroactive Public Goods Funding"},{"@id":"urn:ngm:class:quadratic-funding","label":"Quadratic Funding"},{"@id":"urn:ngm:class:dao","label":"DAO"}],
    "bridgesTo":[{"@id":"urn:ngm:class:dao","label":"DAO"},{"@id":"urn:ngm:class:collective-action","label":"Collective Action"}],
    "partOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "enables":[{"@id":"urn:ngm:class:collective-action","label":"Collective Action"}],
    "uses":[{"@id":"urn:ngm:class:dao","label":"DAO"},{"@id":"urn:ngm:class:governance-token","label":"Governance Token"}],
    "supports":[{"@id":"urn:ngm:class:retroactive-public-goods-funding","label":"Retroactive Public Goods Funding"},{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
    "requires":[{"@id":"urn:ngm:class:collective-action","label":"Collective Action"}],
    "dependsOn":[{"@id":"urn:ngm:class:governance-token","label":"Governance Token"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Commons Governance]] is the set of institutions and collective practices through which a community stewards a shared resource so it stays productive and is not over-exploited. It is a form of [[Governance]] rooted in Ostrom's design principles.
- In blockchain it is expressed through [[DAO]]s, [[Governance Token]]s and [[Retroactive Public Goods Funding]] that coordinate care of shared digital infrastructure.
- ### Overview
- The classic problem of the commons is that rational individuals, acting alone, deplete a shared resource. Commons governance answers this not by privatising or centralising the resource but by giving the community self-organised rules to manage it.
- Elinor Ostrom's empirical work showed that durable commons share features such as clear membership, locally crafted rules, accessible monitoring and graduated sanctions for violations.
- Digital commons - open-source code, protocols and public datasets - face the same coordination challenge, motivating on-chain mechanisms that fund and govern shared goods.
- ### Key aspects
- Defined boundaries: who may use the resource and to what extent is explicit.
- Participatory rule-making: those affected by rules help shape them.
- Monitoring: usage is observable so free-riding can be detected.
- Graduated sanctions: penalties scale with the severity of violations.
- Nested governance: local arrangements sit within broader coordination layers.
- ### Applications
- DAO stewardship of shared protocols and treasuries.
- Funding of digital public goods via quadratic and retroactive mechanisms.
- Management of open datasets and open-source maintenance.
- Coordination of community-owned infrastructure and ecological commons.
- ### Relationships
- relatedTo:: [[Retroactive Public Goods Funding]]
- relatedTo:: [[Quadratic Funding]]
- relatedTo:: [[DAO]]
- bridgesTo:: [[DAO]]
- bridgesTo:: [[Collective Action]]
- partOf:: [[Governance]]
- enables:: [[Collective Action]]
- uses:: [[DAO]]
- uses:: [[Governance Token]]
- supports:: [[Retroactive Public Goods Funding]]
- supports:: [[Sustainability]]
- requires:: [[Collective Action]]
- dependsOn:: [[Governance Token]]
- ### Provenance
- updated:: 2026-06-15
