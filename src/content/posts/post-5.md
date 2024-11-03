---
layout: ../../layouts/MarkdownPostLayout.astro
title: Advanced Mathematical Notation
author: Astro Learner
description: "Exploring advanced mathematical notation with MathJax"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-07-15
tags: ["math"]
---

# Advanced Mathematical Notation in Markdown

## Algebraic Expressions
- Quadratic Formula: 
  $$
  x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
  $$

- Binomial Theorem:
  $$
  (x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k
  $$

## Calculus
- Derivatives:
  - Power Rule: $\frac{d}{dx} x^n = nx^{n-1}$
  - Product Rule: $\frac{d}{dx}(uv) = u \frac{dv}{dx} + v \frac{du}{dx}$
  - Chain Rule: $\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$

- Integrals:
  - Basic Integral: $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$
  - Definite Integral:
    $$
    \int_0^1 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3}
    $$

- Partial Derivative: $\frac{\partial f}{\partial x}$

## Trigonometry
- Euler's Formula:
  $$
  e^{i \theta} = \cos \theta + i \sin \theta
  $$

- Trigonometric Identities:
  $$
  \sin^2 \theta + \cos^2 \theta = 1
  $$
  $$
  \tan \theta = \frac{\sin \theta}{\cos \theta}
  $$

## Linear Algebra
- Matrix Multiplication:
  $$
  \begin{pmatrix} a & b \\ c & d \end{pmatrix} 
  \begin{pmatrix} x \\ y \end{pmatrix} = 
  \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}
  $$

- Determinant of a 2x2 Matrix:
  $$
  \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
  $$

- Eigenvalues ($\lambda$) and Eigenvectors:
  $$
  A \vec{v} = \lambda \vec{v}
  $$

## Probability and Statistics
- Probability of an Event:
  $$
  P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of outcomes}}
  $$

- Bayes' Theorem:
  $$
  P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
  $$

- Normal Distribution:
  $$
  f(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{ - \frac{(x - \mu)^2}{2 \sigma^2} }
  $$

## Advanced Set Theory
- Intersection and Union:
  $$
  A \cap B = \{ x | x \in A \text{ and } x \in B \}
  $$
  $$
  A \cup B = \{ x | x \in A \text{ or } x \in B \}
  $$

- Power Set:
  $$
  \mathcal{P}(S) = \{ T | T \subseteq S \}
  $$

## Limits and Series
- Limit of a Function:
  $$
  \lim_{x \to \infty} \frac{1}{x} = 0
  $$

- Taylor Series Expansion:
  $$
  f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \cdots
  $$

- Infinite Series:
  $$
  \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
  $$

## Complex Numbers
- Complex Conjugate:
  $$
  \overline{z} = a - bi \quad \text{if } z = a + bi
  $$

- Modulus of a Complex Number:
  $$
  |z| = \sqrt{a^2 + b^2} \quad \text{for } z = a + bi
  $$

- Polar Form:
  $$
  z = r (\cos \theta + i \sin \theta) = r e^{i \theta}
  $$

This markdown example demonstrates various advanced mathematical symbols and notation types to utilize MathJax’s full power!
