/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Inicio',
            items: [{ label: 'Portada Institucional', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Temas:',
            items: [
                { label: 'Legislación informática', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: 'Leyes nacionales', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                { label: 'Proceso de trámite', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
                { label: 'Ética informática', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
                { label: 'Características de los delitos informáticos', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
                { label: 'Conclusion y Referencias', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },

            ]
        },
       
       
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
