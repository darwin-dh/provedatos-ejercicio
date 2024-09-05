import { useEffect, useMemo, useState } from 'react'
import UseTitles from '../../common/UseTitles'
import { Button, Col, Container, Form, Row } from 'reactstrap'
import UseNavTabs from '../../common/UseNavTabs'
import { itemsTabs } from '../../common/ItemsTabs'
import UseTabContent from '../../common/UseTabContent'
import TableGeneric from '../../Components/Table/TableGeneric'
import { editEmployees, saveEmployees, useGetEmployees, useGetProvinces } from './components/Api'
import FormPersonal from './components/FormPersonal'
import * as Yup from "yup";
import {
    useFormik,
} from 'formik';
import FormeEmployment from './components/FormeEmployment'
import ModalDataEmplosys from './components/ModalDataEmplosys'
const Employees = () => {
    const [activeTab, setactiveTab] = useState("1")
    const [dataForm, setdataForm] = useState<any>()
    const [isEdit, setIsEdit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectItemRow, setSelectItemRow] = useState<any>(null)

    const query = useGetEmployees()

    const formik: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            nombre: (dataForm && dataForm?.nombre) || '',
            apellido: (dataForm && dataForm?.apellido) || '',
            cedula: (dataForm && dataForm?.cedula) || '',
            provincia: (dataForm && dataForm?.provincia) || 145,
            direccion: (dataForm && dataForm?.direccion) || '',
            fecha_nacimiento: (dataForm && dataForm?.fecha_nacimiento) || '',
            email: (dataForm && dataForm?.email) || '',
            telefono: (dataForm && dataForm?.telefono) || '',
            discapacidad: (dataForm && dataForm?.discapacidad) || '',
            fecha_ingreso: (dataForm && dataForm?.fecha_ingreso) || '',
            cargo: (dataForm && dataForm?.cargo) || '',
            estado: (dataForm && dataForm?.estado) || '',
            departamento: (dataForm && dataForm?.departamento) || '',
            seccion: (dataForm && dataForm?.seccion) || '',
            division: (dataForm && dataForm?.division) || '',
            sueldo: (dataForm && dataForm?.sueldo) || '',
            jornada_parcial: (dataForm && dataForm?.jornada_parcial) || '',
            categoria: (dataForm && dataForm?.categoria) || '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('Campo requerido'),
            cedula: Yup.string().required('Campo requerido').matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos numéricos'),
            cargo: Yup.string().required('Campo requerido'),

        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateValues = {
                    ...values,
                    id_datos_laborales: selectItemRow?.id_datos_laborables || '',
                    id_datos_personales: selectItemRow?.personales?.id_datos_personales || '',
                }

                editEmployees(updateValues).then((res) => {
                    setSelectItemRow(null)
                    setIsEdit(false)
                    query.refetch()
                    formik.resetForm()
                    setactiveTab('1')
                }
                ).catch((e) => {
                    console.log(e)
                })
            } else {
                saveEmployees(values).then((res) => {
                    if (res === 'Cedula ya registrada') {
                        setactiveTab('1')
                        alert(res)
                        return
                    }
                    if (res === 'Correo ya registrado') {
                        setactiveTab('1')
                        alert(res)
                        return
                    }
                    setSelectItemRow(null)
                    query.refetch()
                    formik.resetForm()
                    setactiveTab('1')
                })
            }


        },
    });
    const columns = useMemo(() => [
        {
            Header: 'Nombre',
            accessor: 'personales.nombre'
        },
        {
            Header: 'Codigo',
            accessor: 'id_datos_laborables'
        },
        {
            Header: 'Estado',
            accessor: 'estado'
        },

    ], [])

    const listTabPane = [
        {
            tabId: "1",
            componetent:
                <FormPersonal
                    formik={formik}
                />
        },
        {
            tabId: "2",
            componetent:
                <FormeEmployment
                    formik={formik}
                />
        },
    ]


    useEffect(() => {
        if (isEdit) {
            setIsEdit(true)
            setdataForm({
                id_datos_laborales: selectItemRow?.id_datos_laborables || '',
                id_datos_personales: selectItemRow?.personales?.id_datos_personales || '',
                nombre: selectItemRow?.personales?.nombre || '',
                apellido: selectItemRow?.personales?.apellido || '',
                cedula: selectItemRow?.personales?.cedula || '',
                provincia: selectItemRow?.personales?.id_provincia || 0,
                direccion: selectItemRow?.personales?.direccion || '',
                fecha_nacimiento: selectItemRow?.personales?.fecha_nacimiento || '',
                email: selectItemRow?.personales?.email || '',
                telefono: selectItemRow?.personales?.telefono || '',
                discapacidad: selectItemRow?.personales?.discapacidad || '',
                fecha_ingreso: selectItemRow?.fecha_ingreso || '',
                cargo: selectItemRow?.cargo || '',
                estado: selectItemRow?.estado || '',
                departamento: selectItemRow?.departamento || '',
                seccion: selectItemRow?.seccion || '',
                division: selectItemRow?.division || '',
                sueldo: selectItemRow?.sueldo || '',
                jornada_parcial: selectItemRow?.jornada_parcial || '',
                categoria: selectItemRow?.categoria || '',
            })
        } else {
            setdataForm(null)
        }
    }, [selectItemRow, isEdit])
    const hanbleSave = () => {

        switch (activeTab) {
            //next tab
            case '1':
                setactiveTab('2')
                break;
            //if active tab is 2 save
            case '2':
                formik.handleSubmit()
                break;
        }

    }
    useEffect(() => {
        if (selectItemRow === null) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }, [selectItemRow])
    const handleQuit = () => {
        setIsEdit(false)
        formik.resetForm()
    }
    return (
        <>
            {showModal &&
                <ModalDataEmplosys
                    show={showModal}
                    onCloseClick={() => setShowModal(false)}
                    items={query.data.data}
                />
            }
            <Container className='p-2'>
                <Row className='mb-3'>
                    <UseTitles className='text-center bg-light p-3 fw-bold' title='Modulo Empleados' />
                    <UseTitles className='text-center  p-3' title='Crear Empleado Nuevo' style={{ background: '#daecf8', color: '#5c96cc' }} />
                </Row>

                <UseNavTabs
                    activeTab={activeTab}
                    itemsTabs={itemsTabs || []}
                    setactiveTab={setactiveTab}
                    tabs
                    classNav='fs-14'
                />
                <Row className='mb-1 py-2'>
                    <Col className=''>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                                return false;
                            }}
                        >
                            <div>
                                <UseTabContent
                                    activeTab={activeTab}
                                    listTabPane={listTabPane} />
                            </div>
                            <Row className='mt-3'>
                                <Col>
                                    <Button type='button'
                                        color='primary'
                                        onClick={() => hanbleSave()}
                                    >{
                                            activeTab === '2' ? 'Guardar' : 'Siguiente'

                                        }</Button>
                                </Col>
                                <Col>
                                    <Button type='button' color='danger'
                                        onClick={() => setShowModal(true)}
                                        disabled={query?.data?.data.length === 0 ? true : false}
                                    >Reporte</Button>
                                </Col>
                                <Col>
                                    <Button type='button' color='warning'
                                        onClick={() => {
                                            handleQuit()
                                        }}
                                    >Salir</Button>
                                </Col>
                            </Row>

                        </Form>
                    </Col>

                </Row>

                <Row>
                    <Col className=''>
                        <span>Buscar - Codigo Empleado</span>
                    </Col>
                </Row>
                {query.data && <TableGeneric
                    showFilter={true}
                    showFooter={true}
                    columns={columns || []}
                    data={query.data.data || []}
                    selectItemRow={setSelectItemRow}
                    doubleClick={selectItemRow}
                    divClass='table-responsive text-black bg-table'
                    tableClass='cursor-pointer w-100'
                    theadClass='position-sticky top-0 bg-table '
                    thClass='fs-11 fw-light border'
                    tdClass={`fs-11 fw-light border`}
                    tbodyClass='bg-light'
                    styleHeight='250px'
                    overflowY='scroll'
                />}
            </Container>
        </>
    )
}

export default Employees