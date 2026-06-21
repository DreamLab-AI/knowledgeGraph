- ### Definition
  - Player Two code is the technical implementation layer of the Player Two platform, comprising a Vue.js front-end, BIP85-derived key management for trustless authentication, a Nostr-relay-based messaging architecture, and middleware whitelist logic. It enables encrypted group collaboration without server-held keys, using derivation path m/44'/1237 for per-user identity.

- ### Semantic Classification
  - owl-class:: infrastructure:PlayerTwoCode
  - owl-role:: Concept

- ### Relationships
  - implements: [[Player Two]], [[Decentralised Identity]]
  - uses: [[Cryptography]], [[Authentication]]
  - dependsOn: [[Collaboration Platform]]
  - enables: [[Identity Management]]

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
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z