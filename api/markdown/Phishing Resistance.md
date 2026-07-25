public:: true

# Phishing Resistance

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:phishing-resistance", "@type":"Page", "title":"Phishing Resistance", "vc:slug":"phishing-resistance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:phishing-resistance", "@type": "Class", "label": "Phishing Resistance", "definition": "Phishing resistance is a property of an authentication mechanism whereby credentials cannot be captured, replayed, or relayed by an attacker impersonating a legitimate service, because the authentication protocol cryptographically binds the exchange to the origin requesting it. Mechanisms such as FIDO2/WebAuthn and hardware security keys achieve this by verifying the requesting origin as part of the cryptographic challenge, so a spoofed site cannot obtain a usable credential. It is increasingly mandated as a baseline requirement for high-assurance authentication standards.", "domain": "security", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}], "relations": {"partOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- Phishing resistance is a property of an authentication mechanism whereby credentials cannot be captured, replayed, or relayed by an attacker impersonating a legitimate service, because the authentication protocol cryptographically binds the exchange to the origin requesting it. Mechanisms such as FIDO2/WebAuthn and hardware security keys achieve this by verifying the requesting origin as part of the cryptographic challenge, so a spoofed site cannot obtain a usable credential. It is increasingly mandated as a baseline requirement for high-assurance authentication standards.
- ### Relationships
	- subClassOf:: [[Authentication]]
	- partOf:: [[Authentication]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
