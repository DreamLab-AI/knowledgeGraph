---
okf_version: "0.2"
type: Class
title: Write Blocker
resource: urn:ngm:class:write-blocker
domain: security
description: "A write blocker is a hardware or software device that intercepts write commands sent to a storage medium, allowing an investigator to read data from it without altering its contents. It is a standard tool in digital forensics, used to create forensically sound images of hard drives, USB media, and other storage before analysis, preserving evidentiary integrity and chain of custody. Hardware write "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:digital-forensics
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Write Blocker

A write blocker is a hardware or software device that intercepts write commands sent to a storage medium, allowing an investigator to read data from it without altering its contents. It is a standard tool in digital forensics, used to create forensically sound images of hard drives, USB media, and other storage before analysis, preserving evidentiary integrity and chain of custody. Hardware write blockers sit physically between the storage device and the acquisition workstation, intercepting commands at the interface level, while software write blockers achieve the same effect by filtering operating system calls. Their use is typically documented as part of standard evidence collection procedure to withstand challenge in court.
