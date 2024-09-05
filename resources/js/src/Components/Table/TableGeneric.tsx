import { FC, useEffect, useState, useRef } from 'react'
import { useTable, useGlobalFilter, useSortBy, useFilters, useExpanded, usePagination, useRowSelect } from "react-table";
import InputFilter from './InputFilter';
import FooterTable from './FooterTable';
import { CustomTableInstance, IPropsTable } from './InterfacesTable';

const TableGeneric: FC<IPropsTable> = ({
    columns,
    data,
    selectItemRow,
    divClass,
    tableClass,
    theadClass,
    tbodyClass,
    trClass,
    thClass,
    tdClass,
    styleHeight,
    showFilter,
    showFooter,
    showInputExt,
    valueSearch,
    overflowY,
    doubleClick
}) => {
    const [selected, setSelected] = useState<any>(null);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [selectItem, setSelectItem] = useState<any>(null);
    const tableInstance = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        useExpanded,
        usePagination,
        useRowSelect
    ) as CustomTableInstance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = tableInstance

    useEffect(() => {
        if (!showFooter) {
            tableInstance.setPageSize(Number(1000))
        }
    }, [data])

    const pageCount = Math.ceil(data.length / pageSize)
    const totalRows = data.length
    const handleRowClick = (row: any) => {
        // console.log(row.original)
        setSelectItem(row.original || null)
        setSelectedRow(row.index === selectedRow ? null : row.index);
        setSelected(row.index === selected ? null : row.index);

    }

    const handleRowDoubleClick = () => {
        //     console.log(row?.original)
        selectItemRow && selectItemRow(selectItem || null)
    }

    useEffect(() => {
        selectItemRow && selectItemRow(selectItem || null)

    }, [selectItem])
    useEffect(() => {
        showInputExt && setGlobalFilter(valueSearch)
        /*         const selectedProduct = data[selected]
        
                console.log(selectedProduct) */
    }, [valueSearch])



    return (
        <>

            {/* input filter */}
            {showFilter &&
                <InputFilter
                    setGlobalFilter={setGlobalFilter}
                    tableInstance={tableInstance}
                    totalRows={totalRows}
                />}

            <div className={divClass} style={{ height: styleHeight || '250px', overflowY: overflowY || 'scroll' }} >
                <table {...getTableProps()} className={tableClass} style={{ background: '#f5f5f5' }}>
                    <thead className={theadClass}>
                        {headerGroups.map((headerGroup: any, i: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className={trClass} key={i} >
                                {headerGroup.headers.map((column: any, key: number) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        key={key}
                                        className={thClass}                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody {...getTableBodyProps()} className={tbodyClass}>
                        {
                            data && page.map((row: any, index: number) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}
                                        key={index}
                                        className={trClass}
                                        style={{ background: index === selected ? '#1b566a' : '', color: index === selected ? '#fff' : '' }}
                                        onClick={() => handleRowClick(row)}
                                        onDoubleClick={() => handleRowDoubleClick()}
                                    >
                                        {row.cells.map((cell: any, key: number) => {
                                            return (
                                                <td {...cell.getCellProps()}
                                                    key={key}
                                                    className={tdClass}>
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>


                </table>
            </div>
            {showFooter &&
                < FooterTable
                    pageCount={pageCount}
                    tableInstance={tableInstance}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                />

            }
        </>
    )
}

export default TableGeneric