import React from 'react'

export default function Table({tableHeader, tableContent = {}}) {
    console.log(tableContent);
    return (
        <table>
            <thead>
                <tr>
                    <th>{tableHeader}</th>
                </tr>
            </thead>
            <tbody>
                {tableContent.map((node, idx) => (
                    <tr key={idx}>
                        <td>{node.headline}</td>
                        <td>{node.price}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}
