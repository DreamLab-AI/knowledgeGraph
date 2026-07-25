public:: true

# Data Flow Diagram

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-flow-diagram", "@type":"Page", "title":"Data Flow Diagram", "vc:slug":"data-flow-diagram", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-flow-diagram",
  "@type":"Class",
  "label":"Data Flow Diagram",
  "definition":"A data flow diagram (DFD) is a visual representation of how data moves through a system, showing processes, data stores, external entities, and the trust boundaries between them. In security practice it is the standard input artefact for threat modelling, since attack surfaces and applicable threats are identified by walking each flow and boundary crossing in the diagram. It is a structural tool rather than a behavioural one, deliberately omitting control flow and timing to keep the focus on where data moves and where it is trusted less.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:threat-modelling","label":"Threat Modelling"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:threat-modelling","label":"Threat Modelling"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A data flow diagram (DFD) is a visual representation of how data moves through a system, showing processes, data stores, external entities, and the trust boundaries between them. In security practice it is the standard input artefact for threat modelling, since attack surfaces and applicable threats are identified by walking each flow and boundary crossing in the diagram. It is a structural tool rather than a behavioural one, deliberately omitting control flow and timing to keep the focus on where data moves and where it is trusted less.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
