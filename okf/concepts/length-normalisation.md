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
---

# Length Normalisation

Length normalisation is a scoring adjustment applied during sequence decoding that divides or otherwise rescales a candidate sequence's cumulative log-probability by a function of its length, correcting the bias of naive beam search toward shorter outputs. Without it, beam search systematically favours short sequences because every additional token multiplies the sequence probability by a value less than one. It is a standard component of neural machine translation and text generation decoders.
