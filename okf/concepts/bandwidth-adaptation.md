---
okf_version: "0.2"
type: Class
title: Bandwidth Adaptation
resource: urn:ngm:class:bandwidth-adaptation
domain: distributed-collaboration
description: Bandwidth adaptation is the real-time, algorithmic process by which a media transmission system continuously measures available network capacity and dynamically adjusts encoding parameters — bitrate, resolution, frame rate, codec profile, and layer selection — to maintain the highest achievable [...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:dc-protocol-and-infra
  - urn:ngm:class:network-quality-of-service
  - urn:ngm:class:real-time-transport-optimisation
  - urn:ngm:class:adaptive-bitrate-streaming
  - urn:ngm:class:congestion-control
  - urn:ngm:class:quality-of-experience
hasPart:
  - urn:ngm:class:rtcp-feedback
  - urn:ngm:class:bandwidth-estimator
  - urn:ngm:class:abr-algorithm
  - urn:ngm:class:buffer-manager
  - urn:ngm:class:bitrate-ladder
  - urn:ngm:class:codec-parameter-controller
  - urn:ngm:class:network-capacity-probing
  - urn:ngm:class:rate-distortion-optimisation
  - urn:ngm:class:segment-scheduler
requires:
  - urn:ngm:class:rtcp-feedback
  - urn:ngm:class:network-measurement
  - urn:ngm:class:multi-bitrate-encoding
  - urn:ngm:class:playback-buffer
  - urn:ngm:class:throughput-estimation
  - urn:ngm:class:congestion-signal
enables:
  - urn:ngm:class:cloud-gaming
  - urn:ngm:class:graceful-degradation
  - urn:ngm:class:video-streaming
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:global-participation-across-networks
  - urn:ngm:class:mobile-collaboration
  - urn:ngm:class:emerging-market-accessibility
  - urn:ngm:class:video-streaming
  - urn:ngm:class:spatial-computing
dependsOn:
  - urn:ngm:class:quic
  - urn:ngm:class:http3
  - urn:ngm:class:rtp-protocol
  - urn:ngm:class:web-rtc
  - urn:ngm:class:codec-ecosystem
  - urn:ngm:class:cdn-infrastructure
  - urn:ngm:class:5-g-network
implements:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:web-rtc
  - urn:ngm:class:dash-adaptive-streaming
  - urn:ngm:class:hls-adaptive-bitrate
  - urn:ngm:class:web-rtc
  - urn:ngm:class:scalable-video-coding
  - urn:ngm:class:bola-algorithm
  - urn:ngm:class:mpc-algorithm
  - urn:ngm:class:pensieve-rl-policy
  - urn:ngm:class:congestion-control
contrastsWith:
  - urn:ngm:class:fixed-bitrate-streaming
  - urn:ngm:class:constant-bitrate-encoding
  - urn:ngm:class:buffering-only-adaptation
  - urn:ngm:class:circuit-switching
bridgesTo:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:congestion-control
uses:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:psnr-metric
  - urn:ngm:class:ssim-metric
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:vmaf-metric
  - urn:ngm:class:lyapunov-optimisation
supports:
  - urn:ngm:class:cloud-gaming
  - urn:ngm:class:live-streaming
  - urn:ngm:class:remote-work-infrastructure
  - urn:ngm:class:telemedicine
  - urn:ngm:class:screen-sharing
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:ar-vr-streaming
standardizedBy:
  - urn:ngm:class:3-gpp
  - urn:ngm:class:apple-inc-technology-corporation
  - urn:ngm:class:quic
  - urn:ngm:class:itu-t
  - urn:ngm:class:iso
  - urn:ngm:class:web-rtc-w-3-c-specification
  - urn:ngm:class:quic
  - urn:ngm:class:iso
  - urn:ngm:class:apple-inc-technology-corporation
  - urn:ngm:class:web-rtc-w-3-c-specification
  - urn:ngm:class:3-gpp
  - urn:ngm:class:itu-t
relatedTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:forward-error-correction
  - urn:ngm:class:latency-optimisation
  - urn:ngm:class:network-slicing
  - urn:ngm:class:packet-loss-recovery
  - urn:ngm:class:edge-computing
  - urn:ngm:class:web-rtc
---

# Bandwidth Adaptation

Bandwidth adaptation is the real-time, algorithmic process by which a media transmission system continuously measures available network capacity and dynamically adjusts encoding parameters — bitrate, resolution, frame rate, codec profile, and layer selection — to maintain the highest achievable [...
