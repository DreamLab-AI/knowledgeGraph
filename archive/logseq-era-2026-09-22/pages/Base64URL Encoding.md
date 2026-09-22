public:: true

# Base64URL Encoding

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:base64url-encoding",
  "@type": "Page",
  "title": "Base64URL Encoding",
  "vc:slug": "base64url-encoding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:base64url-encoding",
  "@type": "Class",
  "label": "Base64URL Encoding",
  "definition": "Base64URL encoding is a variant of Base64 that replaces the characters plus and slash with hyphen and underscore and typically omits padding, so that encoded data can be safely embedded in URLs and filenames without escaping. It is the encoding used for the header, payload and signature segments of a JSON Web Token, and for the compact serialisation used by SD-JWT. Its safety for use in URL query parameters and path segments is the reason it was chosen over standard Base64 for these token formats.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format",
      "label": "Data Format"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Base64URL encoding is a variant of Base64 that replaces the characters plus and slash with hyphen and underscore and typically omits padding, so that encoded data can be safely embedded in URLs and filenames without escaping. It is the encoding used for the header, payload and signature segments of a JSON Web Token, and for the compact serialisation used by SD-JWT. Its safety for use in URL query parameters and path segments is the reason it was chosen over standard Base64 for these token formats.
- ### Relationships
	- subClassOf:: [[Data Format]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
