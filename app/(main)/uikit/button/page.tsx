'use client';
import React, { useState } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';
import styles from './index.module.scss';
import { classNames } from 'primereact/utils';

const ButtonDemo = () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    const onLoadingClick3 = () => {
        setLoading3(true);

        setTimeout(() => {
            setLoading3(false);
        }, 2000);
    };

    const onLoadingClick4 = () => {
        setLoading4(true);

        setTimeout(() => {
            setLoading4(false);
        }, 2000);
    };

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Caracteristicas de los delitos informaticos tipificados en Mexico</h5>
                    <div className="flex flex-wrap gap-2">

                    </div>
                </div>

                <div className="card">
                    <h5>1. Acceso Ilícito a Sistemas y Equipos Informáticos</h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 1 del Código Penal Federal:</h6>
                        <p>-Descripción: Acceso sin autorización a sistemas y equipos de informática protegidos por algún mecanismo de seguridad.</p>
                        <p>-Características:</p>
                        <p>El acceso debe ser sin autorización.</p>
                        <p>El sistema o equipo debe estar protegido por algún mecanismo de seguridad.</p>
                        <p>No se requiere que se cause daño o se obtenga beneficio con el acceso.</p>

                    </div>
                </div>

                <div className="card">
                    <h5>2. Interferencia en Sistemas y Equipos Informáticos</h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 2 del Código Penal Federal:</h6>
                        <p>-Descripción:  Interferir, obstaculizar o interrumpir el funcionamiento de sistemas y equipos de informática.</p>
                        <p>-Características:</p>
                        <p>Interferencia debe ser intencional.</p>
                        <p>Puede incluir la obstrucción o interrupción del funcionamiento.</p>
                        <p>Puede ser mediante la introducción de software malicioso (virus, malware, etc.).</p>

                    </div>
                </div>
                <div className="card">
                    <h5>3. Alteración, Destrucción o Daño de Información </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 3 del Código Penal Federal:</h6>
                        <p>-Descripción: Alterar, destruir o causar daño a la información contenida en sistemas y equipos de informática.</p>
                        <p>-Características:</p>
                        <p>La alteración, destrucción o daño debe ser intencional.</p>
                        <p>Afecta la integridad y disponibilidad de la información.</p>

                    </div>
                </div>
                <div className="card">
                    <h5>4. Revelación de Información Confidencial
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 5 del Código Penal Federal:</h6>
                        <p>-Descripción: Revelar, divulgar o utilizar información confidencial contenida en sistemas y equipos de informática sin autorización.</p>
                        <p>-Características:</p>
                        <p>La información debe ser confidencial.</p>
                        <p>La revelación, divulgación o uso debe ser sin autorización.</p>
                        <p>Puede implicar el uso indebido de datos personales.</p>

                    </div>
                </div>
                <div className="card">
                    <h5>5. Fraude Informático
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 6 del Código Penal Federal:</h6>
                        <p>-Descripción: Usar sistemas y equipos de informática para obtener un beneficio indebido causando un perjuicio a otro.</p>
                        <p>-Características:</p>
                        <p>Uso de tecnología informática.</p>
                        <p>Beneficio indebido para el perpetrador.</p>
                        <p>Perjuicio a otra persona.</p>

                    </div>
                </div>
                <div className="card">
                    <h5>6. Falsificación Informática </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 7 del Código Penal Federal:</h6>
                        <p>-Descripción: Falsificar documentos, datos o información contenida en sistemas y equipos de informática.</p>
                        <p>-Características:</p>
                        <p>El acceso debe ser sin autorización.</p>
                        <p>El sistema o equipo debe estar protegido por algún mecanismo de seguridad.</p>
                        <p>No se requiere que se cause daño o se obtenga beneficio con el acceso.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>7. Producción, Distribución y Uso de Software Malicioso
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 211 bis 8 del Código Penal Federal:</h6>
                        <p>-Descripción: Producir, distribuir o usar software malicioso con la intención de dañar o afectar sistemas y equipos de informática.</p>
                        <p>-Características:</p>
                        <p>Alteración o creación de documentos, datos o información.</p>
                        <p>Intención de engañar o defraudar.</p>
                        <p>Uso de sistemas informáticos para cometer la falsificación.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>8. Acceso a Datos Personales                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Ley de Protección de Datos Personales en Posesión de los Particulares:</h6>
                        <p>-Descripción: Acceso, uso, revelación o almacenamiento de datos personales sin consentimiento del titular.</p>
                        <p>-Características:</p>
                        <p>Los datos personales deben ser tratados sin el consentimiento del titular.</p>
                        <p>Afecta la privacidad de los individuos.</p>
                        <p>Puede incluir robo de identidad, espionaje, etc.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>9. Ciberacoso y Ciberbullying                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Aunque no siempre están específicamente tipificados como delitos informáticos en el Código Penal Federal, varias leyes y regulaciones locales abordan estos comportamientos.</h6>
                        <p>-Descripción: Uso de tecnologías de la información para acosar, intimidar o humillar a individuos.</p>
                        <p>-Características:</p>
                        <p>Uso de medios electrónicos (mensajes, redes sociales, correos electrónicos).</p>
                        <p>Comportamiento repetitivo y hostil.</p>
                        <p>Intención de causar daño emocional o psicológico.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>10. Phishing y Fraude Electrónico                    </h5>
                    <div className="flex flex-wrap gap-2">
                        <h6>Artículo 386 y siguientes del Código Penal Federal (Fraude):</h6>
                        <p>-Descripción: Uso de correos electrónicos, sitios web falsos u otros medios electrónicos para engañar a las personas y obtener información sensible.</p>
                        <p>-Características:</p>
                        <p>Uso de ingeniería social para obtener información confidencial.</p>
                        <p>Intención de cometer fraude o robo de identidad.</p>
                        <p>Implica engaño y falsificación de identidad.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>Sanciones</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>-Penas de Prisión: Dependiendo del delito, las penas pueden variar desde varios meses hasta varios años de prisión.</p>
                        <p>-Multas: Se pueden imponer multas significativas a los infractores.</p>
                        <p>-Reparación de Daños: Los perpetradores pueden ser obligados a compensar a las víctimas por los daños causados.</p>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Aspectos legales relacionados con delitos informaticos en Mexico</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>

                        </p>
                    </div>
                </div>

                <div className="card">
                    <h5>Código Penal Federal</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>El Código Penal Federal incluye varios artículos específicos que tipifican los delitos informáticos y establecen las sanciones correspondientes.</p>
                        <h6>-Acceso Ilícito a Sistemas y Equipos de Informática (Artículo 211 bis 1):</h6>
                        <p>Penaliza el acceso sin autorización a sistemas y equipos protegidos.</p>
                        <p>Sanción: Prisión de seis meses a dos años y multa de cien a trescientos días.</p>
                        <h6>-Interferencia en Sistemas y Equipos de Informática (Artículo 211 bis 2):</h6>
                        <p>Penaliza la interferencia, obstaculización o interrupción del funcionamiento de sistemas y equipos informáticos.</p>
                        <p>Sanción: Prisión de tres meses a dos años y multa de cincuenta a trescientos días.</p>
                        <h6>-Alteración, Destrucción o Daño de Información (Artículo 211 bis 3):</h6>
                        <p>Penaliza la alteración, destrucción o daño de información contenida en sistemas y equipos informáticos.</p>
                        <p>Sanción: Prisión de seis meses a cuatro años y multa de cien a seiscientos días.</p>

                    </div>
                </div>
                <div className="card">
                    <h5>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>Esta ley regula el tratamiento de datos personales en posesión de particulares, estableciendo derechos y obligaciones para proteger la privacidad de los individuos.</p>
                        <h6>-Obligaciones de los Responsables:</h6>
                        <p>Implementar medidas de seguridad para proteger los datos personales.</p>
                        <p>Obtener el consentimiento de los titulares antes de tratar sus datos.</p>
                        <p>Informar a los titulares sobre el uso de sus datos a través de avisos de privacidad.</p>
                        <h6>-Derechos de los Titulares</h6>
                        <p>Acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales (derechos ARCO).</p>
                        <h6>Sanciones</h6>
                        <p>Multas que pueden ir desde 100 hasta 320,000 días de salario mínimo.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>Ley de Protección de la Infraestructura Crítica de la Información</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>Esta ley se enfoca en proteger la infraestructura crítica de información en México, estableciendo medidas para prevenir, detectar y responder a ciberataques</p>
                        <h6>-Definición de Infraestructura Crítica:</h6>
                        <p>Incluye sistemas y redes que son esenciales para la seguridad nacional, la economía y la salud pública</p>
                        <h6>Obligaciones de los Operadores de Infraestructura Crítica:</h6>
                        <p>Implementar medidas de seguridad adecuadas.</p>
                        <p>Reportar incidentes de seguridad a las autoridades competentes.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>Ley de Instituciones de Crédito</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>Regula la seguridad de la información en el sector bancario, imponiendo obligaciones a las instituciones financieras para proteger los datos de los clientes y prevenir fraudes electrónicos.</p>
                        <h6>Obligaciones de las Instituciones de Crédito:</h6>
                        <p>Implementar medidas de seguridad para proteger la información financiera.</p>
                        <p>Informar a los clientes sobre los riesgos y medidas de protección</p>

                    </div>
                </div>
                <div className="card">
                    <h5>Ley de Firma Electrónica Avanzada (LFEA)</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>Regula el uso de la firma electrónica avanzada en documentos y transacciones electrónicas, estableciendo su validez y efectos legales.</p>
                        <h6>Requisitos para la Firma Electrónica Avanzada:</h6>
                        <p>Debe ser única para el firmante.</p>
                        <p>Debe ser susceptible de verificación.</p>
                        <p>Debe ser controlada por el firmante exclusivamente.</p>
                    </div>
                </div>
                <div className="card">
                    <h5>Reglamento del Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</h5>
                    <div className="flex flex-wrap gap-2">
                        <p>El INAI es el organismo encargado de garantizar la transparencia y la protección de datos personales en México.</p>
                        <h6>Funciones del INAI:</h6>
                        <p>Supervisar el cumplimiento de la LFPDPPP.</p>
                        <p>Investigar denuncias de violaciones a la protección de datos.</p>
                        <p>Imponer sanciones por incumplimiento.</p>
                    </div>
                </div>


            </div>
            <div>
                <div className='card'>
                    <h4>Proceso de elaboración de códigos de conducta y ética informática</h4>
                    <p>El proceso de elaboración de códigos de conducta y ética informática es fundamental para establecer normas claras y principios éticos que guíen el comportamiento de los individuos y organizaciones en el uso de la tecnología y la información. Aquí te describo un proceso general para elaborar estos códigos:</p>
                    <h6>Definición del Propósito y Alcance</h6>
                    <p>-Identificación de Necesidades: Determinar por qué se necesita el código de conducta y ética informática. Puede ser para mejorar la seguridad, proteger la privacidad, fomentar prácticas éticas, etc.</p>
                    <p>-Alcance: Establecer a quién aplica el código (empleados, contratistas, socios, etc.) y en qué contextos (uso interno, interacciones con clientes o proveedores, etc.).</p>
                    <h6>Formación de un Equipo de Trabajo</h6>
                    <p>-Equipo Multidisciplinario: Involucrar a personas clave de diferentes áreas (legal, tecnología, recursos humanos, cumplimiento) para garantizar una perspectiva integral.</p>
                    <p>-Expertos en Ética y Cumplimiento: Consultar con expertos en ética empresarial y cumplimiento legal para asegurar que el código cumpla con estándares éticos y normativas vigentes.</p>
                    <h6>Investigación y Análisis</h6>
                    <p>-Revisión de Literatura y Normativas: Investigar códigos de conducta existentes, normativas legales y estándares éticos relevantes (como ISO 27001, GDPR, entre otros).</p>
                    <p>-Análisis de Casos: Estudiar casos históricos de malas prácticas informáticas y delitos cibernéticos para identificar áreas de riesgo y necesidades de regulación.</p>
                    <h6>Desarrollo de Contenidos</h6>
                    <p>-Principios y Valores: Definir los principios éticos fundamentales que guiarán el comportamiento (privacidad, integridad, transparencia, responsabilidad, etc.).</p>
                    <p>-Normas y Directrices: Especificar comportamientos esperados y prohibidos en relación con el uso de sistemas informáticos, datos, comunicaciones electrónicas, etc.</p>
                    <h6>Consultas y Retroalimentación</h6>
                    <p>-Participación de Interesados: Consultar con empleados, grupos de interés, sindicatos y otras partes interesadas para obtener retroalimentación y asegurar la aceptación y relevancia del código.</p>
                    <p>-Revisión Legal: Obtener revisión legal para asegurar que el código cumpla con las leyes y regulaciones aplicables.</p>
                    <h6>Aprobación y Implementación</h6>
                    <p>-Aprobación de la Alta Dirección: Obtener la aprobación formal de la alta dirección o el consejo de administración.</p>
                    <p>-Lanzamiento y Comunicación: Implementar el código de manera efectiva mediante sesiones de capacitación, comunicación clara y accesible a todos los involucrados.</p>
                    <h6>Monitoreo y Actualización</h6>
                    <p>-Monitoreo Continuo: Establecer mecanismos para monitorear el cumplimiento del código y reportar violaciones.</p>
                    <p>-Revisiones Periódicas: Programar revisiones regulares del código para mantenerlo actualizado frente a cambios en la tecnología, leyes y prácticas comerciales.</p>
                    <h6>Aplicación de Sanciones y Reconocimiento</h6>
                    <p>-Aplicación Justa: Definir consecuencias claras para las violaciones del código y asegurar que las sanciones sean aplicadas de manera justa y consistente.</p>
                    <p>-Reconocimiento de Cumplimiento: Reconocer y premiar el cumplimiento ético y la contribución positiva al entorno informático y de seguridad.</p>
                </div>
            </div>
        </div>
    );
};

export default ButtonDemo;
