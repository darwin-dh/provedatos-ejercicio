import { FC, useMemo, useState } from 'react'
interface IProps {
    show: boolean
    onCloseClick: () => void
    items: any
}
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import TableGeneric from '../../../Components/Table/TableGeneric'
import UseTitles from '../../../common/UseTitles'
const ModalDataEmplosys: FC<IProps> = ({
    show, onCloseClick, items
}) => {
    const [selectItemRow, setSelectItemRow] = useState<any>({})
    const columns = useMemo(() => [
        {
            Header: 'Nombre',
            accessor: 'personales.nombre'
        },
        {
            Header: 'Cedula/Ruc',
            accessor: 'personales.cedula'
        },
        {
            Header: 'Codigo',
            accessor: 'personales.id_datos_personales'
        },
        {
            Header: 'direccion',
            accessor: 'personales.direccion'
        },
        {
            Header: 'telefono',
            accessor: 'personales.telefono'
        },
        {
            Header: 'division',
            accessor: 'division'
        },

        {
            Header: 'departamento',
            accessor: 'departamento'
        },
        {
            Header: 'seccion',
            accessor: 'seccion'
        },

        {
            Header: 'cargo',
            accessor: 'cargo'
        },

        {
            Header: 'fecha Ing',
            accessor: 'fecha_ingreso'
        },

        {
            Header: 'Status',
            accessor: 'estado'
        },
        {
            Header: 'Sueldo',
            accessor: 'sueldo'
        },
        {
            Header: 'Con discapacidad',
            accessor: 'personales.discapacidad'
        },
        {
            Header: 'Email',
            accessor: 'personales.email'
        },
        {
            Header: 'Categoria',
            accessor: 'categoria'
        },
        {
            Header: 'Provincia',
            accessor: 'personales.provincia.nombre_provincia'
        },

    ], [])

    console.log(items)
    return (
        <Modal isOpen={show} toggle={onCloseClick} size='xl'>
            <ModalHeader>

            </ModalHeader>
            <ModalBody>
                <Row>
                    <UseTitles className='text-center  p-3' title='Reporte Empleado' style={{ background: '#daecf8', color: '#5c96cc' }} />

                </Row>
                {items && <TableGeneric
                    showFilter={false}
                    showFooter={false}
                    columns={columns || []}
                    data={items || []}
                    selectItemRow={setSelectItemRow}
                    divClass='table-responsive text-black bg-table'
                    tableClass='cursor-pointer w-100'
                    theadClass='position-sticky top-0 bg-table '
                    thClass='fs-11 fw-light border bg-primary text-white'
                    tdClass={`fs-10 fw-light border`}
                    tbodyClass='bg-light'
                    styleHeight='350px'
                    overflowY='scroll'
                />}
            </ModalBody>
            <ModalFooter>
                <Button block className="btn btn-danger" onClick={onCloseClick}>Salir</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalDataEmplosys