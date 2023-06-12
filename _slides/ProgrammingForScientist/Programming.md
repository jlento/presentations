---
title: Clean Code
author: Juha Lento
presentation-date: 2023-06-16
titleslide: true
---

## Attitude

Juha Lento is a physicist that suffered from the lack of motivation in
programming and mathematics. It took way too long for him to realise that if
approached with the same curiosity as he had with physics, learning mathematics
and programming can blow his mind equally well.

<3 Haskell & C <3


## Communication

Programming is not only about giving instructions to CPU, it is communication
between programmers. Source code must be readable by humans.

In scientific programming, you should be able to read the source code and the
scientific article side by side, and see exactly which parts (equations) relate
to which parts of the source code (functions).

**KIS** --- Keep It Simple

**DRY** --- Don't Repeat Yourself


## Lessons from functional programming

Pure functions and immutable variables/state are "declarative" and easy to read.
Writing useful functional programs using only them is tricky, because cpu
instructions are imperative, and *only* mutate the state of the memory. Try to
be as pure and immutable as possible, and very explicit in places where you are
not. Recognise programming constructs / patterns.


## Funtion as an abstraction

The goal is that it is easy to read from a function call what are the inputs to
the function, and what are the outputs.

```
   inputs -> function -> outputs
```

The inputs and outputs must be readable from the function call, or at least from
the function declaration. If they come from global variables, common variables,
or such, the reader is left blind.

It also follows that every main() program is essentially the same. Do you see
what should be easily readble from the main program?


## Bits and pieces

- Optimization on the application programming level. Optimise readabililty.
  Recognise patterns. Use math libraries. Understand hardware.
- Development cycle, edit -> compile -> test, repeat, should be done in seconds.
- Minimize branching in the code. Use `#ifdef`s sparingly, preferrably not at all.
- Avoid ptional features. If you can compile a program with or without a
  feature, it's two different programs. This is especially true for libraries,
  they should have *zero* optional features.


## Small iffy example

https://github.com/jlento/miljoonalaatikko/blob/master/scientists/fizzbuzz.f90

- Do not settle with the first idea
- Minimize nested control structures


## Research code example

https://gmd.copernicus.org/articles/10/827/2017/gmd-10-827-2017.pdf
https://github.com/mikarant/ozo/blob/master/src/mod_time_step_loop.f90

- What is in the main() program?
- Does this communicate?
- What if you need to return multiple values/objects from a function ( -> tuple,
  struct, derived type)?
- What about MPI, is a single task (process) a "program"?
- Memory management?
- Guess how much faster is Intel MKL Poisson solver (using FFT) compared to hand
  written solver using Green's method?
