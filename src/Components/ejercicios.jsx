const Ejercicios = () => {
  const codigos = {
    1: `IDENTIFICATION DIVISION.
PROGRAM-ID. HOLA-MUNDO.

PROCEDURE DIVISION.
    DISPLAY "¡Hola, Mundo!".
    STOP RUN.
`,
    2: `IDENTIFICATION DIVISION.
PROGRAM-ID. SUMA-DOS-NUMEROS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUM1 PIC 9(5).
01 NUM2 PIC 9(5).
01 SUMA PIC 9(5).

PROCEDURE DIVISION.
    DISPLAY "Ingrese el primer número: " WITH NO ADVANCING.
    ACCEPT NUM1.
    DISPLAY "Ingrese el segundo número: " WITH NO ADVANCING.
    ACCEPT NUM2.
    
    COMPUTE SUMA = NUM1 + NUM2.
    
    DISPLAY "La suma es: " SUMA.
    
    STOP RUN.
`,
    3: `IDENTIFICATION DIVISION.
PROGRAM-ID. CONVERSION-C-F.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 GRADOS-C PIC 999V99.
01 GRADOS-F PIC 999V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese los grados Celsius: " WITH NO ADVANCING.
    ACCEPT GRADOS-C.
    
    COMPUTE GRADOS-F = (GRADOS-C * 9 / 5) + 32.
    
    DISPLAY "Los grados Fahrenheit son: " GRADOS-F.
    
    STOP RUN.
`,
    4: `IDENTIFICATION DIVISION.
PROGRAM-ID. NUMERO-PRIMO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUMERO PIC 9(5).
01 ES-PRIMO PIC X(3).

PROCEDURE DIVISION.
    DISPLAY "Ingrese un número: " WITH NO ADVANCING.
    ACCEPT NUMERO.
    
    IF NUMERO <= 1
        MOVE "No" TO ES-PRIMO
    ELSE
        PERFORM ES-PRIMO-CHECK
    END-IF
    
    DISPLAY "El número" NUMERO "es primo: " ES-PRIMO.
    
    STOP RUN.
    
ES-PRIMO-CHECK.
    MOVE "Sí" TO ES-PRIMO
    DIVIDE NUMERO BY 2 GIVING NUMERO REMAINDER RESIDUO
    PERFORM VARYING I FROM 3 BY 2 UNTIL I * I > NUMERO
        IF NUMERO REM I = 0
            MOVE "No" TO ES-PRIMO
            EXIT PERFORM
        END-IF
    END-PERFORM.
`,
    5: `IDENTIFICATION DIVISION.
PROGRAM-ID. FACTORIAL.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUMERO-IN PIC 9(5).
01 NUMERO-OUT PIC 9(10).
01 FACTORIAL PIC 9(10) VALUE 1.

PROCEDURE DIVISION.
    DISPLAY "Ingrese un número para calcular su factorial: " WITH NO ADVANCING.
    ACCEPT NUMERO-IN.
    
    IF NUMERO-IN < 0
        DISPLAY "No se puede calcular el factorial de un número negativo."
    ELSE
        PERFORM CALCULAR-FACTORIAL
        DISPLAY "El factorial de" NUMERO-IN "es:" NUMERO-OUT
    END-IF
    
    STOP RUN.

CALCULAR-FACTORIAL.
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > NUMERO-IN
        MULTIPLY FACTORIAL BY I GIVING FACTORIAL
    END-PERFORM.
    MOVE FACTORIAL TO NUMERO-OUT.
`,
    6: `IDENTIFICATION DIVISION.
PROGRAM-ID. SUMA-PARES.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUM-INICIAL PIC 9(5).
01 NUM-FINAL PIC 9(5).
01 SUMA-PARES PIC 9(10) VALUE 0.
01 CONTADOR PIC 9(5).

PROCEDURE DIVISION.
    DISPLAY "Ingrese el número inicial: " WITH NO ADVANCING.
    ACCEPT NUM-INICIAL.
    DISPLAY "Ingrese el número final: " WITH NO ADVANCING.
    ACCEPT NUM-FINAL.
    
    PERFORM CALCULAR-SUMA-PARES VARYING CONTADOR FROM NUM-INICIAL BY 1 UNTIL CONTADOR > NUM-FINAL
    
    DISPLAY "La suma de los números pares entre" NUM-INICIAL "y" NUM-FINAL "es:" SUMA-PARES
    
    STOP RUN.

CALCULAR-SUMA-PARES.
    IF CONTADOR MOD 2 = 0
        ADD CONTADOR TO SUMA-PARES
    END-IF.
`,
    7: `IDENTIFICATION DIVISION.
PROGRAM-ID. FIBONACCI.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 N PIC 9(5).
01 A PIC 9(10) VALUE 0.
01 B PIC 9(10) VALUE 1.
01 I PIC 9(5) VALUE 1.
01 TEMP PIC 9(10).

PROCEDURE DIVISION.
    DISPLAY "Ingrese el valor de n para generar la serie Fibonacci: " WITH NO ADVANCING.
    ACCEPT N.
    
    DISPLAY "Los primeros" N "números de la serie Fibonacci son:"
    
    PERFORM DISPLAY-FIBONACCI UNTIL I > N
    
    STOP RUN.

DISPLAY-FIBONACCI.
    DISPLAY A WITH NO ADVANCING
    IF I < N
        DISPLAY ", " WITH NO ADVANCING
    ELSE
        DISPLAY "." WITH NO ADVANCING
    END-IF
    
    COMPUTE TEMP = A + B
    MOVE B TO A
    MOVE TEMP TO B
    ADD 1 TO I.
`,
    8: `IDENTIFICATION DIVISION.
PROGRAM-ID. POTENCIA.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 BASE PIC 9(5).
01 EXPONENTE PIC 9(5).
01 RESULTADO PIC 9(10) VALUE 1.

PROCEDURE DIVISION.
    DISPLAY "Ingrese la base: " WITH NO ADVANCING.
    ACCEPT BASE.
    DISPLAY "Ingrese el exponente: " WITH NO ADVANCING.
    ACCEPT EXPONENTE.
    
    PERFORM CALCULAR-POTENCIA
    
    DISPLAY "El resultado de" BASE "elevado a la" EXPONENTE "es:" RESULTADO
    
    STOP RUN.

CALCULAR-POTENCIA.
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > EXPONENTE
        MULTIPLY RESULTADO BY BASE GIVING RESULTADO
    END-PERFORM.
`,
    9: `IDENTIFICATION DIVISION.
PROGRAM-ID. ORDENAR-ARREGLO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 ARREGLO OCCURS 10 TIMES.
    02 ELEMENTO PIC 9(5).
01 TEMP PIC 9(5).
01 I PIC 9(5).
01 J PIC 9(5).

PROCEDURE DIVISION.
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > 10
        DISPLAY "Ingrese el elemento" I "del arreglo: " WITH NO ADVANCING
        ACCEPT ARREGLO(I)
    END-PERFORM
    
    PERFORM ORDENAR-ARREGLO
    
    DISPLAY "El arreglo ordenado es:"
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > 10
        DISPLAY ARREGLO(I)
    
    STOP RUN.

ORDENAR-ARREGLO.
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > 10
        PERFORM VARYING J FROM 1 BY 1 UNTIL J > 10 - I
            IF ARREGLO(J) > ARREGLO(J + 1)
                MOVE ARREGLO(J) TO TEMP
                MOVE ARREGLO(J + 1) TO ARREGLO(J)
                MOVE TEMP TO ARREGLO(J + 1)
            END-IF
        END-PERFORM
    END-PERFORM.
`,
    10: `IDENTIFICATION DIVISION.
PROGRAM-ID. CONTEO-VOCALES.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CADENA-TEXTO PIC X(100).
01 VOCAL PIC X.
01 CONTADOR PIC 9(5) VALUE 0.
01 I PIC 9(5) VALUE 1.

PROCEDURE DIVISION.
    DISPLAY "Ingrese una cadena de texto: " WITH NO ADVANCING.
    ACCEPT CADENA-TEXTO
    
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > LENGTH OF CADENA-TEXTO
        MOVE SUBSTRING (I:1) OF CADENA-TEXTO TO VOCAL
        INSPECT VOCAL TALLYING CONTADOR FOR CHARACTERS("AEIOUaeiou")
    END-PERFORM
    
    DISPLAY "El número de vocales en la cadena es:" CONTADOR
    
    STOP RUN.
`,
    11: `IDENTIFICATION DIVISION.
PROGRAM-ID. PALINDROMO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 PALABRA PIC X(100).
01 LONGITUD PIC 9(5).
01 I PIC 9(5).
01 ES-PALINDROMO PIC X(3).

PROCEDURE DIVISION.
    DISPLAY "Ingrese una palabra: " WITH NO ADVANCING.
    ACCEPT PALABRA
    MOVE FUNCTION LENGTH (PALABRA) TO LONGITUD
    MOVE "Sí" TO ES-PALINDROMO
    
    PERFORM VARYING I FROM 1 BY 1 UNTIL I * 2 > LONGITUD
        IF SUBSTRING(I:1) OF PALABRA NOT EQUAL SUBSTRING(LONGITUD - I + 1:1) OF PALABRA
            MOVE "No" TO ES-PALINDROMO
            EXIT PERFORM
        END-IF
    END-PERFORM
    
    DISPLAY "La palabra" PALABRA "es un palíndromo: " ES-PALINDROMO
    
    STOP RUN.
`,
    12: `IDENTIFICATION DIVISION.
PROGRAM-ID. CONTEO-PALABRAS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CADENA-TEXTO PIC X(100).
01 PALABRAS PIC 9(5) VALUE 0.
01 LONGITUD PIC 9(5).
01 I PIC 9(5).

PROCEDURE DIVISION.
    DISPLAY "Ingrese una cadena de texto: " WITH NO ADVANCING.
    ACCEPT CADENA-TEXTO
    MOVE FUNCTION LENGTH (CADENA-TEXTO) TO LONGITUD
    
    IF LONGITUD > 0
        ADD 1 TO PALABRAS
    END-IF
    
    PERFORM VARYING I FROM 1 BY 1 UNTIL I > LONGITUD
        IF SUBSTRING(I:1) OF CADENA-TEXTO EQUAL " " AND SUBSTRING(I + 1:1) OF CADENA-TEXTO NOT EQUAL " "
            ADD 1 TO PALABRAS
        END-IF
    END-PERFORM
    
    DISPLAY "El número de palabras en la cadena es:" PALABRAS
    
    STOP RUN.
`,
    13: `IDENTIFICATION DIVISION.
PROGRAM-ID. CONVERSION-MONEDA.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 MONEDA-ORIGEN PIC X(3).
01 MONEDA-DESTINO PIC X(3).
01 TASA-CAMBIO PIC 9(5)V99.
01 CANTIDAD-DOLARES PIC 9(10).
01 CANTIDAD-DESTINO PIC 9(10).

PROCEDURE DIVISION.
    DISPLAY "Ingrese la moneda de origen (USD, EUR, JPY, etc.): " WITH NO ADVANCING.
    ACCEPT MONEDA-ORIGEN
    DISPLAY "Ingrese la moneda de destino: " WITH NO ADVANCING.
    ACCEPT MONEDA-DESTINO
    DISPLAY "Ingrese la cantidad en dólares: " WITH NO ADVANCING.
    ACCEPT CANTIDAD-DOLARES
    DISPLAY "Ingrese la tasa de cambio (1 USD a " MONEDA-DESTINO "): " WITH NO ADVANCING.
    ACCEPT TASA-CAMBIO
    
    COMPUTE CANTIDAD-DESTINO = CANTIDAD-DOLARES * TASA-CAMBIO
    
    DISPLAY "El equivalente en" MONEDA-DESTINO "es:" CANTIDAD-DESTINO
    
    STOP RUN.
`,
    14: `IDENTIFICATION DIVISION.
PROGRAM-ID. INTERES-COMPUES.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CAPITAL-INICIAL PIC 9(10)V99.
01 TASA-INTERES PIC 9(5)V99.
01 PERIODOS PIC 9(5).
01 TIEMPO PIC 9(5).
01 MONTO-FINAL PIC 9(10)V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese el capital inicial: " WITH NO ADVANCING.
    ACCEPT CAPITAL-INICIAL.
    DISPLAY "Ingrese la tasa de interés anual (porcentaje): " WITH NO ADVANCING.
    ACCEPT TASA-INTERES.
    DISPLAY "Ingrese el número de períodos por año: " WITH NO ADVANCING.
    ACCEPT PERIODOS.
    DISPLAY "Ingrese el tiempo en años: " WITH NO ADVANCING.
    ACCEPT TIEMPO.
    
    COMPUTE MONTO-FINAL = CAPITAL-INICIAL * (1 + (TASA-INTERES / 100) / PERIODOS) ** (PERIODOS * TIEMPO)
    
    DISPLAY "El monto final es:" MONTO-FINAL
    
    STOP RUN.
`,
    15: `IDENTIFICATION DIVISION.
PROGRAM-ID. VALIDACION-NIF.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NIF PIC X(9).
01 LETRA-NIF PIC X.
01 DIGITOS-NIF PIC 9(8).
01 ES-VALIDO-NIF PIC X(3).

PROCEDURE DIVISION.
    DISPLAY "Ingrese un número de NIF (letra y 8 dígitos): " WITH NO ADVANCING.
    ACCEPT NIF
    
    IF LENGTH OF NIF = 9
        MOVE SUBSTRING(1:1) OF NIF TO LETRA-NIF
        MOVE SUBSTRING(2:8) OF NIF TO DIGITOS-NIF
        
        IF FUNCTION NUMVAL(LETRA-NIF) > 0 AND FUNCTION NUMVAL(DIGITOS-NIF) > 0
            MOVE "Sí" TO ES-VALIDO-NIF
        ELSE
            MOVE "No" TO ES-VALIDO-NIF
        END-IF
    ELSE
        MOVE "No" TO ES-VALIDO-NIF
    END-IF
    
    DISPLAY "El NIF ingresado es válido: " ES-VALIDO-NIF
    
    STOP RUN.
`,
    16: `IDENTIFICATION DIVISION.
PROGRAM-ID. SUMA-DIGITOS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUMERO-ENTERO PIC 9(10).
01 SUMA-DIGITOS PIC 9(10) VALUE 0.
01 DIGITO PIC 9.

PROCEDURE DIVISION.
    DISPLAY "Ingrese un número entero positivo: " WITH NO ADVANCING.
    ACCEPT NUMERO-ENTERO
    
    PERFORM CALCULAR-SUMA-DIGITOS
    
    DISPLAY "La suma de los dígitos es:" SUMA-DIGITOS
    
    STOP RUN.

CALCULAR-SUMA-DIGITOS.
    PERFORM VARYING DIGITO FROM 1 BY 1 UNTIL DIGITO > LENGTH OF NUMERO-ENTERO
        ADD FUNCTION NUMVAL(SUBSTRING(DIGITO:1) OF NUMERO-ENTERO) TO SUMA-DIGITOS
    END-PERFORM.
`,
    17: `IDENTIFICATION DIVISION.
PROGRAM-ID. MINIMO-COMUN-MULTIPLO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NUMERO-1 PIC 9(5).
01 NUMERO-2 PIC 9(5).
01 MCD PIC 9(5).
01 MCM PIC 9(10).

PROCEDURE DIVISION.
    DISPLAY "Ingrese el primer número: " WITH NO ADVANCING.
    ACCEPT NUMERO-1.
    DISPLAY "Ingrese el segundo número: " WITH NO ADVANCING.
    ACCEPT NUMERO-2.
    
    PERFORM CALCULAR-MCD
    
    COMPUTE MCM = (NUMERO-1 * NUMERO-2) / MCD
    
    DISPLAY "El Mínimo Común Múltiplo (MCM) es:" MCM
    
    STOP RUN.

CALCULAR-MCD.
    MOVE NUMERO-1 TO WS-NUM1
    MOVE NUMERO-2 TO WS-NUM2
    
    PERFORM CALCULAR-MCD-ALGORITMO UNTIL WS-NUM2 = 0
    
    MOVE WS-NUM1 TO MCD.

CALCULAR-MCD-ALGORITMO.
    DIVIDE WS-NUM1 BY WS-NUM2 GIVING WS-COCIENTE REMAINDER WS-RESTO
    MOVE WS-NUM2 TO WS-NUM1
    MOVE WS-RESTO TO WS-NUM2.
`,
    18: `IDENTIFICATION DIVISION.
PROGRAM-ID. NUMEROS-PERFECTOS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 LIMITE-INFERIOR PIC 9(5).
01 LIMITE-SUPERIOR PIC 9(5).
01 NUMERO PIC 9(5).
01 SUMA-DIVISORES PIC 9(5).

PROCEDURE DIVISION.
    DISPLAY "Ingrese el límite inferior: " WITH NO ADVANCING.
    ACCEPT LIMITE-INFERIOR.
    DISPLAY "Ingrese el límite superior: " WITH NO ADVANCING.
    ACCEPT LIMITE-SUPERIOR.
    
    DISPLAY "Los números perfectos en el rango son:"
    
    PERFORM VARYING NUMERO FROM LIMITE-INFERIOR BY 1 UNTIL NUMERO <= LIMITE-SUPERIOR
        MOVE 0 TO SUMA-DIVISORES
        PERFORM CALCULAR-DIVISORES UNTIL SUMA-DIVISORES > NUMERO OR NUMERO - 1 = 0
        
        IF SUMA-DIVISORES = NUMERO
            DISPLAY NUMERO WITH NO ADVANCING
            IF NUMERO < LIMITE-SUPERIOR
                DISPLAY ", " WITH NO ADVANCING
            ELSE
                DISPLAY "." WITH NO ADVANCING
            END-IF
        END-IF
    END-PERFORM
    
    STOP RUN.

CALCULAR-DIVISORES.
    PERFORM VARYING DIVISOR FROM 1 BY 1 UNTIL DIVISOR < NUMERO
        IF NUMERO MOD DIVISOR = 0
            ADD DIVISOR TO SUMA-DIVISORES
        END-IF
    END-PERFORM.
`,
    19: `IDENTIFICATION DIVISION.
PROGRAM-ID. CONVERSION-F-C.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 GRADOS-F PIC 999V99.
01 GRADOS-C PIC 999V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese los grados Fahrenheit: " WITH NO ADVANCING.
    ACCEPT GRADOS-F.
    
    COMPUTE GRADOS-C = (GRADOS-F - 32) * 5 / 9.
    
    DISPLAY "Los grados Celsius son: " GRADOS-C.
    
    STOP RUN.
`,
    20: `IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULO-INTERESES.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CAPITAL-INICIAL PIC 9(10)V99.
01 TASA-INTERES PIC 9(5)V99.
01 TIEMPO-ANOS PIC 9(5).
01 INTERESES-GANADOS PIC 9(10)V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese el capital inicial: " WITH NO ADVANCING.
    ACCEPT CAPITAL-INICIAL.
    DISPLAY "Ingrese la tasa de interés anual (porcentaje): " WITH NO ADVANCING.
    ACCEPT TASA-INTERES.
    DISPLAY "Ingrese el tiempo en años: " WITH NO ADVANCING.
    ACCEPT TIEMPO-ANOS.
    
    COMPUTE INTERESES-GANADOS = CAPITAL-INICIAL * TASA-INTERES / 100 * TIEMPO-ANOS
    
    DISPLAY "Los intereses ganados son:" INTERESES-GANADOS
    
    STOP RUN.
`,
    21: `IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULO-SALDO-BANCARIO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 SALDO-INICIAL PIC 9(10)V99 VALUE 1000.00.
01 DEPOSITO PIC 9(10)V99.
01 RETIRO PIC 9(10)V99.
01 SALDO-FINAL PIC 9(10)V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese el monto a depositar: " WITH NO ADVANCING.
    ACCEPT DEPOSITO.
    DISPLAY "Ingrese el monto a retirar: " WITH NO ADVANCING.
    ACCEPT RETIRO.
    
    COMPUTE SALDO-FINAL = SALDO-INICIAL + DEPOSITO - RETIRO
    
    DISPLAY "El saldo final es:" SALDO-FINAL
    
    STOP RUN.
`,
    22: `IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULO-PAGOS-PRESTAMO.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CAPITAL-PRESTADO PIC 9(10)V99.
01 TASA-INTERES PIC 9(5)V99.
01 NUMERO-CUOTAS PIC 9(5).
01 PAGO-MENSUAL PIC 9(10)V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese el capital prestado: " WITH NO ADVANCING.
    ACCEPT CAPITAL-PRESTADO.
    DISPLAY "Ingrese la tasa de interés anual (porcentaje): " WITH NO ADVANCING.
    ACCEPT TASA-INTERES.
    DISPLAY "Ingrese el número de cuotas: " WITH NO ADVANCING.
    ACCEPT NUMERO-CUOTAS.
    
    MOVE TASA-INTERES / 100 / 12 TO TASA-MENSUAL
    COMPUTE PAGO-MENSUAL = CAPITAL-PRESTADO * TASA-MENSUAL
                         / (1 - (1 + TASA-MENSUAL) ** -NUMERO-CUOTAS)
    
    DISPLAY "El pago mensual es:" PAGO-MENSUAL
    
    STOP RUN.
`,
    23: `IDENTIFICATION DIVISION.
PROGRAM-ID. INTERESES-COMPUESTOS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 CAPITAL-INICIAL PIC 9(10)V99.
01 TASA-INTERES ANNUAL PIC 9(5)V99.
01 TIEMPO-ANOS PIC 9(5).
01 DEPOSITO-MENSUAL PIC 9(10)V99.
01 SALDO-FINAL PIC 9(10)V99.

PROCEDURE DIVISION.
    DISPLAY "Ingrese el capital inicial: " WITH NO ADVANCING.
    ACCEPT CAPITAL-INICIAL.
    DISPLAY "Ingrese la tasa de interés anual (porcentaje): " WITH NO ADVANCING.
    ACCEPT TASA-INTERES-ANUAL.
    DISPLAY "Ingrese el tiempo en años: " WITH NO ADVANCING.
    ACCEPT TIEMPO-ANOS.
    DISPLAY "Ingrese el depósito mensual (0 si no hay depósitos): " WITH NO ADVANCING.
    ACCEPT DEPOSITO-MENSUAL.
    
    MOVE TIEMPO-ANOS TO ANOS
    
    PERFORM CALCULAR-SALDO UNTIL ANOS = 0
    
    DISPLAY "El saldo final en" TIEMPO-ANOS "años es:" SALDO-FINAL
    
    STOP RUN.

CALCULAR-SALDO.
    COMPUTE SALDO-FINAL = CAPITAL-INICIAL * (1 + TASA-INTERES-ANUAL / 100) ** ANOS
    IF DEPOSITO-MENSUAL > 0
        COMPUTE SALDO-FINAL = 
        SALDO-FINAL + DEPOSITO-MENSUAL * 12 * ((1 + TASA-INTERES-ANUAL / 100) ** ANOS - 1) 
        / (TASA-INTERES-ANUAL / 100)
    END-IF
    
    SUBTRACT 1 FROM ANOS
END-PERFORM.
`,
    24: `IDENTIFICATION DIVISION.
PROGRAM-ID. GESTION-CUENTAS-BANCARIAS.

DATA DIVISION.
FILE SECTION.
01 CUENTAS-FILE.
   02 CUENTA-RECORD.
      03 NUMERO-CUENTA PIC 9(5).
      03 SALDO-CUENTA PIC 9(10)V99.

WORKING-STORAGE SECTION.
01 NUMERO-CUENTA-INGRESADO PIC 9(5).
01 SALDO-INGRESADO PIC 9(10)V99.
01 OPCION PIC 9.
01 WS-FIN-ARCHIVO PIC X(3) VALUE "NO".

PROCEDURE DIVISION.
    OPEN INPUT CUENTAS-FILE
    DISPLAY "Gestión de cuentas bancarias"
    PERFORM UNTIL WS-FIN-ARCHIVO = "SI"
        DISPLAY "1. Consultar saldo"
        DISPLAY "2. Realizar depósito"
        DISPLAY "3. Realizar retiro"
        DISPLAY "4. Salir"
        DISPLAY "Elija una opción: " WITH NO ADVANCING
        ACCEPT OPCION
    
        IF OPCION = 1
            PERFORM CONSULTAR-SALDO
        ELSE IF OPCION = 2
            PERFORM REALIZAR-DEPOSITO
        ELSE IF OPCION = 3
            PERFORM REALIZAR-RETIRO
        ELSE IF OPCION = 4
            MOVE "SI" TO WS-FIN-ARCHIVO
        ELSE
            DISPLAY "Opción no válida. Intente nuevamente."
        END-IF
    END-PERFORM
    
    CLOSE CUENTAS-FILE
    STOP RUN.

CONSULTAR-SALDO.
    DISPLAY "Ingrese el número de cuenta: " WITH NO ADVANCING
    ACCEPT NUMERO-CUENTA-INGRESADO
    READ CUENTAS-FILE
        AT END DISPLAY "Cuenta no encontrada."
    END-READ
    IF NUMERO-CUENTA = NUMERO-CUENTA-INGRESADO
        DISPLAY "Saldo actual: $" SALDO-CUENTA
    END-IF.

REALIZAR-DEPOSITO.
    DISPLAY "Ingrese el número de cuenta: " WITH NO ADVANCING
    ACCEPT NUMERO-CUENTA-INGRESADO
    READ CUENTAS-FILE
        AT END DISPLAY "Cuenta no encontrada."
    END-READ
    IF NUMERO-CUENTA = NUMERO-CUENTA-INGRESADO
        DISPLAY "Ingrese la cantidad a depositar: " WITH NO ADVANCING
        ACCEPT SALDO-INGRESADO
        COMPUTE SALDO-CUENTA = SALDO-CUENTA + SALDO-INGRESADO
        REWRITE CUENTA-RECORD
        DISPLAY "Depósito realizado. Nuevo saldo: $" SALDO-CUENTA
    END-IF.

REALIZAR-RETIRO.
    DISPLAY "Ingrese el número de cuenta: " WITH NO ADVANCING
    ACCEPT NUMERO-CUENTA-INGRESADO
    READ CUENTAS-FILE
        AT END DISPLAY "Cuenta no encontrada."
    END-READ
    IF NUMERO-CUENTA = NUMERO-CUENTA-INGRESADO
        DISPLAY "Ingrese la cantidad a retirar: " WITH NO ADVANCING
        ACCEPT SALDO-INGRESADO
        IF SALDO-INGRESADO > SALDO-CUENTA
            DISPLAY "Saldo insuficiente."
        ELSE
            COMPUTE SALDO-CUENTA = SALDO-CUENTA - SALDO-INGRESADO
            REWRITE CUENTA-RECORD
            DISPLAY "Retiro realizado. Nuevo saldo: $" SALDO-CUENTA
        END-IF
    END-IF.
`,
  };
  return (
    <article id="ejercicios">
      <div className="h2-topBar">
        <h2>Ejercicios</h2>
        <a href="#indice">al Indice</a>
      </div>
      <h4>Ejercicio 1: Hola Mundo en COBOL</h4>
      <p>
        Escribe un programa COBOL que muestre "¡Hola, Mundo!" en la pantalla.
      </p>
      <pre>{codigos[1]}</pre>
      <h4>Ejercicio 2: Cálculo de la Suma</h4>
      <p>
        Escribe un programa COBOL que calcule la suma de dos números ingresados
        por el usuario.
      </p>
      <pre>{codigos[2]}</pre>
      <h4>Ejercicio 3: Conversión de Grados Celsius a Fahrenheit</h4>
      <p>
        Escribe un programa COBOL que convierta grados Celsius a grados
        Fahrenheit. La fórmula es: F = (C * 9/5) + 32.
      </p>
      <pre>{codigos[3]}</pre>
      <h4>Ejercicio 4: Números Primos</h4>
      <p>
        Escribe un programa COBOL que determine si un número ingresado por el
        usuario es primo.
      </p>
      <pre>{codigos[4]}</pre>
      <h4>Ejercicio 5: Factorial de un Número</h4>
      <p>
        Escribe un programa COBOL que calcule el factorial de un número entero
        positivo ingresado por el usuario.
      </p>
      <pre>{codigos[5]}</pre>
      <h4>Ejercicio 6: Suma de Números Pares</h4>
      <p>
        Escribe un programa COBOL que calcule la suma de los números pares en un
        rango dado. El usuario debe ingresar un número inicial y un número
        final.
      </p>
      <pre>{codigos[6]}</pre>
      <h4>Ejercicio 7: Números de la Serie Fibonacci</h4>
      <p>
        Escribe un programa COBOL que genere y muestre los primeros n números de
        la serie Fibonacci, donde n es un número ingresado por el usuario.
      </p>
      <pre>{codigos[7]}</pre>
      <h4>Ejercicio 8: Cálculo de Potencia</h4>
      <p>
        Escribe un programa COBOL que calcule la potencia de un número ingresado
        por el usuario. El usuario debe ingresar la base y el exponente.
      </p>
      <pre>{codigos[8]}</pre>
      <h4>Ejercicio 9: Ordenar un Arreglo</h4>
      <p>
        Escribe un programa COBOL que ordene un arreglo de números en orden
        ascendente utilizando el algoritmo de burbuja.
      </p>
      <pre>{codigos[9]}</pre>
      <h4>Ejercicio 10: Conteo de Vocales</h4>
      <p>
        Escribe un programa COBOL que cuente el número de vocales en una cadena
        de texto ingresada por el usuario.
      </p>
      <pre>{codigos[10]}</pre>
      <h4>Ejercicio 11: Palíndromo</h4>
      <p>
        Escribe un programa COBOL que determine si una palabra ingresada por el
        usuario es un palíndromo (una palabra que se lee igual de izquierda a
        derecha y viceversa).
      </p>
      <pre>{codigos[11]}</pre>
      <h4>Ejercicio 12: Conteo de Palabras</h4>
      <p>
        Escribe un programa COBOL que cuente el número de palabras en una cadena
        de texto ingresada por el usuario. Las palabras están separadas por
        espacios en blanco.
      </p>
      <pre>{codigos[12]}</pre>
      <h4>Ejercicio 13: Conversión de Moneda</h4>
      <p>
        Escribe un programa COBOL que convierta una cantidad en dólares a otra
        moneda ingresada por el usuario, utilizando una tasa de cambio dada.
      </p>
      <pre>{codigos[12]}</pre>
      <h4>Ejercicio 13: Conversión de Moneda</h4>
      <p>
        Escribe un programa COBOL que convierta una cantidad en dólares a otra
        moneda ingresada por el usuario, utilizando una tasa de cambio dada.
      </p>
      <pre>{codigos[13]}</pre>

      <h4>Ejercicio 14: Cálculo de Interés Compuesto</h4>
      <p>
        Escribe un programa COBOL que calcule el monto acumulado en una cuenta
        de ahorros después de un cierto número de años, utilizando la fórmula
        del interés compuesto: A = P(1 + r/n)^(nt).
      </p>
      <pre>{codigos[14]}</pre>
      <h4>Ejercicio 15: Validación de NIF (Número de Identificación Fiscal)</h4>
      <p>
        Escribe un programa COBOL que valide un número de NIF español (Número de
        Identificación Fiscal), que consta de una letra y 8 dígitos.
      </p>
      <pre>{codigos[15]}</pre>
      <h4>Ejercicio 16: Suma de Dígitos</h4>
      <p>
        Escribe un programa COBOL que calcule la suma de los dígitos de un
        número entero positivo ingresado por el usuario.
      </p>
      <pre>{codigos[16]}</pre>
      <h4>Ejercicio 17: Cálculo del Mínimo Común Múltiplo (MCM)</h4>
      <p>
        Escribe un programa COBOL que calcule el Mínimo Común Múltiplo (MCM) de
        dos números ingresados por el usuario. Puedes utilizar el algoritmo
        basado en el máximo común divisor (MCD).
      </p>
      <pre>{codigos[17]}</pre>
      <h4>Ejercicio 18: Números Perfectos</h4>
      <p>
        Escribe un programa COBOL que encuentre e imprima todos los números
        perfectos en un rango dado. Un número perfecto es igual a la suma de sus
        divisores propios.
      </p>
      <pre>{codigos[18]}</pre>
      <h4>Ejercicio 19: Conversión de Grados Fahrenheit a Celsius</h4>
      <p>
        Escribe un programa COBOL que convierta grados Fahrenheit a grados
        Celsius utilizando la fórmula: C = (F - 32) * 5/9.
      </p>
      <pre>{codigos[19]}</pre>
      <h4>Ejercicio 20: Cálculo de Intereses </h4>
      <p>
        Escribe un programa COBOL que calcule los intereses ganados en una
        cuenta de ahorros basados en el capital inicial, la tasa de interés
        anual y el tiempo en años.
      </p>
      <pre>{codigos[20]}</pre>
      <h4>Ejercicio 21: Cálculo de Saldo en Cuenta Bancaria</h4>
      <p>
        Escribe un programa COBOL que calcule el saldo en una cuenta bancaria
        después de realizar transacciones de depósitos y retiros.
      </p>
      <pre>{codigos[21]}</pre>
      <h4>Ejercicio 22: Cálculo de Pagos de Préstamos</h4>
      <p>
        Escribe un programa COBOL que calcule los pagos mensuales de un préstamo
        bancario basados en el capital prestado, la tasa de interés anual y el
        número de cuotas.
      </p>
      <pre>{codigos[22]}</pre>
      <h4>
        Ejercicio 23: Cálculo de Intereses Compuestos en una Cuenta de Ahorros
      </h4>
      <p>
        Escribe un programa COBOL que calcule el saldo en una cuenta de ahorros
        después de un período de tiempo, utilizando intereses compuestos y
        permitiendo depósitos periódicos.
      </p>
      <pre>{codigos[23]}</pre>
      <h4>Ejercicio 24: Gestión de Cuentas Bancarias</h4>
      <p>
        Escribe un programa COBOL que simule la gestión de cuentas bancarias,
        permitiendo realizar depósitos, retiros y consultas de saldo. Utiliza un
        archivo para mantener los datos de las cuentas.
      </p>
      <pre>{codigos[24]}</pre>
    </article>
  );
};
export { Ejercicios };
