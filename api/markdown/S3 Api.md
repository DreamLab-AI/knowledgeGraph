public:: true

# S3 Api

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:s3-api",
  "@type": "Page",
  "title": "S3 Api",
  "vc:slug": "s3-api",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:s3-api",
  "@type": "Class",
  "label": "S3 Api",
  "definition": "The S3 API is a RESTful, HTTP-based application programming interface for object storage that exposes buckets and objects through operations such as PUT, GET, DELETE and LIST. Originating with Amazon Simple Storage Service, it has become a de facto standard implemented by many cloud and on-premises storage systems, enabling portable, vendor-neutral object access. Clients authenticate with signed requests and address resources by bucket and key, allowing scalable, durable storage of unstructured data.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:object-storage",
      "label": "Object Storage"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:object-storage",
        "label": "Object Storage"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Cloud Storage"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:storage-infrastructure",
        "label": "Storage Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:data-ingestion",
        "label": "Data Ingestion"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The [[S3 Api]] is a RESTful interface for [[Object Storage]] built on the [[REST API]] style, widely adopted across [[Cloud Storage]] and [[Storage Infrastructure]].
- ### Overview
  - Exposes object operations (PUT, GET, DELETE, LIST) over HTTP against buckets and keys.
  - Has become a de facto industry standard, implemented by numerous compatible storage backends.
  - Uses request signing for authentication and fine-grained access policies.
- ### Mechanisms
  - Bucket and key namespace for addressing immutable objects.
  - Signed request authentication and policy-based authorisation.
  - Multipart upload, versioning and lifecycle management semantics.
  - Compatibility layers that let diverse systems present an S3-shaped surface.
- ### Applications
  - Backing store for data lakes and analytics pipelines.
  - Static asset and media hosting at scale.
  - Backup, archival and disaster-recovery storage.
  - Portable application storage across cloud providers.
- ### Relationships
  - implements:: [[REST API]]
  - implements:: [[Object Storage]]
  - standardizedBy:: [[API]]
  - partOf:: [[Cloud Storage]]
  - uses:: [[API Gateway]]
  - uses:: [[Authentication]]
  - enables:: [[Data Storage]]
  - enables:: [[Interoperability]]
  - requires:: [[Access Control]]
  - supports:: [[Storage Infrastructure]]
  - relatedTo:: [[Cloud Computing]]
  - relatedTo:: [[Data Ingestion]]
  - dependsOn:: [[Infrastructure]]
  - bridgesTo:: [[Data Pipeline]]
- ### Provenance
  - updated:: 2026-06-15
