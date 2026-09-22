public:: true

# Skeletal Mesh

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:skeletal-mesh", "@type":"Page", "title":"Skeletal Mesh", "vc:slug":"skeletal-mesh", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:skeletal-mesh",
  "@type":"Class",
  "label":"Skeletal Mesh",
  "definition":"A skeletal mesh is a 3D character or object model bound to an underlying bone hierarchy, or skeleton, so that mesh vertices deform smoothly as the skeleton is posed or animated. It is the standard representation for animatable characters in avatar systems and real-time engines, and it underlies procedural animation techniques that manipulate bone transforms algorithmically at runtime. Building one requires prior UV unwrapping and rigging work on the base mesh.",
  "domain":"spatial-computing",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:character-rigging","label":"Character Rigging"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Skeletal Mesh]] A skeletal mesh is a 3D character or object model bound to an underlying bone hierarchy, or skeleton, so that mesh vertices deform smoothly as the skeleton is posed or animated. It is the standard representation for animatable characters in avatar systems and real-time engines, and it underlies procedural animation techniques that manipulate bone transforms algorithmically at runtime. Building one requires prior UV unwrapping and rigging work on the base mesh.
- ### Relationships
	- subClassOf:: [[Character Rigging]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
