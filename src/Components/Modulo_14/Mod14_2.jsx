const Mod14_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="14.2">
      <h3>
        14.2. Mitigación de Amenazas y Vulnerabilidades en Aplicaciones COBOL
      </h3>
      <p>
        La mitigación de amenazas y vulnerabilidades es un aspecto crítico de la
        seguridad en aplicaciones COBOL. Las amenazas y las vulnerabilidades
        pueden comprometer la integridad, la confidencialidad y la
        disponibilidad de los datos y sistemas empresariales. Aquí se describen
        estrategias clave para mitigar amenazas y abordar vulnerabilidades en
        aplicaciones COBOL:
      </p>

      <h4> 1. Evaluación de Vulnerabilidades</h4>
      <p>
        Realiza evaluaciones regulares de vulnerabilidades en la aplicación
        COBOL para identificar posibles debilidades de seguridad. Esto puede
        incluir análisis estáticos y dinámicos del código y evaluaciones de
        seguridad de la infraestructura.
      </p>
      <h4> 2. Actualización y Parcheo</h4>
      <p>
        Mantén la aplicación COBOL, los sistemas operativos y los componentes de
        terceros actualizados con las últimas actualizaciones y parches de
        seguridad. Las vulnerabilidades conocidas a menudo se solucionan con
        parches.
      </p>
      <h4> 3. Validación de Entrada</h4>
      <p>
        Implementa una validación estricta de entrada para prevenir ataques de
        inyección, como inyección SQL y secuencias de comandos entre sitios
        (XSS). Filtra y escape adecuadamente todos los datos de entrada antes de
        procesarlos.
      </p>
      <h4> 4. Control de Sesiones y Sesiones Seguras</h4>
      <p>
        Utiliza controles de sesiones seguros y tokens de seguridad para
        prevenir ataques de suplantación de identidad y secuestro de sesiones.
      </p>
      <h4> 5. Control de Acceso</h4>
      <p>
        Implementa un sistema de control de acceso sólido que garantice que los
        usuarios solo tengan acceso a los recursos y datos para los que están
        autorizados.
      </p>
      <h4> 6. Encriptación</h4>
      <p>
        Utiliza encriptación para proteger datos sensibles en reposo y en
        tránsito. Esto incluye la encriptación de contraseñas, datos financieros
        y otros datos confidenciales.
      </p>
      <h4> 7. Gestión de Errores Seguros</h4>
      <p>
        Evita exponer información sensible en mensajes de error. Utiliza
        mensajes de error genéricos en lugar de revelar detalles internos que
        podrían ser aprovechados por atacantes.
      </p>
      <h4> 8. Gestión de Sesiones Expiradas</h4>
      <p>
        Implementa una gestión adecuada de sesiones expiradas para garantizar
        que las sesiones inactivas se cierren de manera segura y se requiera una
        nueva autenticación.
      </p>
      <h4> 9. Pruebas de Penetración</h4>
      <p>
        Realiza pruebas de penetración regulares para identificar
        vulnerabilidades en la aplicación y abordarlas antes de que sean
        explotadas por atacantes.
      </p>
      <h4> 10. Supervisión y Registro de Actividades</h4>
      <p>
        Establece un sistema de registro y supervisión de actividades que
        permita detectar comportamientos anómalos y rastrear incidentes de
        seguridad.
      </p>
      <h4> 11. Formación en Seguridad</h4>
      <p>
        Proporciona formación en seguridad a los desarrolladores,
        administradores de sistemas y usuarios para garantizar que todos estén
        al tanto de las mejores prácticas de seguridad.
      </p>
      <h4> 12. Plan de Respuesta a Incidentes</h4>
      <p>
        Desarrolla y practica un plan de respuesta a incidentes que describa
        cómo abordar y recuperarse de posibles violaciones de seguridad.
      </p>
      <h4> Conclusión</h4>
      <p>
        La mitigación de amenazas y vulnerabilidades es una parte esencial de la
        seguridad en aplicaciones COBOL. Las aplicaciones COBOL, al igual que
        cualquier otro software, están expuestas a una variedad de amenazas,
        desde ataques de inyección hasta ataques de suplantación de identidad.
        Adoptar una postura proactiva y seguir prácticas de seguridad sólidas,
        como la validación de entrada, el control de sesiones y la encriptación,
        es esencial para proteger los sistemas y datos empresariales. La
        seguridad en COBOL debe ser un esfuerzo continuo que evoluciona a medida
        que cambian las amenazas y las mejores prácticas de seguridad.
      </p>
    </section>
  );
};

export { Mod14_2 };
