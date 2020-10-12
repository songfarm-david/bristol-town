import React from 'react'
import Tabs from 'react-accessible-tabs';
import Table from "./table"

import "./tabs.scss"

export default function Tabbed() {
    const tabContent = [
        {
            label: 'Haircuts',
            content: <Table 
                tableHeader={"SHAMPOO AND BLOW DRY INCLUDED IN ALL CUTS EXCEPT CHILDREN’S"} 
                tableContent={[
                    {
                        headline: 'Men’s Cut & Style',
                        price: 'from $30'
                    },
                    {
                        headline: 'Woman’s Cut & Style',
                        price: 'from $50'
                    },
                    {
                        headline: 'Children’s Cut (under 12)',
                        price: 'from $20'
                    }
                ]
            } />
        },
        {
            label: 'Colour & Correction',
            content: <Table 
            tableHeader={"GET A FREE COLOUR CORRECTION CONSULTATION"} 
            tableContent={[
                {
                    headline: 'Full Head Colour',
                    price: 'from $85'
                },
                {
                    headline: 'Full Head Highlights',
                    price: 'from $110'
                },
                {
                    headline: 'Partial Hilights',
                    price: 'from $60'
                },
                {
                    headline: 'Men’s Colouring',
                    price: 'from $60'
                },
                {
                    headline: 'Root Touch Ups',
                    price: 'from $85'
                }
            ]
        } />
        },
        {
            label: 'Perms',
            content: <Table 
                tableHeader={"CUTS NOT INCLUDED"} 
                tableContent={[
                    {
                        headline: 'Perms',
                        price: 'from $120'
                    },
                    {
                        headline: 'Partial-Perm',
                        price: 'from $110'
                    },
                    {
                        headline: 'Spiral Perm',
                        price: 'from $180'
                    }
                ]
            } />
        },
        {
            label: 'Blowdry',
            content: <Table 
                tableHeader={"STYLING FEE NOT INCLUDED"} 
                tableContent={[
                    {
                        headline: 'Shampoo Only',
                        price: 'from $20'
                    },
                    {
                        headline: 'Shampoo with Blow Dry',
                        price: 'from $26'
                    },
                    {
                        headline: 'Shampoo & Set',
                        price: 'from $25'
                    }
                ]
            } />
        }
    ];
    const initialSelectedIndex = 0;
    return (
        <Tabs data={tabContent} initialSelectedIndex={initialSelectedIndex} />
    )
}


