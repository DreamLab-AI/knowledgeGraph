public:: true

# Test Data Management

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:test-data-management",
  "@type": "Page",
  "title": "Test Data Management",
  "vc:slug": "test-data-management",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:test-data-management",
  "@type": "Class",
  "label": "Test Data Management",
  "definition": "Test data management is the discipline of provisioning, maintaining and controlling the datasets used in software testing, including generating synthetic data, masking or anonymising production data, and versioning fixtures so that tests are repeatable and do not leak sensitive information. It is a prerequisite for reliable automated testing processes, since flaky or stale test data is a common source of non-deterministic test failures. Mature test data management practices integrate with the software testing pipeline to refresh or reset datasets between test runs.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-testing",
      "label": "Software Testing"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Test data management is the discipline of provisioning, maintaining and controlling the datasets used in software testing, including generating synthetic data, masking or anonymising production data, and versioning fixtures so that tests are repeatable and do not leak sensitive information. It is a prerequisite for reliable automated testing processes, since flaky or stale test data is a common source of non-deterministic test failures. Mature test data management practices integrate with the software testing pipeline to refresh or reset datasets between test runs.
	- It is a [[Software Testing]] concept.
- ### Relationships
	- subClassOf:: [[Software Testing]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
