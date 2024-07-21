"use client";
import type { Demo } from "@/types";
import {
    AutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>(
        []
    );
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState<any>(null);
    const [value6, setValue6] = useState<any[]>([]);
    const [value7, setValue7] = useState("");
    const [value8, setValue8] = useState<number | null>(null);
    const [value9, setValue9] = useState("");
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState("");

    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];

    useEffect(() => {
        CountryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        setFilteredCountries(filtered);
    };

    return (
        <div>
            <div className="card">
                <h5>Proceso de trámite de registro de obras ante la institución de derechos de autor</h5>
                <p>El proceso de registro de obras ante una institución de derechos de autor puede variar dependiendo del país y la institución en cuestión. A continuación:</p>
                <h6>México</h6>
                <h6>-Institución: Instituto Nacional del Derecho de Autor (INDAUTOR)</h6>
                <p>Proceso:</p>
                <h6>Preparar la Documentación:</h6>
                <p>Formulario de solicitud de registro de obra (disponible en el sitio web de INDAUTOR).</p>
                <p>Copia de identificación oficial del autor o titulares de los derechos (INE, pasaporte, etc.).</p>
                <p>Comprobante de pago de la tarifa correspondiente.</p>
                <p>Ejemplar de la obra a registrar (impresa, digital, grabación, etc.).</p>
                <p>Carta de cesión de derechos (si aplica).</p>
                <h6>Presentar la Solicitud:</h6>
                <p>-En Línea: A través del portal de INDAUTOR, siguiendo las instrucciones para la presentación electrónica.</p>
                <p>-Presencial: En las oficinas de INDAUTOR, llevando todos los documentos necesarios.</p>
                <h6>Revisión de la Solicitud:</h6>
                <p>-INDAUTOR revisará la documentación y la obra presentada para asegurarse de que cumple con los requisitos legales.</p>
                <h6>Emisión del Certificado:</h6>
                <p>Si la solicitud es aprobada, se emite un certificado de registro de la obra, que sirve como prueba oficial de los derechos de autor.</p>
            </div>
                
            <div className="card">

                <h5>Proceso de elaboración de avisos de privacidad</h5>
                <p>
                    El proceso de elaboración de avisos de privacidad es fundamental para cumplir con las leyes de protección de datos y asegurar la transparencia en el manejo de la información personal. Aquí tienes un proceso general y detallado para la creación de un aviso de privacidad, siguiendo las mejores prácticas y regulaciones internacionales, como el Reglamento General de Protección de Datos (GDPR) de la UE y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México.

                </p>
                <div className="grid p-fluid mt-3">
                    <div>
                        <div className="card">
                            <p>-Paso 1: Identificación de Datos Recopilados
                                Listado de Datos Personales: Identificar todos los tipos de datos personales que se recopilan (nombre, dirección, correo electrónico, etc.).
                                Categorías de Datos: Clasificar los datos personales en categorías (datos de contacto, datos financieros, datos de salud, etc.).
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 2: Finalidad del Tratamiento de Datos
                                Definición de Propósitos: Especificar claramente para qué se utilizarán los datos personales (envío de boletines, procesamiento de pagos, etc.).
                                Justificación Legal: Determinar la base legal para el tratamiento de datos (consentimiento, cumplimiento de contrato, obligación legal, intereses legítimos, etc.).
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 3: Derechos de los Titulares de los Datos
                                Enumerar los Derechos: Informar a los usuarios sobre sus derechos respecto a sus datos personales (acceso, rectificación, cancelación, oposición, portabilidad, etc.).
                                Procedimientos de Ejercicio: Describir cómo pueden ejercer estos derechos (contacto de la empresa, formularios específicos, etc.).

                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 4: Transferencias y Terceros
                                Divulgación a Terceros: Informar si los datos personales serán compartidos con terceros y en qué circunstancias.
                                Transferencias Internacionales: Indicar si los datos serán transferidos a otros países y qué medidas de protección se aplican.

                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 5: Medidas de Seguridad
                                Descripción de las Medidas: Detallar las medidas de seguridad técnicas y organizativas implementadas para proteger los datos personales.
                                Manejo de Incidentes: Explicar cómo se manejan los incidentes de seguridad y las brechas de datos.

                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 6: Contacto y Responsable del Tratamiento
                                Información de Contacto: Proporcionar los datos de contacto del responsable del tratamiento de datos (nombre, dirección, correo electrónico, teléfono).
                                Delegado de Protección de Datos (si aplica): Incluir la información de contacto del Delegado de Protección de Datos, si se ha designado uno.

                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <p>-Paso 7: Revisión y Actualización del Aviso
                                Periodicidad: Establecer una frecuencia para revisar y actualizar el aviso de privacidad (anualmente, bianualmente, etc.).
                                Notificación de Cambios: Informar a los usuarios cómo se les notificará sobre cambios en el aviso de privacidad (correo electrónico, página web, etc.).


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FloatLabelDemo;
