public:: true

# Rough Consensus

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:rough-consensus", "@type":"Page", "title":"Rough Consensus", "vc:slug":"rough-consensus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:rough-consensus",
  "@type":"Class",
  "label":"Rough Consensus",
  "definition":"Rough consensus is a decision-making principle, central to internet standards development, in which a working group adopts a position when the dominant view has been established and substantive objections have been addressed, rather than requiring unanimity or a formal majority vote. Famously paired with running code in the IETF, it favours technically sound, broadly acceptable outcomes over precise headcounts. The chair judges the sense of the group, ensuring dissent is engaged with rather than merely outnumbered.",
  "domain":"standards",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:working-group","label":"Working Group"}],
    "uses":[{"@id":"urn:ngm:class:standards-body","label":"Standards Body"}],
    "supports":[{"@id":"urn:ngm:class:interoperability-standard","label":"Interoperability Standard"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "standardizedBy":[{"@id":"urn:ngm:class:internet-engineering-task-force","label":"Internet Engineering Task Force"}],
    "implements":[{"@id":"urn:ngm:class:governance-mechanism","label":"Governance Mechanism"}],
    "contrastsWith":[{"@id":"urn:ngm:class:voting-mechanism","label":"Voting Mechanism"}],
    "relatedTo":[{"@id":"urn:ngm:class:ietf","label":"IETF"},{"@id":"urn:ngm:class:standardization","label":"Standardization"},{"@id":"urn:ngm:class:standards","label":"Standards"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Rough consensus is a decision principle in which a [[Working Group]] adopts a position once the dominant view is clear and substantive objections are addressed, without requiring unanimity or a formal vote.
- It is a form of [[Consensus]] central to internet [[Standardization]], famously paired with running code in the [[Internet Engineering Task Force]].
- The chair judges the sense of the group, ensuring dissent is engaged rather than merely outvoted.
- ### Overview
- Rough consensus emerged from the engineering culture of internet standards, prioritising workable, widely acceptable solutions over procedural formality.
- It avoids both the paralysis of strict unanimity and the tyranny of a bare majority that ignores well-founded objections.
- The emphasis on running code grounds decisions in demonstrated technical viability rather than abstract argument.
- The approach has influenced governance far beyond the IETF, including open-source projects and other [[Standards Body]] processes.
- ### Mechanisms
- Sense of the group: the chair assesses whether a position commands broad support.
- Objection handling: substantive technical concerns must be addressed, not simply outnumbered.
- Humming and informal signalling rather than binding ballots.
- Running code: working implementations validate proposals before adoption.
- Appeals: structured recourse if participants believe consensus was misjudged.
- ### Applications
- Adoption of internet protocol specifications and RFCs.
- Governance of open standards and interoperability profiles.
- Open-source community decision-making on technical direction.
- Multi-stakeholder forums seeking durable, broadly acceptable outcomes.
- ### Relationships
- requires:: [[Working Group]]
- uses:: [[Standards Body]]
- supports:: [[Interoperability Standard]]
- enables:: [[Interoperability]]
- standardizedBy:: [[Internet Engineering Task Force]]
- implements:: [[Governance Mechanism]]
- contrastsWith:: [[Voting Mechanism]]
- relatedTo:: [[IETF]]
- relatedTo:: [[Standardization]]
- relatedTo:: [[Standards]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
