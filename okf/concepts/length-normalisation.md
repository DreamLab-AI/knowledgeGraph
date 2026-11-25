---
okf_version: "0.2"
type: Class
title: Length Normalisation
resource: urn:ngm:class:length-normalisation
domain: artificial-intelligence
description: Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value le
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:natural-language-processing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Length Normalisation

Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value less than one. It is a standard component of neural machine translation and text generation decoders.
