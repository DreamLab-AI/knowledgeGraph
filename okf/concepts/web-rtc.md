---
okf_version: "0.2"
type: Class
title: WebRTC
resource: urn:ngm:class:web-rtc
domain: distributed-collaboration
description: WebRTC (Web Real-Time Communication) is a W3C and IETF co-standardised open framework that enables peer-to-peer exchange of audio, video, and arbitrary data between web browsers and native applications using a JavaScript API (getUserMedia, RTCPeerConnection, RTCDataChannel), combining
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:dc-protocol-and-infra
  - urn:ngm:class:real-time-communication-protocol
  - urn:ngm:class:peer-to-peer-network-protocol
hasPart:
  - urn:ngm:class:ice-protocol
  - urn:ngm:class:stun-and-turn
  - urn:ngm:class:rtcpeerconnection
  - urn:ngm:class:rtcdatachannel
  - urn:ngm:class:getusermedia-api
  - urn:ngm:class:stun-and-turn
  - urn:ngm:class:turn-server
  - urn:ngm:class:sdp-offer-answer
requires:
  - urn:ngm:class:ice-protocol
  - urn:ngm:class:dtls-srtp-encryption
  - urn:ngm:class:sdp-session-description
  - urn:ngm:class:websocket-signalling
enables:
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:screen-sharing
  - urn:ngm:class:peer-to-peer-video-conferencing
  - urn:ngm:class:real-time-data-transfer
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:zero-install-communication
dependsOn:
  - urn:ngm:class:libwebrtc-library
  - urn:ngm:class:stun-rfc-5389
  - urn:ngm:class:turn-rfc-5766
  - urn:ngm:class:opus-audio-codec
  - urn:ngm:class:vp8-video-codec
implements:
  - urn:ngm:class:web-rtc-w-3-c-specification
  - urn:ngm:class:web-rtc-w-3-c-specification
  - urn:ngm:class:ietf-rtcweb-standards
  - urn:ngm:class:dtls-srtp-rfc-5764
bridgesTo:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:open-xr
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:ros
  - urn:ngm:class:web-assembly
partOf:
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:video-conferencing
---

# WebRTC

WebRTC (Web Real-Time Communication) is a W3C and IETF co-standardised open framework that enables peer-to-peer exchange of audio, video, and arbitrary data between web browsers and native applications using a JavaScript API (getUserMedia, RTCPeerConnection, RTCDataChannel), combining
