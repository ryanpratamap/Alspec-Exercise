import React, { useState, useEffect } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import "./Read.css"

export default function JobRead() { 
    const [JobData, setJobData] = useState([]);
    
    useEffect(() => {
        setJobData([
            {
                "id": "1",
                "title": "Job 1",
                "description": "Alspec",
                "subItems": [
                    {
                        "itemId": "1",
                        "title": "Sub-item 1",
                        "description": "Sub-item description",
                        "status": "Pending"
                    },
                    {
                        "itemId": "2",
                        "title": "Sub-item 2",
                        "description": "Another sub-item",
                        "status": "In Progress"
                    }
                ]
            }
        ]);
    }, []);

    return (
        <div className="jobPage">
            <h1><span className="green">Al</span>spec <span className="green">Pr</span>oducts</h1>
            <div className="addButton"><Button positive>Add Job</Button></div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={1}>Job ID</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Title</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {JobData.map((job, index) => {
                        return (
                            <>
                            <Table.Row key={job.id}>
                                <Table.Cell>{job.id}</Table.Cell>
                                <Table.Cell>{job.title}</Table.Cell>
                                <Table.Cell>{job.description}</Table.Cell>
                            </Table.Row>                            
                            {job.subItems.map((subItem, index) => { 
                                index === 0 ? 
                                <Table.Row key={subItem.itemId}>
                                    <Table.Cell rowspan={job.subItems.length}></Table.Cell>
                                    <Table.Cell colspan={2}>
                                        <p>Item ID: {subItem.itemId}</p>
                                        <p>Title: {subItem.title}</p>
                                        <p>Description: {subItem.description}</p>
                                    </Table.Cell>
                                </Table.Row> : 
                                <Table.Row key={subItem.itemId}>
                                    <Table.Cell colspan={2}>
                                        <p>Item ID: {subItem.itemId}</p>
                                        <p>Title: {subItem.title}</p>
                                        <p>Description: {subItem.description}</p>
                                    </Table.Cell>
                                </Table.Row>
                            })}
                            </>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}