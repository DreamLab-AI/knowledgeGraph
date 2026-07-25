public:: true

# Integrity Verification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:integrity-verification", "@type":"Page", "title":"Integrity Verification", "vc:slug":"integrity-verification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:integrity-verification",
  "@type":"Class",
  "label":"Integrity Verification",
  "definition":"Integrity Verification is the process of confirming that data has not been altered, corrupted, or tampered with since it was created or last certified, typically using cryptographic hashes, checksums, or digital signatures compared against a trusted reference. It is applied to archives, backups, and provenance-tracked assets to detect unauthorised modification. Tamper-evident systems rely on integrity verification to make any alteration detectable even if it cannot be prevented.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Integrity Verification is the process of confirming that data has not been altered, corrupted, or tampered with since it was created or last certified, typically using cryptographic hashes, checksums, or digital signatures compared against a trusted reference. It is applied to archives, backups, and provenance-tracked assets to detect unauthorised modification. Tamper-evident systems rely on integrity verification to make any alteration detectable even if it cannot be prevented.
- ### Relationships
	- subClassOf:: [[Data Integrity]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
