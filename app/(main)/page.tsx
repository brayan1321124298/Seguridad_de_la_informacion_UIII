/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';

const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <div className="grid">

            <div className="col-12 xl:col-6">
                <div className="card">
                    <img src="/demo/images/logoupt.png" alt="logo" style={{ width: "50%", }} />
                    <h5>Universidad Politecnica de Tecamac</h5>
                    <h6>-Ingenieria en Software</h6>
                    <h6>-Seguridad de la informacion</h6>
                    <h6>-Docente : Nestor Apolo Lopez Gonzales </h6>
                    <h6>-Unidad III</h6>
                </div>

            </div>

            <div className="col-12 xl:col-6 ">
                <div className="card">
                    <img src="/demo/images/image.png" alt="logo" style={{ width: "40%", }} />
                    <h5>Brayan Javier Martinez Osorio</h5>
                    <p>-Matricula: 1321124298</p>
                    <p>-Grupo :3924IS</p>
                    <p>-correo : martinezosoriobrayanjavier@gmail.con</p>
                    <p>-31 de Julio de 2024</p>
                </div>
            </div>

            <div className='col-12 xl:col-12'>
                <div className='card'>
                    <h5>Introduccion</h5>
                    <p>En un mundo cada vez más digitalizado, la intersección entre tecnología y ética se vuelve fundamental para la sociedad moderna. La ética informática se ocupa de aplicar principios morales en el uso y desarrollo de tecnologías de la información, asegurando que el comportamiento de individuos y organizaciones respete los derechos y la dignidad de las personas. Aspectos como la privacidad, la propiedad intelectual, la exactitud de la información y la responsabilidad son esenciales para un manejo ético de la tecnología.

Simultáneamente, el incremento de los delitos informáticos, como el hacking, el phishing, y el uso de malware, presenta serios desafíos para la seguridad y la privacidad. Las leyes nacionales e internacionales buscan regular y sancionar estas actividades ilícitas, protegiendo la integridad de la información y garantizando un entorno digital seguro.

A través de la creación de códigos de conducta y ética informática, las organizaciones pueden fomentar una cultura de responsabilidad y transparencia, mitigando riesgos y promoviendo un uso ético de la tecnología. Esta introducción nos lleva a explorar la importancia de la ética en la informática y los mecanismos legales y organizacionales para combatir los delitos informáticos, en busca de un ciberespacio más seguro y confiable.</p>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;
