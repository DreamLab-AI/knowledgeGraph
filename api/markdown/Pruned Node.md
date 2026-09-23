
A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage requirements by orders of magnitude while retaining full validation capability for new blocks. Pruning enables operators with limited storage (e.g. 5–10 GB rather than 500+ GB for Bitcoin's full history) to participate in consensus verification without trusting third parties, unlike SPV light nodes that skip validation entirely. The pruned node can no longer serve historical block data to peers, constraining its contribution to network archival.

A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage by orders of magnitude while retaining full validation capability. Pruning enables operators with limited storage to participate in consensus without trusting third parties, unlike SPV light nodes that skip validation entirely.

- ### Semantic Classification

- ### Content

  ## Class Declaration
  Declaration(Class(:PrunedNode))

  ## Subclass Relationships
  SubClassOf(:PrunedNode :NetworkComponent)
  SubClassOf(:PrunedNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrunedNode "BC-0094"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrunedNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrunedNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrunedNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrunedNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrunedNode "Pruned Node"@en)
  AnnotationAssertion(rdfs:comment :PrunedNode
    "Partial history storage node"@en)
  AnnotationAssertion(dct:description :PrunedNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrunedNode "BC-0094")
  AnnotationAssertion(:priority :PrunedNode "1"^^xsd:integer)
  AnnotationAssertion(:category :PrunedNode "network-security"@en)
  )

  Pruned nodes occupy an important middle ground in the blockchain node taxonomy. A full archival node stores the entire chain history from genesis—by mid-2025, Bitcoin's full UTXO set and block data exceeded 600 GB—making operation impractical on consumer hardware with modest storage. A pruned node downloads and validates every block during initial block download (IBD), maintaining the same security model as a full node, but once IBD completes it discards blocks and transactions older than its configured retention depth, retaining only the current UTXO set plus recent blocks sufficient to handle reorgs.

  The key distinction from SPV (Simple Payment Verification) light nodes is validation. SPV nodes do not verify block content; they trust the longest proof-of-work chain and verify only Merkle inclusion proofs for specific transactions. A pruned node verifies every transaction it processes against the full consensus rules, making it immune to miner fraud and block-withholding attacks that SPV clients cannot detect.

  Bitcoin Core implements pruning with a configurable `prune=N` setting specifying the minimum retained block data in MiB (minimum 550 MiB, practical range 1–10 GB). Ethereum clients implement similar state pruning through mechanisms like snap sync and path-based state storage, addressing the Ethereum state bloat problem where the state trie grew to hundreds of GB due to accumulated contract state.

  The trade-off is that pruned nodes cannot serve historical block data to peers requesting blocks they have discarded. This limits the network's archival capacity if most nodes prune aggressively. Preserving the archival layer requires a population of unpruned archival nodes, motivating economic models (such as fee incentives for archive providers) to ensure historical data remains accessible.

- ### Provenance

