import { createSortedRowModel, rowSortingFeature, rowPaginationFeature, tableFeatures, useTable, createPaginatedRowModel } from "@tanstack/react-table";
import type { ColumnDef } from '@tanstack/react-table'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import type { FC } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type JobApplicationColumn = {
    job_title: string;
    company_name: string;
    status: string;
    applied_at: string;
}

const features = tableFeatures({
    rowSortingFeature,
    rowPaginationFeature,
    sortedRowModel: createSortedRowModel(),
    paginatedRowModel: createPaginatedRowModel()
});

const columns: Array<ColumnDef<typeof features, JobApplicationColumn>> = [
    {
        accessorKey: 'job_title', // accessorKey shorthand
        header: 'Job Title',
        cell: (info) => info.getValue(),
        enableSorting: false,
    },
    {
        accessorKey: 'company_name', // accessorKey shorthand
        header: 'Company',
        cell: (info) => info.getValue(),
        enableSorting: false,
    },
    {
        accessorKey: 'status', // accessorKey shorthand
        header: 'Status',
        cell: (info) => info.getValue(),
        enableSorting: false,
    },
    {
        accessorKey: 'applied_at', // accessorKey shorthand
        header: 'Applied At',
        cell: (info) => info.getValue(),
        enableSorting: true,
    },
    //   {
    //     accessorFn: (row) => row.lastName, // accessorFn alternative with a custom id
    //     id: 'lastName',
    //     header: () => <span>Last Name</span>,
    //     cell: (info) => <i>{info.getValue<string>()}</i>,
    //   },
    //   {
    //     accessorKey: 'age',
    //     header: () => 'Age',
    //   },
]

function getAriaSort(sortDirection: false | 'asc' | 'desc') {
    if (sortDirection === 'asc') return 'ascending'
    if (sortDirection === 'desc') return 'descending'
    return 'none'
}

interface JobApplicationTableProp {
    jobApplications: any[]
}

const JobApplicationTable: FC<JobApplicationTableProp> = ({ jobApplications }) => {
    const data = jobApplications.map(ja => ({
        job_title: ja.job_title,
        company_name: ja.company_name,
        status: ja.status,
        applied_at: ja.applied_at
    }));

    const table = useTable({
        features,
        columns,
        data,
        initialState: {
            sorting: [
                {
                    id: 'applied_at',
                    desc: true,

                }
            ]
        }
    })

    return <Paper variant="outlined" sx={{ width: '100%' }}>
        <TableContainer>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                const sortDirection = header.column.getIsSorted();
                                return <TableCell
                                    key={header.id}
                                    sortDirection={sortDirection || false}
                                    aria-sort={getAriaSort(sortDirection || false)}
                                    data-sort={sortDirection || undefined}
                                >
                                    {header.isPlaceholder ? null : header.column.getCanSort() ?
                                        <TableSortLabel
                                            active={!!sortDirection}
                                            direction={sortDirection || undefined}
                                            onClick={header.column.getToggleSortingHandler()}
                                            IconComponent={ArrowDownwardIcon}
                                        >
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                <table.FlexRender header={header} />
                                            </Typography>
                                        </TableSortLabel>
                                        : <Typography sx={{ fontWeight: 'bold' }}>
                                            <table.FlexRender header={header} />
                                        </Typography>}
                                </TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.length == 0 ?
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                No results.
                            </TableCell>
                        </TableRow>
                        : table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getAllCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        <table.FlexRender cell={cell} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper >
}

export default JobApplicationTable;