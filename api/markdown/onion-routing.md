- ### Definition
  - Onion routing wraps messages in layers of encryption relayed through a sequence of nodes, each peeling one layer to learn only the next hop, so no single relay knows both source and destination.

- ### Relationships
  - Onion Routing is a subclass of [[Network Protocol]] and uses [[Encryption]] and [[Public-Key Cryptography]] to build its nested layers. It enables [[Censorship Resistance]] and [[Privacy]] by concealing communication metadata, and relates to the broader family of [[Communication Protocol]]s whose routing it anonymises.

- ### Content
  - Onion routing attacks a problem that ordinary encryption leaves unsolved: even when message contents are encrypted, the metadata of who is talking to whom, when, and how much remains exposed and is often more revealing than the content itself. By routing traffic through a chain of relays and ensuring no single relay sees the whole path, onion routing breaks the linkage between sender and receiver that traffic analysis depends on.

  - The construction is layered like an onion. The sender selects a path of relays and encrypts the message in nested layers, one per relay, using each relay's public key. As the packet travels, each relay decrypts its outermost layer, revealing only the address of the next hop and an inner ciphertext it cannot read, then forwards it. The first relay knows the sender but not the destination; the last knows the destination but not the sender; and the middle relays know neither endpoint.

  - Tor is the most prominent deployment, building circuits of three relays — entry, middle, and exit — to give millions of users anonymous access to the internet and to host hidden services reachable only within the network. Onion routing provides strong protection against local and single-relay adversaries, though it is not a panacea: a global adversary able to observe both ends of a circuit can attempt traffic-correlation attacks, and exit nodes see unencrypted destination traffic unless end-to-end encryption is also used.

  - The technique generalises well beyond web browsing. The Lightning Network adapts onion routing so that a multi-hop payment's intermediary nodes each learn only their adjacent hops, preserving the privacy of who is paying whom across the payment graph. In both anonymity networks and private payments, onion routing embodies a powerful principle: distributing knowledge across mutually distrusting relays so that privacy and censorship resistance emerge from the structure of the protocol rather than from trusting any single party.