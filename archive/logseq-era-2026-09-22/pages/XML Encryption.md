public:: true

# XML Encryption

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:xml-encryption",
  "@type": "Page",
  "title": "XML Encryption",
  "vc:slug": "xml-encryption",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:xml-encryption",
  "@type": "Class",
  "label": "XML Encryption",
  "definition": "XML Encryption is a W3C specification defining how to encrypt all or part of an XML document, including nested and structured data, while preserving the surrounding XML structure. It supports encrypting arbitrary data, XML elements or element content, and can combine multiple encrypted parts within a single document using standard key-transport and key-wrapping conventions. It is used alongside XML Signature in SAML assertions to protect sensitive attribute values exchanged between identity providers and service providers.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:encryption",
      "label": "Encryption"
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
	- XML Encryption is a W3C specification defining how to encrypt all or part of an XML document, including nested and structured data, while preserving the surrounding XML structure. It supports encrypting arbitrary data, XML elements or element content, and can combine multiple encrypted parts within a single document using standard key-transport and key-wrapping conventions. It is used alongside XML Signature in SAML assertions to protect sensitive attribute values exchanged between identity providers and service providers.
- ### Relationships
	- subClassOf:: [[Encryption]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
