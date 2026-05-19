schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PlayerTwoCode
legacy_uri:: urn:visionclaw:concept:infrastructure:player-two-code
public:: true

# Player Two code
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d6e8bc45878db97fbcd7be8e81c6d7c63e27d1282a0cea4c3bce239f367064b7",
  "@type": "Page",
  "vc:slug": "player-two-code",
  "title": "Player Two code",
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
      "vc:value": "sha256-12-48625081df08"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#PlayerTwoCode"
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
      "vc:value": "Player Two code"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:player-two-code"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:player-two-code"
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
    "@id": "urn:visionflow:page:d6e8bc45878db97fbcd7be8e81c6d7c63e27d1282a0cea4c3bce239f367064b7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:player-two-code",
  "@type": "Class",
  "label": "Player Two code",
  "definition": "Player Two code is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:player-two-code:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d6e8bc45878db97fbcd7be8e81c6d7c63e27d1282a0cea4c3bce239f367064b7"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d6e8bc45878db97fbcd7be8e81c6d7c63e27d1282a0cea4c3bce239f367064b7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Player Two code is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PlayerTwoCode
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{renderer code_diagram,mermaid}}
  - ```mermaid sequenceDiagram
	      participant User
	      participant Client
	      participant Middleware
	      participant PaymentServer
	      User->>Client: Generate BIP85 Master Key
	      Client->>Client: Derive Private Key from m/44'/1237/0
	      Client->>Client: Generate Public Key from Private Key
	      Client->>PaymentServer: Send Public Key for Auth
	      PaymentServer->>Middleware: Add Public Key to Whitelist
	      User->>Client: Request access to service
	      Client->>Middleware: Authenticate with WebJSON token
	      Middleware->>Client: Grant/Deny access
  ```
  - ```mermaid graph LR
	    AppVue[App.vue]
	    mainTs[main.ts]
	    BannerVue[Banner.vue]
	    router
	    stores
	    AppVue --> mainTs
	    mainTs --> router
	    mainTs --> stores
	    BannerVue --> stores ```
  - ```mermaid graph TB
	    src[Src]
	    src --> AppVue[App.vue]
	    src --> mainTs[main.ts]
	    src --> themeTs[theme.ts]
	    src --> assets[Assets]
	    assets --> animations
	    assets --> backgrounds
	    assets --> characters
	    assets --> fonts
	    src --> components[Components]
	    components --> BannerVue[Banner.vue]
	    components --> apps
	    components --> auth
	    components --> buttons
	    components --> cards
	    src --> css
	    src --> modules
	    src --> router
	    src --> stores
	    src --> views ```
  - ```mermaid
  graph TB
    Root["Root"]
    Root --> README["README.md"]
    Root --> packageJson["package.json"]
    Root --> tsconfig["tsconfig.json"]
    Root --> viteConfig["vite.config.ts"]
    Root --> playertwoConfig["playertwo.config.ts"]
    Root --> indexHtml["index.html"]
    Root --> keys["keys"]
    keys --> firebaseExample["firebase_example.json"]
    Root --> src["src"]
    src --> AppVue["App.vue"]
    src --> mainTs["main.ts"]
    src --> themeTs["theme.ts"]
    src --> assets["assets"]
    assets --> animations
    assets --> backgrounds
    assets --> characters
    assets --> fonts
    src --> components["components"]
    components --> BannerVue["Banner.vue"]
    components --> apps
    components --> auth
    components --> buttons
    components --> cards
    src --> css
    src --> modules
    src --> router
    src --> stores
    src --> views

  ## Current system
	  ```
  - ## Group file encryption
  - Brief from Kalila
		- No keys are traded on our server. (trustless)
		- One user can create an encrypted object, then invite other users to join after the fact.
		- They can share a code or key over Discord for example to complete the initial invite process if need be.
		- ONE of N users can ALWAYS decrypt and reencrypt the object.
  - Would like to use Solid-Lite and NosDev, but they are using firebase containers right now
  - This is the workflow
		- Each user of a system has a self generated bip85 master key.
		- From that we can get access to all of the usual derivation paths.
		- The path that they are using for their ID to authenticate with the server is m/44'/1237
		- The users client creates a 32 byte private key from the 0 index of path 1237
		- A public key is created from that.
		- The public key is used as part of a webjson token to auth with a payment server, and the public key is added as hex to the whitelist for the server side
		- The client can then communicate with "middleware" server which contains the whitelist.
  - Diagrams from VSCode
  - ```mermaid
  graph TB
    Root["Root"]
    Root --> README["README.md"]
    Root --> packageJson["package.json"]
    Root --> tsconfig["tsconfig.json"]
    Root --> viteConfig["vite.config.ts"]
    Root --> playertwoConfig["playertwo.config.ts"]
    Root --> indexHtml["index.html"]
    Root --> keys["keys"]
    keys --> firebaseExample["firebase_example.json"]
    Root --> src["src"]
    src --> AppVue["App.vue"]
    src --> mainTs["main.ts"]
    src --> themeTs["theme.ts"]
    src --> assets["assets"]
    assets --> animations
    assets --> backgrounds
    assets --> characters
    assets --> fonts
    src --> components["components"]
    components --> BannerVue["Banner.vue"]
    components --> apps
    components --> auth
    components --> buttons
    components --> cards
    src --> css
    src --> modules
    src --> router
    src --> stores
    src --> views
  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
