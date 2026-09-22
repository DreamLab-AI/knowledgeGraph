public:: true

# Media Authentication

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:media-authentication", "@type":"Page", "title":"Media Authentication", "vc:slug":"media-authentication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:media-authentication",
  "@type":"Class",
  "label":"Media Authentication",
  "definition":"Media Authentication is the verification that a piece of digital media, such as an image, audio clip, or video, originates from a claimed source and has not been altered since capture or publication. It relies on cryptographic signatures, embedded provenance metadata, or perceptual hashing to detect tampering or synthetic generation. Standards such as C2PA define interoperable formats for attaching and verifying this provenance information.",
  "domain":"standards",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:content-provenance","label":"Content Provenance"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Media Authentication is the verification that a piece of digital media, such as an image, audio clip, or video, originates from a claimed source and has not been altered since capture or publication. It relies on cryptographic signatures, embedded provenance metadata, or perceptual hashing to detect tampering or synthetic generation. Standards such as C2PA define interoperable formats for attaching and verifying this provenance information.
- ### Relationships
	- subClassOf:: [[Content Provenance]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
