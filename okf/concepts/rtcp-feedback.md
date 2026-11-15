---
okf_version: "0.2"
type: Class
title: RTCP Feedback
resource: urn:ngm:class:rtcp-feedback
domain: infrastructure
description: RTCP feedback is the control-channel mechanism of the RTP Control Protocol by which receivers report reception quality, such as packet loss, jitter, and round-trip time, back to senders during real-time media streaming. Senders use these reports, along with extensions like NACK, PLI, and REMB, to adapt encoding bitrate and recover from loss. It is the feedback loop that enables congestion-aware, r
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:communication-protocol
relatedTo:
  - urn:ngm:class:bandwidth-adaptation
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# RTCP Feedback

RTCP feedback is the control-channel mechanism of the RTP Control Protocol by which receivers report reception quality, such as packet loss, jitter, and round-trip time, back to senders during real-time media streaming. Senders use these reports, along with extensions like NACK, PLI, and REMB, to adapt encoding bitrate and recover from loss. It is the feedback loop that enables congestion-aware, resilient audiovisual transport.
