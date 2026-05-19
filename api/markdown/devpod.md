public:: true

# devpod
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978",
  "@type": "Page",
  "vc:slug": "devpod",
  "title": "devpod",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "devpod"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:devpod",
  "@type": "Class",
  "label": "devpod",
  "definition": "devpod is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:devpod:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - devpod is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Devpod
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - I use this: https://devpod.sh/
  - Instructions from Discord:
  - 1) Sign up for Rackspace
  2) Create cloudspace
  3) Select server mix. There is no need to set a load balancer, of turn on high availability. 
  4) Download kubectl file
  5) In devpod.sh desktop app, create a new provider. Point to that kubectl file. 
  6) Create devpod
  7) Install python, node, and claude code. 
  8) Copy the kubeconfig file into the devpod space.
  9) Prompt claude code to generate a "superuser" kubeconfig file
  10) Download the new kubeconfig file
  11) Update the provider to use the new kubeconfig file. 
  12) Profit
  - Same instructions--abridged
  1) Create rackspace cluster. Get kubeconfig file--this one will expire. 
  2) Initialize claude code within pod on cluster using downloaded kubeconfig 
  3) Use claude code to generate replacement kubeconfig file that doesn't expire. 
  4) Update devpod.sh provider configuration to use new kubeconfig file.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
