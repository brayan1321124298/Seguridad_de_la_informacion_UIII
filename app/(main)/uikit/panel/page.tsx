'use client';

import React, { useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Menu } from 'primereact/menu';

const PanelDemo = () => {
    const menu1 = useRef<Menu>(null);
    const toolbarItems = [
        {
            label: 'Save',
            icon: 'pi pi-check'
        },
        {
            label: 'Update',
            icon: 'pi pi-sync'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        }
    ];

    const toolbarLeftTemplate = () => {
        return (
            <>
                <Button label="New" icon="pi pi-plus" style={{ marginRight: '.5em' }} />
                <Button label="Open" icon="pi pi-folder-open" severity="secondary" />

                <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: '.5em' }}></i>

                <Button icon="pi pi-check" severity="success" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-trash" severity="warning" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-print" severity="danger" />
            </>
        );
    };
    const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: '12rem' }}></SplitButton>;
    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Card</h5>
            <Button icon="pi pi-plus" text onClick={(event) => menu1.current?.toggle(event)} />
            <Menu
                ref={menu1}
                popup
                model={[
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Remove', icon: 'pi pi-fw pi-minus' },
                    { label: 'Update', icon: 'pi pi-fw pi-sync' }
                ]}
            />
        </div>
    );

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Conclusion</h5>
                </div>
            </div>
            <div className="col-12 md:col-12">
                <div className="card">
                    <h5>Conclusion</h5>
                    <p>En la era digital actual, la intersección entre la tecnología y la ética es más relevante que nunca. La ética informática se centra en la aplicación de principios morales al uso de la tecnología, abarcando aspectos como la privacidad, la propiedad intelectual, el acceso a la información, la exactitud, la responsabilidad y la transparencia. Estos principios son fundamentales para garantizar que la tecnología se utilice de manera que respete los derechos y la dignidad de las personas.

                        Paralelamente, los delitos informáticos, como el hacking, el phishing, el malware y el fraude informático, representan amenazas significativas para la seguridad y la privacidad de los individuos y las organizaciones. La comprensión de estos delitos y la implementación de medidas preventivas son cruciales para proteger los datos y sistemas informáticos de accesos no autorizados y usos malintencionados.

                        Las leyes nacionales e internacionales, como el Código Penal Federal en México y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), establecen un marco legal robusto para abordar y sancionar los delitos informáticos, protegiendo la integridad y confidencialidad de la información. Además, la creación de códigos de conducta y ética informática en las organizaciones promueve una cultura de responsabilidad y transparencia, ayudando a mitigar los riesgos asociados con el uso de la tecnología.

                        En conjunto, la ética informática y la legislación sobre delitos informáticos juegan roles complementarios en la construcción de un entorno digital seguro y confiable. La colaboración entre individuos, organizaciones y gobiernos es esencial para enfrentar los desafíos éticos y de seguridad en el ciberespacio, garantizando así un uso responsable y beneficioso de la tecnología para todos.</p>
                </div>
                <div className="card">
                    <h5>Referencias</h5>

                </div>
            </div>



        </div>
    );
};

export default PanelDemo;
