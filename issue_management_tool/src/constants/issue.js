const issueCategory= {
    TECHNICAL: 'Technical',
    BILL_RELATED: 'Bill Related',
    PACKAGE_RELATED: 'Package Related',
    TERMINATION_OF_CONNECTION: 'Termination of Connection',
    SUBSCRIBER_DETAIL_UPDATE: 'Subscriber Detail Update'
}
const issueStatus= {
    CREATED: 'Created',
    ASSIGNED: 'Assigned',
    IN_PROGRESS: 'In Progress',
    IMPEDIMENTS: 'Impediments',
    COMPLETED: 'Completed'
}
const issueSeverity= {
    FATAL: 'Fatal',
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low',
    IGNORABLE: 'Ignorable'
}
export{issueCategory, issueStatus, issueSeverity}
/*
Technical', 'Bill related', 
'Package related', 
'Termination of connection', 
'Subscriber detail update', 
'Misc'
['created', 'assigned', 'in progress', 'impediments', 'completed']
['Fatal', 'High', 'Medium', 'Low', 'Ignorable']
*/