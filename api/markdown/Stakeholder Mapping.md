public:: true

# Stakeholder Mapping

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:stakeholder-mapping", "@type":"Page", "title":"Stakeholder Mapping", "vc:slug":"stakeholder-mapping", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:stakeholder-mapping",
  "@type":"Class",
  "label":"Stakeholder Mapping",
  "definition":"Stakeholder mapping is a visual technique for identifying the individuals, groups, and organisations that affect or are affected by a project, and plotting them against dimensions such as influence and interest to prioritise engagement effort. It produces a structured artefact, typically a grid or network diagram, that guides communication planning and risk management. Stakeholder mapping is commonly used as the initial, visual step within a broader stakeholder analysis process.",
  "domain":"governance",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:stakeholder-analysis","label":"Stakeholder Analysis"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:stakeholder-engagement","label":"Stakeholder Engagement"}
    ],
    "requires":[],
    "partOf":[
      {"@id":"urn:ngm:class:stakeholder-analysis","label":"Stakeholder Analysis"}
    ]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Stakeholder mapping is a visual technique for identifying the individuals, groups, and organisations that affect or are affected by a project, and plotting them against dimensions such as influence and interest to prioritise engagement effort. It produces a structured artefact, typically a grid or network diagram, that guides communication planning and risk management. Stakeholder mapping is commonly used as the initial, visual step within a broader stakeholder analysis process.
- ### Relationships
	- subClassOf:: [[Stakeholder Analysis]]
	- enables:: [[Stakeholder Engagement]]
	- partOf:: [[Stakeholder Analysis]]
