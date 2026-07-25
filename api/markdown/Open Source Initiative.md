public:: true

# Open Source Initiative

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-source-initiative", "@type":"Page", "title":"Open Source Initiative", "vc:slug":"open-source-initiative", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:open-source-initiative",
  "@type":"Class",
  "label":"Open Source Initiative",
  "definition":"The Open Source Initiative is a non-profit organisation that stewards the Open Source Definition and maintains the authoritative process for reviewing and approving software licences as conforming to it. By certifying which licences qualify as open source, it provides a stable, community-recognised standard that distinguishes genuine open-source terms from merely source-available ones. The organisation also advocates for open-source software and educates on licensing and policy.",
  "domain":"distributed-collaboration",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:standards-organization","label":"Standards Organization"}],
  "relations":{
    "standardizedBy":[
      {"@id":"urn:ngm:class:open-standard","label":"Open Standard"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"},
      {"@id":"urn:ngm:class:community","label":"Community"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:open-source-licence","label":"Open Source Licence"},
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:open-standard","label":"Open Standard"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:proprietary-software","label":"Proprietary Software"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"},
      {"@id":"urn:ngm:class:open-source-licence","label":"Open Source Licence"},
      {"@id":"urn:ngm:class:distributed-collaboration","label":"Distributed Collaboration"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:standards","label":"Standards"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The Open Source Initiative is the non-profit that maintains the Open Source Definition and approves conforming licences, acting as a [[Standards Organization]] for [[Open Source]].
- Its certification underpins [[Licensing]] decisions and the credibility of an [[Open Source Licence]].
- ### Overview
- By defining what counts as open source and reviewing licences against that definition, the organisation gives the ecosystem a shared, authoritative reference point.
- It distinguishes genuine open-source terms from source-available or restrictive alternatives.
- Beyond certification, it advocates for open-source adoption and provides licensing education and policy guidance.
- ### Key aspects
- Stewardship of the Open Source Definition.
- A licence review and approval process producing a recognised list.
- Advocacy and education on open-source practice and policy.
- A trusted standard distinguishing open source from proprietary terms.
- Community engagement across maintainers, companies and users.
- ### Mechanisms
- Submitted licences are evaluated against the criteria of the definition.
- Approved licences gain community recognition and interoperability expectations.
- Public discussion and review keep the process transparent.
- Guidance helps projects choose appropriate, compatible licences.
- ### Applications
- Selecting a compliant licence when releasing software openly.
- Procurement and compliance checks relying on approved-licence lists.
- Policy and governance decisions distinguishing open from proprietary.
- Education for newcomers to open-source licensing.
- ### Relationships
- subClassOf:: [[Standards Organization]]
- standardizedBy:: [[Open Standard]]
- supports:: [[Open Source]]
- supports:: [[Community]]
- enables:: [[Open Source Licence]]
- enables:: [[Licensing]]
- implements:: [[Open Standard]]
- contrastsWith:: [[Proprietary Software]]
- uses:: [[Licensing]]
- relatedTo:: [[Open Source]]
- relatedTo:: [[Distributed Collaboration]]
- bridgesTo:: [[Standards]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
