# Snail Sort

## Lógica del ordenamiento caracol

### 1) Preparando datos

```
El algoritmo determina la dimensión del array, valida que *n y *m sean iguales  y convierte a este a uno lineal.

Original:
[   *n
    [1,2,3],
    [4,5,6],
    [7,8,9] *m

]

Dimensión: 3(n) x 3(m) => 3nm

Resultado:
[1,2,3,4,5,6,7,8,9]

```

### 2) Recorriendo dimensiones

```
El algoritmo recorre de mayor a menor cada dimensión sobre la siguiente fórmula:

**x <= dimesion || x % dimension == 0***

Esto significa que se tomarán las **posiciones** del array lineal que sean menores a la dimensión o que sean múltiplos de ella.

**Dimensión: 3**

Resultado iteración 1:
[1,2,3,6,9]

```

### 3) Invertir arreglo

```
Cuando el algoritmo determina que se han recorrido todos los elementos en la dimensión, recupera los registros descartados y los invierte.

Original:
[4,5,7,8]

Resultado:
[8,7,5,4]

```

### 4) Completar Dimensiones y Concatenar

```
El ciclo se repite con el paso 2 y el 3 hasta completar las dimensiones. Por cada dimensión completada concatena los elementos tomados previamente con los nuevos.

**Dimensión: 2**

Iteración 2:
    Resultado: [8,7,4]
    Descartados: [5]
    Invertido: [5]

**Dimensión: 1**

Iteración 3:
    Resultado: [5]
    Descartados: []
    Invertido: []

```

### 1) Ejecutar script

```
node main.js

```