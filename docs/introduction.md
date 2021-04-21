---
title: Introduction
slug: /
---

<img src="https://camo.githubusercontent.com/e185f54d272f9cd4608dd20eb130133dea29f524fbb4a0d8951131ecec8de1de/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d7072652d2d616c7068612d6c6967687467726579" /> &nbsp; <img src="https://camo.githubusercontent.com/08c304eeca9212a219c763b7277f3395e2a580b1d07cfb49287e9fc5add3d19a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f61706956657273696f6e2d7631616c706861312d6c69676874677265656e" />


## Container Object Storage Interface (COSI)

Container Object Storage Interface (COSI) is a set of abstractions for provisioning and management of object storage. It aims to be a common layer of abstraction across multiple object storage vendors, such that workloads can request and automatically be provisioned object storage buckets.

The goals of this project are:

 - Automate object storage provisioning, access and management
 - Provide a common layer of abstraction for consuming object storage
 - Facilitate lift and shift of workloads across object storage providers (i.e. prevent vendor lock-in)

## Why another standard?

Kubernetes abstracts file/block storage via the CSI standard. The primitives for file/block storage do not extend well to object storage. Here is the **_extremely_** concise and incomplete list of reasons why:

 - Unit of provisioned storage - Bucket instead of filesystem mount or blockdevice.
 - Access is over the network instead of local POSIX calls.
 - No common protocol for consumption across various implementations of object storage.
 - Management policies and primitives - for instance, mounting and unmounting do not apply to object storage.

The existing primitives in CSI do not apply to objectstorage. Thus the need for a new standard to automate the management of objectstorage.
