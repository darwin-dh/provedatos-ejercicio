import React, { FC, useEffect, useState } from 'react'
import { Col, FormFeedback, Input, Label, Row } from 'reactstrap'
import SelectGeneric from '../../../common/SelectGeneric'
import { useGetProvinces } from './Api'
import InputCommon from '../../../common/InputCommon'
interface IProps {
    formik: any
}
const FormeEmployment: FC<IProps> = ({ formik }) => {
    const [testop, setTestOp] = useState<any>([])
    const queryProvinces = useGetProvinces()
    useEffect(() => {
        if (queryProvinces.data) {
            const mappedDocs = queryProvinces.data.data.map((item: any) => ({
                label: item?.nombre_provincia || '',
                value: item?.id_provincia
            }));
            setTestOp(mappedDocs);
        }
    }, [queryProvinces.data]);
    const estado = [
        { label: 'Retirado', value: 'retirado' },
        { label: 'Vigente', value: 'vigente' },
    ]
    return (
        <>
            <Row>
                <Col>
                    <Label for="nombre">fecha ingreso</Label>
                </Col>
                <Col>
                    <Label for="nombre">cargo</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>

                    <InputCommon
                        nameInput='fecha_ingreso'
                        validationValue={formik.values.fecha_ingreso}
                        validation={formik}
                        validationTouched={formik.touched.fecha_ingreso}
                        validationErrors={formik.errors.fecha_ingreso}
                        handleInputChange={formik.handleChange}
                        type={'date'}
                    />
                </Col>

                <Col>

                    <InputCommon
                        nameInput='cargo'
                        validationValue={formik.values.cargo}
                        validation={formik}
                        validationTouched={formik.touched.cargo}
                        validationErrors={formik.errors.cargo}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="nombre">Estado</Label>
                </Col>
                <Col>
                    <Label for="nombre">departamento</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>
                    <SelectGeneric
                        optionSelect={(e: number) => formik.setFieldValue('estado', e)}
                        options={estado}
                        btnClear={false}
                        validationValue={formik.values.estado}

                    />
                </Col>

                <Col>
                    <InputCommon
                        nameInput='departamento'
                        validationValue={formik.values.departamento}
                        validation={formik}
                        validationTouched={formik.touched.departamento}
                        validationErrors={formik.errors.departamento}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="Telefono">seccion</Label>
                </Col>
                <Col>
                    <Label for="nombre">Provincia</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>
                    <InputCommon
                        nameInput='seccion'
                        validationValue={formik.values.seccion}
                        validation={formik}
                        validationTouched={formik.touched.seccion}
                        validationErrors={formik.errors.seccion}
                        handleInputChange={formik.handleChange}
                    />
                </Col>

                <Col>
                    <SelectGeneric
                        optionSelect={(e: number) => formik.setFieldValue('division', e)}
                        options={testop}
                        btnClear={false}
                        validationValue={formik.values.division}

                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="nombre">Sueldo</Label>
                </Col>
                <Col>
                    <Label for="nombre">Jorna Parcial</Label>
                </Col>
                <Col>
                    <Label for="nombre">Categoria</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>

                    <InputCommon
                        nameInput='sueldo'
                        validationValue={formik.values.sueldo}
                        validation={formik}
                        validationTouched={formik.touched.sueldo}
                        validationErrors={formik.errors.sueldo}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
                <Col>

                    <Input
                        type="radio"
                        name="jornada_parcial"
                        value="si"
                        checked={formik.values.jornada_parcial === "si"}
                        onChange={formik.handleChange}
                    />{" "}
                    Si
                    <Input
                        type="radio"
                        name="jornada_parcial"
                        value="no"
                        checked={formik.values.jornada_parcial === "no"}
                        onChange={formik.handleChange}
                    />{" "}
                    No
                </Col>
                <Col>
                    <InputCommon
                        nameInput='categoria'
                        validationValue={formik.values.categoria}
                        validation={formik}
                        validationTouched={formik.touched.categoria}
                        validationErrors={formik.errors.categoria}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg='3'>
                    <Label for="nombre">Obervacion</Label>
                </Col>
                <Col>
                    <InputCommon
                        nameInput='observacion'
                        validationValue={formik.values.observacion}
                        validation={formik}
                        validationTouched={formik.touched.observacion}
                        validationErrors={formik.errors.observacion}
                        handleInputChange={formik.handleChange}
                        type={'textarea'}
                    />


                </Col>
            </Row>
        </>
    )
}

export default FormeEmployment