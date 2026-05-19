schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SharedOwnershipModel
legacy_uri:: urn:visionclaw:concept:spatial-computing:shared-ownership-model
public:: true

# Shared Ownership Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f166915e2fdacae869ea464d4c6d46c134346e702d0c6e809c5f661fb31f6863",
  "@type": "Page",
  "vc:slug": "shared-ownership-model",
  "title": "Shared Ownership Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:democratized-investment",
      "vc:label": "Democratized Investment"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-tokenization",
      "vc:label": "Asset Tokenization"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7cf0fa10ad86"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SharedOwnershipModel"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10042"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Ownership Model"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:shared-ownership-model"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:shared-ownership-model"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f166915e2fdacae869ea464d4c6d46c134346e702d0c6e809c5f661fb31f6863@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shared-ownership-model",
  "@type": "Class",
  "label": "Shared Ownership Model",
  "definition": "A blockchain-enabled framework for fractional ownership of high-value assets through tokenization, allowing multiple parties to hold proportional stakes in real estate, digital art, intellectual property, or virtual assets with automated governance via smart contracts.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-tokenization",
      "label": "Asset Tokenization"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:democratized-investment",
        "label": "Democratized Investment"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shared-ownership-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f166915e2fdacae869ea464d4c6d46c134346e702d0c6e809c5f661fb31f6863"
  },
  "vc:resolutions": [
    {
      "raw": "[[Democratized Investment]]",
      "resolved": "urn:visionflow:linked:democratized-investment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Tokenization]]",
      "resolved": "urn:visionflow:owl:class:asset-tokenization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f166915e2fdacae869ea464d4c6d46c134346e702d0c6e809c5f661fb31f6863@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A blockchain-enabled framework for fractional ownership of high-value assets through tokenization, allowing multiple parties to hold proportional stakes in real estate, digital art, intellectual property, or virtual assets with automated governance via smart contracts.

- ### Semantic Classification
  - owl-class:: spatial-computing:SharedOwnershipModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Asset Tokenization]]
  - enables:: [[Democratized Investment]]

- ### Content

  - #### Tokenization Process
		- Asset valuation and verification
		- Token creation representing ownership fractions
		- Smart contract deployment for governance
		- Secondary market trading enablement
		- Profit distribution automation
  - #### Asset Classes
		- Real estate and property investment
		- Digital art and collectibles
		- Intellectual property rights
		- Virtual land and metaverse assets
		- Luxury goods and alternative investments

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
