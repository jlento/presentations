---
title: Supercomputers @ CSC
author: juha.lento@csc.fi
presentation-date: 2019-01-21
layout: reveal
reveal-theme: simple
---

## Supercomputers @ CSC

<juha.lento@csc.fi>

--

### Overview

- What is a supercomputer?
- When to use a supercomputer?
- How to apply CSC resources?
- How to login?
- What you need to know use a supercomputer?
- How to run programs?
- Software environment
- CSC's documentation, Google keywords

--

### Course: Using CSC Environment Efficiently

The material in this lecture is covered in more detail in a whole day course
["Using CSC Environment
Efficiently"](https://www.csc.fi/web/training/-/csc-env-2019-1).

--

### How to read this

Usually the author fails to go through all the slides...but the (living) document is available on-line!

<https://bit.ly/2DetCEC>

Hit `ESC` key to see the layout, new topics go horisontally, deeper stuff is...downwards :)

---

## What is a supercomputer?

In practice all contemporary supercomputers are clusters of *tightly coupled
workstations*.

Workstations themselves are parallel computers with *multiple cores* and memory
hierarchies.

Parallel file systems run on clusters of file servers.

--

## Contemporary supercomputer architecture

![Cluster architecture](./SupercomputerArchitecture.svg "Juha's Incscape art")

*Login nodes*, tightly interconnected *compute nodes*, and accompanying
*parallel file system*.

--

## Compute node

![Compute node](./ComputeNode.svg "Juha's Incscape art")

Each compute node is a small (NUMA) parallel machine with multiple cores...like
your smart phone or laptop!

--

## Parallel file system

![Parallel file system](./ParallelFileSystem.svg "Juha's Incscape art")

Parallel filesystem (Lustre) consists of a MetaData Server (MDS) and
an array of large file servers (Object Data Server, ODS).

--

## Parallel file system (cont.)

**Keeping thing reasonable**

- avoid excessive metadata access.
- no more than 500 files in a single directory
- single file size < 1GB

---

## When to use a supercomputer

- need for large CPU and GPU resources  
  *and a program that can use them*
    - Parallel computing, massively parallel  
       programs (MPP)
    - farming calculations, parameter searches etc.
- sharing large data sets
- sharing hard to install programs

--

## When not to use a supercomputer

- when doing code development (in most cases)

Weight the added complexity of supercomputer environment vs. the
increase in resources.

Optimize the workflow so that it runs fast enough in a workstation?

--

## First law of computing

First law of computing:

`$$ I \times P = C$$`

where `$I$` stands for Intelligence, `$P$` is the amount of the raw computing
Power used, and `$C$` is the difficulty of the problem (...humour).

---

## How to apply CSC resources?

1. Sign up, i.e. apply **CSC account**
    - easy if you can identify with HAKA
2. Join to a **computing project**, or apply a new one
3. Apply for **resources** to your computing project

All this stuff (and alike) is done in  
<https://sui.csc.fi>.

--

### How to apply CSC resources, tutorials

<https://research.csc.fi/csc-guide-getting-access-to-csc-services>

and

[![Registering as CSC's Customer](https://i.ytimg.com/vi/9D7AEUDo678/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDheItzNTUbQYiILHcGiJ9Lj0RsKw)](https://www.youtube.com/watch?v=9D7AEUDo678)
[![Opening a New CSC Project](https://i.ytimg.com/vi/sUYIMdd02Tc/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBh3te3zrbztLYA8wAlzCsxOHjcHA)](https://www.youtube.com/watch?v=sUYIMdd02Tc)
[![Adding New Services to Your Project](https://i.ytimg.com/vi/eEBNOhLucDQ/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIKHBcd9saZDKJ9Xqidm7Ww2txDQ)](https://www.youtube.com/watch?v=eEBNOhLucDQ)


---

## How to login?

<https://research.csc.fi/csc-guide-connecting-the-servers-of-csc>

- https://sui.csc.fi, for account and project management
- ssh, for simple tasks
- NoMachine remote desktop, for GUI and real work

NoMachine remote desktop has big advantages over plain ssh, and needs to be set
up only once.

--

### NoMachine tips

Pleasant experience requires couple of tweaks...

- From the NoMachine window right corner peel up menu
    - if you see scroll bars, set the remote desktop size to match 1:1 to your
      window size
    -  crank up the display quality

--

### NoMachine tips (cont.)

- Use the very basic default terminal only to launch Gnome terminal(s) with easy customization, like font size, etc.  
  ```bash
  gnome-terminal &
  ```
- Finding out how cut'n'paste between desktop and host works can be difficult,
  but it is doable

--

### Webinar:Running RStudio using NoMachine

[![Webinar: How to run command R in Nomachine](https://i.ytimg.com/vi/qdaqAFskrB8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCkzfyFFCTAnqZeOSXojaceIC46Qw)](https://www.youtube.com/watch?v=qdaqAFskrB8)

---

## What you need to know use a supercomputer?

General Linux command line skills (which you can learn in CSC's courses "Linux 1-3"):

- working with the directory hierarchy and files
- editing text files with `nano`, `vi` or `emacs`
- optionally, how to develop and build programs in Linux

Plus the supercomputer specifics...

--

### Supercomputer environment vs. regular workstation

1. multiple versions of software packages
2. more complicated filesystem(s)
3. batch queue system

---

## How to run programs, batch jobs, interactive nodes?

- Software environment (modules)


---

## CSC's documentation, Google keywords

All that I have covered, and \*some\* more, is in CSC on-line documentation and
webinars.

A good first guess is often found by

<form method="get" action="https://www.google.com/search" target="_blank_">
Google: <input style="color: blue; font-size: 100%; border: medium solid gray; border-radius: 0.3em;" type="text" name="q" size="31" value="CSC + software or discipline or..."></form>



---

## Be a programmer, not a computer!

-  **KIS**, Keep It Simple
-  **DRY**, Don't Repeat Yourself

**More** *enjoyable* **and** *productive* **working with computers**
