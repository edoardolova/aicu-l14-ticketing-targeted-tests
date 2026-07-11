# Test notes - L14

## Test scritto o completato

```txt
nome test: normale + email -> standard
file: tests/unit/ticket-rules.test.js
livello: unit
```

## Comando eseguito

```bash
node --test "tests/unit/*.test.js"
```

## Output essenziale

```txt
▶ computeUrgencyLabel
  ✔ normale + email -> standard (0.7641ms)
✔ computeUrgencyLabel (1.4616ms)
ℹ tests 1
ℹ suites 1
ℹ pass 1
ℹ fail 0
```

## Rischio protetto

```txt
Se urgencyLabels.normale.email in server/ticket-rules.js viene modificato o rimosso, il test fallisce segnalando che "normale + email -> standard" non è più garantito.
```

## Assertion centrale

```txt
assert.equal(computeUrgencyLabel("normale", "email"), "standard")
```

## Perche' questo livello

```txt
computeUrgencyLabel e' una funzione pura (input -> output, nessun I/O). Un unit test basta per verificarla; un test browser aggiungerebbe complessita' inutile.
```

## Cosa ho corretto dopo review

```txt
Niente - test minimo, nessuna fixture superflua, nessun framework extra.
```
