public:: true

# Intel
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4c29e3c8cabd4dfc4c47983c813a270da8ac045636fd93e1325057fdaefc1af",
  "@type": "Page",
  "vc:slug": "intel",
  "title": "Intel",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:intel-sgx",
      "vc:label": "Intel SGX"
    },
    {
      "@id": "urn:visionflow:linked:trusted-execution-environment",
      "vc:label": "Trusted Execution Environment"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:https-www-intel-com",
      "vc:label": "https://www.intel.com/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-intel-com-content-www-us-en-developer-tools-software-guard-extensions-overview-html",
      "vc:label": "https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Intel"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intel",
  "@type": "Class",
  "label": "Intel",
  "definition": "Intel is a semiconductor manufacturer that designs and produces microprocessors, chipsets and related hardware including security features such as Software Guard Extensions.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware",
      "label": "Hardware"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:intel-sgx",
        "label": "Intel SGX"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:intel:96eebba49dbb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e4c29e3c8cabd4dfc4c47983c813a270da8ac045636fd93e1325057fdaefc1af"
  },
  "vc:resolutions": [
    {
      "raw": "[[Intel SGX]]",
      "resolved": "urn:visionflow:linked:intel-sgx",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trusted Execution Environment]]",
      "resolved": "urn:visionflow:linked:trusted-execution-environment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.intel.com/]]",
      "resolved": "urn:visionflow:linked:https-www-intel-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html]]",
      "resolved": "urn:visionflow:linked:https-www-intel-com-content-www-us-en-developer-tools-software-guard-extensions-overview-html",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Intel is a semiconductor manufacturer that designs and produces microprocessors, chipsets and related hardware including security features such as Software Guard Extensions.

- ### Semantic Classification
  - owl-class:: distributed-systems:Intel
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Hardware]]
  - bridges-to:: [[Information Security]]
  - enables:: [[Intel SGX]], [[Trusted Execution Environment]]

- ### Content
  - Intel designs central processing units used across personal computers, servers and embedded systems. Its product lines include processor families for client and data centre workloads.
  - Among its security technologies is Software Guard Extensions, which provides hardware-isolated memory regions known as enclaves. These features support confidential computing on Intel-based systems.

- ### Provenance
  - sources:: [[https://www.intel.com/]], [[https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html]]
  - migration-date:: 2026-05-29T00:00:00Z
