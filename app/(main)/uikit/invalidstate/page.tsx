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
import { Password } from "primereact/password";
import { useEffect, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";

const InvalidStateDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>(
        []
    );
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState<any[]>([]);
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const [value7, setValue7] = useState(0);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState(null);
    const [value10, setValue10] = useState("");

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
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
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

    const onCalendarChange = (e: any) => {
        setValue3(e.value!);
    };

    return (
        <div>
            <div className="card">
                <h5>Etica informatica y delitos informaticos</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-12">
                        <p>La ética informática aborda las cuestiones morales y éticas que surgen en el uso de la tecnología de la información. Los siguientes son conceptos clave:
                        </p>
                        <div>
                            <div className="card">
                                <p>Privacidad:
                                    <p> - Definición: El derecho de los individuos a controlar la información sobre ellos mismos.</p>
                                    <p> - Aplicación: Respetar y proteger la información personal de los usuarios, evitando su recolección y uso sin consentimiento.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <p>
                                    Confidencialidad:
                                    <p>- Definición: Asegurar que la información sensible solo sea accesible para quienes están autorizados.</p>

                                    <p>- Aplicación: Implementar medidas de seguridad para proteger los datos contra accesos no autorizados.</p>


                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <p>
                                    Integridad:
                                    <p>- Definición: Garantizar que la información es precisa y no ha sido alterada de manera no autorizada.</p>
                                    <p>- Aplicación: Mantener y verificar la exactitud y completitud de los datos almacenados y transmitidos.</p>

                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <p>Transparencia:
                                    <p>- Definición: Ser claro y abierto sobre cómo se manejan los datos y qué medidas se toman para protegerlos.</p>
                                    <p>- Aplicación: Informar a los usuarios sobre las prácticas de recopilación, uso y protección de datos.</p>
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <p>Responsabilidad:
                                    <p> - Definición: Aceptar la responsabilidad por las acciones y decisiones que afectan la seguridad y privacidad de los datos.</p>
                                    <p> - Aplicación: Establecer políticas y procedimientos para el manejo ético de la información y la resolución de incidentes.</p>
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <p>Acceso Equitativo:
                                    <p>- Definición: Promover un acceso equitativo a la información y las tecnologías.</p>
                                    <p>- Aplicación: Desarrollar iniciativas para reducir la brecha digital y garantizar que todos tengan las mismas oportunidades de acceso.</p>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="col-12 md:col-12">
                <div className="card">
                    <h5>Conceptos de ética y delitos informáticos</h5>
                    <p>La ética informática se refiere a la aplicación de principios éticos y morales al uso de la tecnología y los sistemas de información.
                        Incluye el estudio de cómo las decisiones y acciones relacionadas con la tecnología afectan a las personas y la sociedad. Aquí hay algunos conceptos clave:</p>

                    <div className="card">
                        <h6>Privacidad:</h6>
                        <p>El derecho de los individuos a controlar la información personal y a decidir cómo y con quién se comparte esa información.</p>
                        <h6>Propiedad Intelectual:</h6>
                        <p>Los derechos legales relacionados con las creaciones del intelecto, como software, bases de datos y otros contenidos digitales.</p>
                        <h6>Acceso a la Información:</h6>
                        <p>La igualdad de oportunidades para acceder y utilizar la información, así como los recursos tecnológicos.</p>
                        <h6>Transparencia:</h6>
                        <p>La necesidad de que las organizaciones y los individuos sean claros y abiertos sobre sus políticas y prácticas en el uso de la tecnología.</p>
                        <h6>Confidencialidad:</h6>
                        <p>El deber de proteger la información sensible contra el acceso no autorizado y el uso indebido.</p>
                    </div>

                    <h5>Conceptos de Delitos Informáticos</h5>
                    <p>Los delitos informáticos, también conocidos como cibercrímenes, son actividades ilegales que se realizan utilizando computadoras y redes informáticas. Aquí se presentan algunos de los conceptos más importantes:</p>
                    <div className="card">
                        <h6>Hacking:</h6>
                        <p>El acceso no autorizado a sistemas informáticos con el objetivo de robar, alterar o destruir datos.</p>
                        <h6>Phishing:</h6>
                        <p>El intento de obtener información confidencial, como nombres de usuario, contraseñas y detalles de tarjetas de crédito, mediante engaños, generalmente a través de correos electrónicos falsos.</p>
                        <h6>Malware:</h6>
                        <p> Software malicioso diseñado para dañar, interrumpir o obtener acceso no autorizado a sistemas informáticos. Incluye virus, troyanos, spyware, ransomware, etc.</p>
                        <h6>Suplantación de Identidad (Spoofing): </h6>
                        <p>Acto de engañar a una red o a un usuario haciéndose pasar por una entidad conocida, generalmente para obtener acceso a información confidencial.</p>
                        <h6>Secuestro de Datos (Ransomware):</h6>
                        <p>Tipo de malware que cifra los archivos de la víctima y exige un rescate para restaurar el acceso a los datos.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InvalidStateDemo;
