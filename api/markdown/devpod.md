schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Devpod
legacy_uri:: urn:visionclaw:concept:infrastructure:devpod
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5bb6fc9bc0f7"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#Devpod"
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
      "vc:value": "devpod"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:devpod"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:devpod"
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
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:devpod",
  "@type": "OntologyClass",
  "label": "devpod",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "devpod is a technology infrastructure concept and a type of infrastructure.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3d89c92d6f8bec6142db8eea5391fb7151c9cd9093db90a66abc4c88da96c978@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
