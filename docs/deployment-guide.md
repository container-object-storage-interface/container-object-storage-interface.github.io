---
title: Deploying COSI
# slug: /
---

This document describes steps for Kubernetes administrators to setup Container Object Storage Interface (COSI) onto a Kubernetes cluster.

## Overview


Following components that need to be deployed in Kubernetes to setup COSI.

- CustomResourceDefinitions (CRDs)
- Controller
- Sidecar for the driver
- Driver

### Quick Start

Execute following commands to setup COSI:

```sh
# Install CRDs
kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api

# Install controller
kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller
```

### CustomResourceDefinitions

COSI acts on following custom resource definitions (CRDs):

- `BucketClaim` - Represents a claim to provision a Bucket
- `BucketClass` - Represents a class of Buckets with similar characteristics
- `Bucket` - Represents a Bucket or its equivalent in the storage backend
- `BucketAccessClass` - Represents a class of accessors with similar access requirements and authentication type
- `BucketAccess` - Represents a resource to access a Bucket

All [COSI custom resource definitions](https://github.com/kubernetes-sigs/container-object-storage-interface-api/tree/master/crds) can be installed using [kustomization file](https://raw.githubusercontent.com/kubernetes-sigs/container-object-storage-interface-api/master/kustomization.yaml) and `kubectl` with following command:

```sh
kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-api
```

### Controller

COSI controller can be setup using the [kustomization file](https://github.com/kubernetes-sigs/container-object-storage-interface-controller/blob/master/kustomization.yaml) from the [container-object-storage-interface-controller](https://github.com/kubernetes-sigs/container-object-storage-interface-controller) repository with following command:

```sh
kubectl create -k github.com/kubernetes-sigs/container-object-storage-interface-controller
```

The controller will be deployed in the `default` namespace.

### Driver & Sidecar

The sidecar of the driver along with the driver will be deployed along with the respective driver.