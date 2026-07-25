public:: true

# Length Normalisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:length-normalisation", "@type":"Page", "title":"Length Normalisation", "vc:slug":"length-normalisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:length-normalisation", "@type": "Class", "label": "Length Normalisation", "definition": "Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value less than one. It is a standard component of neural machine translation and text generation decoders.", "domain": "artificial-intelligence", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}], "relations": {"partOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value less than one. It is a standard component of neural machine translation and text generation decoders.
- ### Relationships
	- subClassOf:: [[Natural Language Processing]]
	- partOf:: [[Natural Language Processing]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
