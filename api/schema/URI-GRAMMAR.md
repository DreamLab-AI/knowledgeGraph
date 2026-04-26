# VisionClaw URI Grammar v2

## Identity

```
did:nostr:<64-hex-pubkey>
```

BIP-340 x-only pubkey. One per collaborator. Used for optional signing of ontology assertions.

## Resource URIs

```
urn:visionclaw:<kind>:[<scope>:]<local>
```

### Ontology Kinds

| Kind | Rule | Scope | Local | Example |
|------|------|-------|-------|---------|
| `concept` | R3 | domain | kebab-slug | `urn:visionclaw:concept:artificial-intelligence:ai-agent-system` |
| `relation` | R3 | domain | kebab-slug | `urn:visionclaw:relation:artificial-intelligence:has-perception-system` |
| `domain` | R3 | none | slug | `urn:visionclaw:domain:artificial-intelligence` |
| `layer` | R3 | none | slug | `urn:visionclaw:layer:compute` |
| `axiom` | R1 | pubkey | sha256-12 | `urn:visionclaw:axiom:0abc...:sha256-12-d3adb33f` |

### Operational Kinds (from agentbox)

| Kind | Rule | Scope | Local | Example |
|------|------|-------|-------|---------|
| `credential` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:credential:0abc...:sha256-12-...` |
| `mandate` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:mandate:0abc...:sha256-12-...` |
| `receipt` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:receipt:0abc...:sha256-12-...` |
| `activity` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:activity:0abc...:sha256-12-...` |
| `event` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:event:0abc...:sha256-12-...` |
| `pod` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:pod:0abc...:sha256-12-...` |
| `envelope` | R1+R2 | pubkey | sha256-12 | `urn:visionclaw:envelope:0abc...:sha256-12-...` |
| `bead` | R2 | pubkey | slug | `urn:visionclaw:bead:0abc...:task-123` |
| `dataset` | R2 | pubkey | slug | `urn:visionclaw:dataset:0abc...:training-set-a` |

### Static Kinds (no scope)

| Kind | Rule | Local | Example |
|------|------|-------|---------|
| `skill` | R3 | slug | `urn:visionclaw:skill:console-buddy` |
| `mcp` | R3 | slug | `urn:visionclaw:mcp:claude-flow` |
| `agent` | R3 | slug | `urn:visionclaw:agent:security-auditor` |
| `adr` | R3 | number | `urn:visionclaw:adr:013` |
| `prd` | R3 | number | `urn:visionclaw:prd:006` |
| `ddd` | R3 | number | `urn:visionclaw:ddd:004` |
| `thing` | R3 | slug | `urn:visionclaw:thing:nostr-relay` |
| `meta` | R3 | slug | `urn:visionclaw:meta:runtime` |

## Minting Rules

**R1 (Content-addressed):** `<local> = sha256-12-<first 12 hex chars of SHA-256(stableStringify(payload))>`. Same input always yields same URI. Used for signed assertions, credentials, receipts.

**R2 (Scope-bearing):** `<scope>` carries agent's BIP-340 x-only pubkey hex (64 chars). Enables owner-filtered queries.

**R3 (Stable-on-identity):** `<local>` is a human-derivable slug from the entity's preferred term. `kebab-case(preferred-term)`. Same concept always has same URI across rebuilds and federations.

## Concept URI Derivation (v2)

In v2 the domain segment of a concept URI uses the **full-word domain name** (not the legacy short code).

```
preferred-term = "AI Agent System"
domain         = "artificial-intelligence"
slug           = kebab-case("AI Agent System") = "ai-agent-system"
URI  = urn:visionclaw:concept:artificial-intelligence:ai-agent-system
IRI  = http://narrativegoldmine.com/artificial-intelligence#AIAgentSystem
```

The `iri::` property is the canonical `@id`; the `uri::` property is the operational alias (URN). An explicit `owl:sameAs` triple links them.

## Domain Segment Registry (v2 full-word names)

| v2 Domain Segment | v1 Short Code | IRI Namespace |
|-------------------|---------------|---------------|
| `artificial-intelligence` | `ai` | `http://narrativegoldmine.com/artificial-intelligence#` |
| `blockchain` | `bc` | `http://narrativegoldmine.com/blockchain#` |
| `spatial-computing` | `mv` | `http://narrativegoldmine.com/spatial-computing#` |
| `robotics` | `rb` | `http://narrativegoldmine.com/robotics#` |
| `distributed-collaboration` | `tc` | `http://narrativegoldmine.com/distributed-collaboration#` |
| `infrastructure` | `ngm` | `http://narrativegoldmine.com/infrastructure#` |

> The v1 short codes remain valid in operational URNs for existing agentbox integrations. New concept pages must use the v2 full-word domain segment.

## Content Integrity

Every concept carries a `content-hash` property: `sha256-12-<hash>` computed from the stable JSON stringification of the concept's core definition fields (definition, relationships, owl-class). This hash:
- Changes on edit (version fingerprint)
- Is the payload signed when `signature` is present
- Enables tamper detection without making the URI mutable

## Signing Model

Assertions are **optionally signable**. When signed:
```
author-did:: did:nostr:<pubkey>
content-hash:: sha256-12-<hash of definition payload>
signature:: <schnorr signature over content-hash by author's privkey>
```

Multiple contributors can sign the same concept page. The `contributors` field lists all DIDs that have attested.

## Resolution

`/v2/uri/<urn>` returns:
- **307**: URN resolvable, follow redirect
- **404**: Well-formed but not found
- **410**: Deliberately retracted

## Namespace Registry (v2)

| Prefix | IRI | Scope |
|--------|-----|-------|
| `vcw:` | `https://visionclaw.dreamlab-ai.systems/ns/v2#` | Operational + meta |
| `infrastructure:` | `http://narrativegoldmine.com/infrastructure#` | Cross-domain core (was `ngm:`) |
| `artificial-intelligence:` | `http://narrativegoldmine.com/artificial-intelligence#` | AI domain |
| `blockchain:` | `http://narrativegoldmine.com/blockchain#` | Blockchain domain |
| `spatial-computing:` | `http://narrativegoldmine.com/spatial-computing#` | Spatial Computing domain |
| `robotics:` | `http://narrativegoldmine.com/robotics#` | Robotics domain |
| `distributed-collaboration:` | `http://narrativegoldmine.com/distributed-collaboration#` | Distributed Collaboration domain |

> The `ngm:` prefix remains declared in Turtle output as an alias pointing to `http://narrativegoldmine.com/infrastructure#` for backward compatibility with existing queries.
