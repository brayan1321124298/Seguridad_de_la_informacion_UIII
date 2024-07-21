'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

interface DropdownItem {
    name: string;
    code: string;
}

const FormLayoutDemo = () => {
    const [dropdownItem, setDropdownItem] = useState<DropdownItem | null>(null);
    const dropdownItems: DropdownItem[] = useMemo(
        () => [
            { name: 'Option 1', code: 'Option 1' },
            { name: 'Option 2', code: 'Option 2' },
            { name: 'Option 3', code: 'Option 3' }
        ],
        []
    );

    useEffect(() => {
        setDropdownItem(dropdownItems[0]);
    }, [dropdownItems]);

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Legislación informática</h5>
                    <div className="field">
                        <label>La legislación informática abarca las leyes y regulaciones que gobiernan el uso de la tecnología de la información y las comunicaciones. Este campo se enfoca en varios aspectos, tales como la protección de datos, la propiedad intelectual, la ciberseguridad, y el uso ético de la información.</label>
                    </div>
                </div>

                <div className="card p-fluid">
                    <h5>Propiedad Intelectual</h5>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">-Derechos de Autor:</label>
                            <label>Protege las obras literarias, artísticas y científicas, incluyendo software y bases de datos.</label>
                            
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">-Patentes:</label>
                            <label> Protegen las invenciones técnicas y aplicaciones innovadoras.</label>
                            
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">-Marcas Registradas:</label>
                            <label>Protegen los símbolos, nombres y logotipos utilizados por las empresas para diferenciar sus productos y servicios.</label> 
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Protección de Datos Personales</h5>
                    <div className="field grid">
                        <label htmlFor="name3" className="col-12 mb-2 md:col-4 md:mb-4">-General Data Protection Regulation (GDPR):</label>
                        <div className="col-12 md:col-8">
                            <label>General Data Protection Regulation (GDPR): Reglamento de la Unión Europea que protege los datos personales de los ciudadanos de la UE y regula cómo las empresas deben gestionar esta información.</label>
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-4 md:mb-4">
                            -Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México):
                        </label>
                        <div className="col-12 md:col-8">
                            <label>Regula la recolección, uso y almacenamiento de datos personales por entidades privadas.</label>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Ciberseguridad</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            <label htmlFor="firstname1" >-Ley de Seguridad de la Información:
                            </label>
                            <label>Establece las directrices y normas para proteger la infraestructura crítica y la información contra amenazas cibernéticas.</label>
                        </div>
                        <div className="field">
                            <label htmlFor="lastname1">-Ley de Delitos Informáticos:
                            </label>
                            <label>Penaliza actividades ilícitas como el hacking, el robo de datos y el fraude electrónico.</label>
                            
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Crímenes y Delitos Informáticos</h5>
                    <div className="field p-fluid">
                        <label htmlFor="username">Convención sobre el Ciberdelito (Convenio de Budapest): Tratado internacional que establece las normas para combatir los delitos cibernéticos y facilita la cooperación entre países.</label>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Conceptos de derechos de autor, privacidad y protección
                    de datos.</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-12">
                            <h6>Derechos de Autor </h6>
                            <label>Los derechos de autor son un conjunto de derechos exclusivos que protegen las obras creativas de los autores. Algunos conceptos clave incluyen:</label>
                            <label>-Obras Protegidas: Incluyen obras literarias, artísticas, musicales, cinematográficas, software, y bases de datos, entre otras.</label>
                            <label>-Derechos Morales: Protegen la integridad de la obra y el reconocimiento de la autoría, independientemente de los derechos económicos.</label>
                            <label>-Derechos Patrimoniales: Otorgan al autor el derecho exclusivo de reproducir, distribuir, comunicar públicamente y transformar la obra.</label>
                            <label>-Duración: Generalmente, los derechos de autor duran toda la vida del autor más un número determinado de años después de su muerte (por ejemplo, 70 años en la mayoría de los países).</label>
                            <label>-Limitaciones y Excepciones: Incluyen el uso justo, la cita, y otras situaciones en las que se permite el uso de obras protegidas sin autorización del titular de los derechos.</label>
                        </div>
                        <div className="field col-12">
                            <h6>Privacidad y Protección de Datos</h6>
                            <label>La privacidad y la protección de datos son aspectos fundamentales de la legislación informática que buscan proteger la información personal de los individuos. Algunos conceptos clave incluyen:</label>
                            <label>-Datos Personales: Cualquier información que identifique o pueda identificar a una persona, como nombre, dirección, número de teléfono, o dirección de correo electrónico.</label>
                            <label>-Consentimiento: Los titulares de los datos deben dar su consentimiento para el tratamiento de sus datos personales, y este debe ser informado, específico, y libre.</label>
                            <label>-Derechos de los Titulares: Incluyen el derecho de acceso, rectificación, cancelación, y oposición (conocidos como derechos ARCO) sobre sus datos personales.</label>
                            <label>-Responsable del Tratamiento: La persona física o jurídica que decide sobre el tratamiento de los datos personales y las finalidades del mismo.</label>
                            <label>-Transferencia Internacional: La transferencia de datos personales a países que no ofrecen un nivel adecuado de protección requiere medidas adicionales para garantizar la seguridad y privacidad de los datos.</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLayoutDemo;
