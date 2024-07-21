"use client";
import type { Demo, Page } from "@/types";
import {
    AutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Chips } from "primereact/chips";
import {
    ColorPicker,
    ColorPickerHSBType,
    ColorPickerRGBType,
} from "primereact/colorpicker";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Knob } from "primereact/knob";
import { ListBox } from "primereact/listbox";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { Rating } from "primereact/rating";
import { SelectButton } from "primereact/selectbutton";
import { Slider } from "primereact/slider";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";

interface InputValue {
    name: string;
    code: string;
}

const InputDemo: Page = () => {
    const [floatValue, setFloatValue] = useState("");
    const [autoValue, setAutoValue] = useState<Demo.Country[]>([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>(
        []
    );
    const [calendarValue, setCalendarValue] = useState<any>(null);
    const [inputNumberValue, setInputNumberValue] = useState<number | null>(
        null
    );
    const [chipsValue, setChipsValue] = useState<any[]>([]);
    const [sliderValue, setSliderValue] = useState<number | string>("");
    const [ratingValue, setRatingValue] = useState<number | null>(null);
    const [colorValue, setColorValue] = useState<
        string | ColorPickerRGBType | ColorPickerHSBType
    >("1976D2");
    const [knobValue, setKnobValue] = useState(20);
    const [radioValue, setRadioValue] = useState(null);
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [switchValue, setSwitchValue] = useState(false);
    const [listboxValue, setListboxValue] = useState(null);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [multiselectValue, setMultiselectValue] = useState(null);
    const [toggleValue, setToggleValue] = useState(false);
    const [selectButtonValue1, setSelectButtonValue1] = useState(null);
    const [selectButtonValue2, setSelectButtonValue2] = useState(null);
    const [inputGroupValue, setInputGroupValue] = useState(false);


    useEffect(() => {
        CountryService.getCountries().then((data) => setAutoValue(data));
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            } else {
                setAutoFilteredValue(
                    autoValue.filter((country) => {
                        return country.name
                            .toLowerCase()
                            .startsWith(event.query.toLowerCase());
                    })
                );
            }
        }, 250);
    };

    const onCheckboxChange = (e: CheckboxChangeEvent) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };

    const itemTemplate = (option: InputValue) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={option.name}
                    src={`/demo/images/flag/flag_placeholder.png`}
                    onError={(e) =>
                    (e.currentTarget.src =
                        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                    }
                    className={`flag flag-${option.code.toLowerCase()}`}
                    style={{ width: "21px" }}
                />
                <span className="ml-2">{option.name}</span>
            </div>
        );
    };

    return (
        <div className="grid p-fluid input-demo">
            <div className="col-12 md:col-12">
                <div className="card">
                    <h2>Leyes nacionales e internacionales aplicables a los derechos de autor, privacidad y protección de datos.</h2>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-8 lg:mb-0">
                            <h5>Derechos de Autor</h5>
                        </div>

                    </div>

                    <h5>Nacionales:</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Ley de Propiedad Intelectual (España): Regula los derechos de autor y derechos conexos en España.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Ley Federal de Derechos de Autor (México): Protege las obras literarias y artísticas en México, otorgando derechos exclusivos a los autores sobre sus obras</p>
                            </span>
                        </div>
                    </div>

                    <h5>Internacionales:</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Convenio de Berna para la Protección de las Obras Literarias y Artísticas: Asegura la protección de los derechos de autor entre los países firmantes.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Tratado de la OMPI sobre Derecho de Autor: Establece normas internacionales para la protección de los derechos de autor.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Acuerdo sobre los Aspectos de los Derechos de Propiedad Intelectual relacionados con el Comercio (ADPIC): Establece estándares mínimos de protección de derechos de autor que deben ser respetados por todos los miembros de la Organización Mundial del Comercio (OMC).</p>
                            </span>
                        </div>

                    </div>
                    <h5>Privacidad</h5>
                    <h5>Nacionales:</h5>

                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Ley Orgánica de Protección de Datos Personales (LOPD): Regula la protección de datos personales en España.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México): Regula el tratamiento de datos personales en posesión de particulares en México.</p>
                            </span>
                        </div>
                    </div>

                    <h5>Internacionales</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Reglamento General de Protección de Datos (RGPD): Regula la protección de datos personales en la Unión Europea.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Convención 108 del Consejo de Europa: Primer tratado internacional vinculante que protege las personas contra el abuso en la recolección y procesamiento de datos personales.</p>
                            </span>
                        </div>
                    </div>

                    <h5>Protección de Datos</h5>

                    <h5>Nacionales</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Ley Orgánica de Protección de Datos Personales (LOPD): Regula la protección de datos personales en España.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México): Regula el tratamiento de datos personales en posesión de particulares en México.</p>
                            </span>
                        </div>
                    </div>


                    <h5>Internacionales</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-2">
                            <span className="p-input-icon-right">
                                <p>-Reglamento General de Protección de Datos (RGPD): Regula la protección de datos personales en la Unión Europea.</p>
                            </span>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0¿2">
                            <span className="p-input-icon-left p-input-icon-right">
                                <p>-Ley de Privacidad del Consumidor de California (CCPA): Protege la privacidad de los consumidores en California, EE. UU.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h2>Trámites y requisitos de registro de obras ante la institución de derechos de autor.</h2>
                            <p>Registrar una obra ante la institución de derechos de autor varía según el país, pero generalmente sigue un proceso similar. </p>
                        </div>
                        <div className="col-12 md:col-6">
                            <h5>México</h5>
                            <h6>Institución: Instituto Nacional del Derecho de Autor (INDAUTOR)</h6>
                            <h6>Tramites y Requisitos:</h6>
                            <p>-Solicitud: Completar y presentar el formulario de solicitud de registro de obra disponible en el sitio web de INDAUTOR.</p>
                            <p>-Documentos de Identificación: Copia de identificación oficial del autor o titulares de los derechos.</p>
                            <p>-Comprobante de Pago: Pago de la tarifa correspondiente al trámite, cuya cantidad varía dependiendo del tipo de obra y del solicitante (persona física o moral).</p>
                            <p>-Ejemplar de la Obra: Presentar un ejemplar de la obra a registrar. Para obras literarias, una copia impresa; para obras musicales, la partitura o grabación; para software, una copia del programa.</p>
                            <p>-Depósito Legal: En algunos casos, es necesario hacer un depósito legal de la obra en una biblioteca o archivo designado por la ley</p>
                            <p>-Carta de Cesión de Derechos (si aplica): Si el solicitante no es el autor original, debe presentar una carta de cesión de derechos debidamente firmada.</p>

                        </div>
                        <div className="col-12 md:col-6">
                            <h5>Proceso:</h5>
                            <p>1.Presentación de la Solicitud: Enviar la solicitud y los documentos requeridos a INDAUTOR, ya sea de manera presencial o por correo.</p>
                            <p>2.Revisión de la Solicitud: INDAUTOR revisa la documentación y la obra presentada para asegurarse de que cumple con los requisitos legales.</p>
                            <p>3.Emisión del Certificado: Si la solicitud es aprobada, se emite un certificado de registro de la obra, que sirve como prueba oficial de los derechos de autor.</p>
                        </div>



                    </div>
                </div>

                <div className="card">
                    <div className="col-12">
                        <h3>Consideraciones Generales</h3>
                        <p>Tiempo de Trámite: El tiempo de procesamiento varía según la institución y la carga de trabajo, pero puede tomar desde varias semanas hasta varios meses.</p>
                        <p>Costo: El costo del trámite también varía, pero generalmente es accesible para la mayoría de los solicitantes.</p>
                        <p>Renovación y Mantenimiento: Algunos registros pueden requerir renovaciones periódicas o la presentación de actualizaciones para mantener la protección.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InputDemo;
