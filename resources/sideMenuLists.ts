import { FiSettings } from 'react-icons/fi'
import { VscGraph, VscSettings } from 'react-icons/vsc'
import { TbPageBreak } from 'react-icons/tb'
import { GiSecurityGate } from 'react-icons/gi'

export const sideMenuList = [
    {
        redirect: '#',
        menu: 'Configurations',
        Icons: FiSettings
    },
    {
        redirect: '#',
        menu: 'Masters',
        subMenu: [
            {
                redirect: '/masters/location-master',
                menu: 'Location',
            },
            {
                redirect: '#',
                menu: 'Supplier',
            }, {
                redirect: '#',
                menu: 'Customer',
            },
            {
                redirect: '#',
                menu: 'Carrier',
            },
            {
                redirect: '#',
                menu: 'Fleet',
            }
        ],
        Icons: VscGraph
    },
    {
        redirect: '#',
        menu: 'SKU Settings',
        Icons: VscSettings
    },{
        redirect: '#',
        menu: 'ASN',
        Icons: TbPageBreak
    },{
        redirect: '#',
        menu: 'Gate Operations',
        Icons: GiSecurityGate
    }
]