public:: true

# Time Lock
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:time-lock", "@type":"Page", "title":"Time Lock", "vc:slug":"time-lock", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:time-lock",
  "@type":"Class",
  "label":"Time Lock",
  "definition":"A time lock is a cryptographic and protocol-level constraint that prevents the spending or execution of funds, transactions, or governance actions until a specified time or block height has been reached. Implemented on blockchains through absolute and relative locktime fields and dedicated script opcodes, time locks enforce delayed settlement, contestation windows, and staged execution without trusting a third party. They are foundational to payment channels, atomic swaps, vesting schedules, and the safety delays in DAO governance, where they give participants time to react before irreversible actions occur.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:bitcoin-script","label":"Bitcoin Script"}],
    "uses":[{"@id":"urn:ngm:class:bitcoin-script","label":"Bitcoin Script"},{"@id":"urn:ngm:class:transaction","label":"Transaction"}],
    "supports":[{"@id":"urn:ngm:class:hashed-timelock-contract","label":"Hashed Timelock Contract"},{"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"},{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "enables":[{"@id":"urn:ngm:class:atomic-swap","label":"Atomic Swap"}],
    "requires":[{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "dependsOn":[{"@id":"urn:ngm:class:consensus","label":"Consensus"},{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
    "implements":[{"@id":"urn:ngm:class:timelock","label":"Timelock"}],
    "bridgesTo":[{"@id":"urn:ngm:class:hashed-timelock-contract","label":"Hashed Timelock Contract"},{"@id":"urn:ngm:class:dao","label":"DAO"}],
    "contrastsWith":[{"@id":"urn:ngm:class:multisignature","label":"Multisignature"}],
    "relatedTo":[{"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"},{"@id":"urn:ngm:class:atomic-swap","label":"Atomic Swap"},{"@id":"urn:ngm:class:governance","label":"Governance"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:timelock","label":"Timelock"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Time Lock]] is a cryptographic and protocol-level constraint that prevents spending or execution of funds, transactions, or governance actions until a specified time or block height is reached.
  - On blockchains it is implemented through absolute and relative locktime fields and dedicated [[Bitcoin Script]] opcodes, enforcing delayed settlement and contestation windows without trusting a third party.
  - It is foundational to the [[Lightning Network]], [[Atomic Swap]]s, vesting schedules, and the safety delays in [[DAO]] [[Governance]].

- ### Overview
  - Time locks make time a first-class condition in spending rules: a transaction or branch becomes valid only once a deadline, expressed as a timestamp or block count, has passed.
  - Absolute locks fix a point in chain time; relative locks specify a delay measured from when an output was confirmed, enabling per-output maturation rules.
  - Because enforcement is by [[Consensus]] rather than by any custodian, time locks provide trust-minimised guarantees that contracts cannot be unwound prematurely.
  - They compose with hashlocks and signatures to build conditional, multi-party protocols whose safety depends on giving honest parties a window to respond.

- ### Mechanisms
  - #### Absolute and relative locktime
    - Transaction-level locktime and sequence fields gate validity against block height or median time.
    - Relative locks (sequence-based) mature outputs a fixed interval after confirmation.
  - #### Script opcodes
    - Output-level opcodes assert that the spending transaction's locktime meets a threshold, embedding the constraint in [[Bitcoin Script]] conditions.
    - These let a single output offer alternative spend paths active at different times.
  - #### Hashed timelock contracts
    - Combining a hashlock with a [[Time Lock]] yields a [[Hashed Timelock Contract]]: redeem with a preimage before expiry, or refund after.
    - This primitive powers conditional, cross-party transfers in payment channels.
  - #### Governance timelocks
    - Delaying execution of passed [[DAO]] proposals gives stakeholders a window to exit or contest before changes take effect, contrasting with the keys-only control of [[Multisignature]].

- ### Applications
  - #### Payment channels
    - The [[Lightning Network]] uses relative timelocks to enforce dispute windows for revoked channel states.
  - #### Atomic swaps
    - [[Atomic Swap]]s rely on hashed timelocks so each party can reclaim funds if the counterparty aborts.
  - #### Vesting and governance safety
    - Token vesting cliffs and governance execution delays protect against rushed or malicious actions.

- ### Relationships
  - subClassOf:: [[Smart Contract]]
  - partOf:: [[Bitcoin Script]]
  - uses:: [[Bitcoin Script]]
  - uses:: [[Transaction]]
  - supports:: [[Hashed Timelock Contract]]
  - supports:: [[Lightning Network]]
  - supports:: [[Governance]]
  - enables:: [[Atomic Swap]]
  - requires:: [[Consensus]]
  - dependsOn:: [[Consensus]]
  - dependsOn:: [[Blockchain]]
  - implements:: [[Timelock]]
  - bridgesTo:: [[Hashed Timelock Contract]]
  - bridgesTo:: [[DAO]]
  - contrastsWith:: [[Multisignature]]
  - relatedTo:: [[Lightning Network]]
  - relatedTo:: [[Atomic Swap]]
  - relatedTo:: [[Governance]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
