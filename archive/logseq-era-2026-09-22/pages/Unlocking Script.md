public:: true

# Unlocking Script
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b7486a9a302f91050e15519a5addc57bfa87611840ea8e4d1febe489d9ce9b86",
  "@type": "Page",
  "vc:slug": "unlocking-script",
  "title": "Unlocking Script",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:script",
      "vc:label": "Script"
    },
    {
      "@id": "urn:visionflow:linked:locking-script",
      "vc:label": "Locking Script"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unlocking-script",
  "@type": "Class",
  "label": "Unlocking Script",
  "definition": "The script supplied in a Bitcoin transaction input, historically called scriptSig, that satisfies the spending conditions imposed by the locking script of the unspent output it references, typically by providing digital signatures and public keys; the input is valid only if executing the unlocking script followed by the locking script leaves a true value on the stack, proving authorisation to spend the UTXO.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:script",
    "label": "Script"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:locking-script",
        "label": "Locking Script"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The script supplied in a Bitcoin transaction input, historically called scriptSig, that satisfies the spending conditions imposed by the locking script of the unspent output it references, typically by providing digital signatures and public keys; the input is valid only if executing the unlocking script followed by the locking script leaves a true value on the stack, proving authorisation to spend the UTXO."

- ### Semantic Classification
  - owl-class:: blockchain:UnlockingScript
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Script]]
  - contrasts-with:: [[Locking Script]]
  - part-of:: [[UTXO]] spending
  - uses:: [[Digital Signature]]

- ### Content

  ## Definition

  An **unlocking script** is one half of Bitcoin's authorisation mechanism. Every unspent transaction output (UTXO) carries a locking script (scriptPubKey) that encumbers the coins with conditions; a transaction that wants to spend that output must supply, in the corresponding input, an unlocking script (scriptSig) that satisfies those conditions. Validation concatenates the two conceptually: the node executes the unlocking script to push data onto the stack — most commonly a signature and a public key — then executes the locking script against that stack. If execution completes with a true value on top, the spend is authorised; the coins are "unlocked".

  The two scripts are complementary but strictly distinct constructs, written at different times by different parties. The locking script is authored by the *receiver* (or their wallet) when the output is created, encoding who may spend it in future; the unlocking script is authored by the *spender*, possibly years later, presenting the evidence the lock demands. For the classic pay-to-public-key-hash (P2PKH) pattern, the unlocking script is simply `<signature> <public key>`: the locking script hashes the supplied key, compares it to the committed hash, and verifies the signature over the transaction with OP_CHECKSIG.

  Because the signature commits to the transaction being made, an unlocking script both proves authorisation and binds that authorisation to one specific spend — it cannot be lifted from one transaction and replayed in another. This pairwise lock-and-key design is what lets Bitcoin's [[Script]] language express not just simple ownership but multisignature arrangements, hash time-locked contracts, and other conditional spending paths.

  ## Technical Details

  Consensus rules shaped the unlocking script's evolution. Early Bitcoin executed scriptSig with the full Script language; since BIP 62 hardening and standardness rules, unlocking scripts are effectively restricted to pushing data, closing malleability avenues where a third party could tweak a scriptSig (for example by re-encoding a signature) and change the transaction ID without invalidating it.

  Segregated Witness (2017) completed that repair by relocating the unlocking data for SegWit outputs into a separate *witness* field: for P2WPKH and P2WSH spends the scriptSig is empty and the signatures live in the witness, which is excluded from the transaction ID entirely. Taproot (2021) continued the lineage — a key-path spend's witness is a single Schnorr signature, while script-path spends reveal only the branch actually used. The unlocking-script *concept* — spender-supplied proof satisfying receiver-defined conditions — survives unchanged across all these encodings, and remains the canonical mental model for how value is authorised to move in every UTXO-based chain.

  ## Current Landscape

  - The lock/key model is unchanged: the scriptPubKey ("locking script") sets spending conditions and the scriptSig ("unlocking script") supplies the signatures/public keys that satisfy them; combined and executed, they must leave a true value on the stack (Binance Academy, *Introduction to Bitcoin Script*, 2026).
  - **SegWit** (BIP141, activated 2017) moves the unlocking data out of the scriptSig into a separate **witness** field, leaving the scriptSig empty for native SegWit spends and excluding that data from the transaction ID to close malleability.
  - **Taproot** (BIP341/BIP342, activated November 2021) makes every P2TR output a version-1 SegWit witness program: a **key-path spend** carries a single 64/65-byte **Schnorr signature** in the witness, while a **script-path spend** reveals only the chosen leaf script plus a Merkle control block (MAST), improving privacy and efficiency.
  - Under Taproot's **Tapscript** (BIP342), OP_CHECKSIG/OP_CHECKSIGVERIFY use Schnorr verification, and opcode versioning allows future soft-fork upgrades; the annex field is reserved but currently unused.

  **Sources**:
  - https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki
  - https://learnmeabitcoin.com/technical/upgrades/taproot/
  - https://www.binance.com/en/academy/articles/an-introduction-to-bitcoin-script

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
