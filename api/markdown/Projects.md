schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Projects
legacy_uri:: urn:visionclaw:concept:infrastructure:projects
public:: true

# Projects
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f",
  "@type": "Page",
  "vc:slug": "projects",
  "title": "Projects",
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
      "vc:value": "sha256-12-6f8b767ad683"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#Projects"
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
      "vc:value": "Projects"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:projects"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:projects"
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
    "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:projects",
  "@type": "Class",
  "label": "Projects",
  "definition": "Projects is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:projects:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Projects is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Projects
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Fashion 3D objects
  - TODO write a script to start the docker for CRM
		- ```text
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker ps
		  CONTAINER ID   IMAGE                                  COMMAND                  CREATED        STATUS        PORTS                                       NAMES
		  d8bc0b15a890   yanwk/comfyui-boot:megapak             "bash /runner-script…"   9 hours ago    Up 9 hours    0.0.0.0:8188->8188/tcp, :::8188->8188/tcp   comfyui-mega
		  7428acfbd648   ghcr.io/open-webui/open-webui:ollama   "bash start.sh"          27 hours ago   Up 22 hours   0.0.0.0:3000->8080/tcp, :::3000->8080/tcp   open-webui
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker stop comfyui-mega
		  comfyui-mega

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
