---
title: Data Management and Object storages in HPC
author: Juha Lento
presentation-date: 2025-05-28
titleslide: true
---

## Data management

Different storages have different purposes, and are meant for different kinds of data.
No single storage is at the same time fast, cheap, large capacity, long lifetime,
broadly accessible, etc.

Old saying that supercomputers transfer a compute bound problem into an I/O problem
is more true now than ever. Still, the data management in many projects looks like an
afterthought.

## Old classics and a new one

- Keep It Simple, Stupid (KISS)
- Do not Repeat Yourself (DRY)
- Small data, small problems, big data, big problems (abbreviation pending)

## Types of storage and where it is accessible from

- Local disc (nvme) --- a single computer (cluster node)
- Network disc (Parallel file system Lustre, NFS, ...) --- all computers (cluster nodes) in the local network
- "Internet storage" (Object storage Allas, LUMI-O, ...) --- all computers in the internet

## How is it accessed?

- local and network discs look like posix file systems. No separate authentication,
  familiar commands to work with the files.
- Object storage is a separate web service, that only provides an API (s3, swift, ...). No space here to list
  the extra hassle for HPC user compared to local or network discs.

## Issues

- Users need to choose and learn a new client program (rclone)
- Flat namespace (Allas)
- Often useless error messages (or none at all)
- Large files or lot's of small files (although bad in traditional files systems, too)
- Separate authentication token hassle
- Limited token lifetimes
- Hard to use in batch jobs
- File to object mapping is not always 1-to-1
- Directory hierarchy to bucket/object mapping is far from 1-to-1
- Terminology varies from application to application, bucket/container, repository/endpoint/remote, etc.
- Limited character set surprices in bucket (and object?) names
  
## Solutions

In the long run, I'd say the web interfaces are the way to go. We already have allas.csc.fi and
pouta.csc.fi interfaces to the object storage, and "Cloud Storage Configuration" in puhti.csc.fi,
mahti.csc.fi, and lumi.csc.fi. Object storages are web services, after all.

Meanwhile, in HPC we often still need to deal with command line tools.

## Data-mover

Data-mover is a development idea/project, that tries to solve the acute problem of Puhti scratch disc
being way too full, by providing an easy to use tool to transfer problematic datasets to Allas. It
does this by using restic and batch jobs. Unfortunately, while the tool solves some problems, it
also creates new ones.

I'd say the correct solution was already on the first slide of this set, plan the data management already
when writing the application and the workflow, and do not create difficult datasets (too many small
files, huge files, etc.) in the first place.
