import React, { FC, useEffect, useState } from 'react'
import { Button, Col, FormFeedback, Input, Label, Row } from 'reactstrap'
import SelectGeneric from '../../../common/SelectGeneric'
import { useGetProvinces } from './Api'
import InputCommon from '../../../common/InputCommon'
import { Plus } from 'react-feather'
interface IProps {
    formik: any
}
const FormPersonal: FC<IProps> = ({ formik }) => {
    const [testop, setTestOp] = useState<any>([])
    const queryProvinces = useGetProvinces()
    const [selectedImage, setSelectedImage] = useState<any>('')
    const [fileImage, setFile] = useState<any>();
    useEffect(() => {
        if (queryProvinces.data) {
            const mappedDocs = queryProvinces.data.data.map((item: any) => ({
                label: item?.capital_provincia || '',
                value: item?.id_provincia
            }));
            setTestOp(mappedDocs);
        }
    }, [queryProvinces.data]);

    const handleImageChange = (event: any) => {
        let files = event.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = (event: any) => {
            setFile(
                event.target.result,
            )
        }
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };
    return (
        <>
            <Row>
                <Col>
                    <Label for="nombre">Nombre</Label>
                </Col>
                <Col>
                    <Label for="nombre">Apellido</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>

                    <InputCommon
                        nameInput='nombre'
                        validationValue={formik.values.nombre}
                        validation={formik}
                        validationTouched={formik.touched.nombre}
                        validationErrors={formik.errors.nombre}
                        handleInputChange={formik.handleChange}
                    />
                </Col>

                <Col>

                    <InputCommon
                        nameInput='apellido'
                        validationValue={formik.values.apellido}
                        validation={formik}
                        validationTouched={formik.touched.apellido}
                        validationErrors={formik.errors.apellido}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="nombre">Cedula</Label>
                </Col>
                <Col>
                    <Label for="nombre">Correo</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>
                    <InputCommon
                        nameInput='cedula'
                        validationValue={formik.values.cedula}
                        validation={formik}
                        validationTouched={formik.touched.cedula}
                        validationErrors={formik.errors.cedula}
                        handleInputChange={formik.handleChange}
                    />
                </Col>

                <Col>
                    <Input type="text" name="email" id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="Telefono">Telefono</Label>
                </Col>
                <Col>
                    <Label for="nombre">Discapacidad</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>
                    <InputCommon
                        nameInput='telefono'
                        validationValue={formik.values.telefono}
                        validation={formik}
                        validationTouched={formik.touched.telefono}
                        validationErrors={formik.errors.telefono}
                        handleInputChange={formik.handleChange}
                    />
                </Col>

                <Col>
                    <InputCommon
                        nameInput='discapacidad'
                        validationValue={formik.values.discapacidad}
                        validation={formik}
                        validationTouched={formik.touched.discapacidad}
                        validationErrors={formik.errors.discapacidad}
                        handleInputChange={formik.handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="nombre">Fecha Nacimiento</Label>
                </Col>
                <Col>
                    <Label for="nombre">Provincia</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col>

                    <InputCommon
                        nameInput='fecha_nacimiento'
                        validationValue={formik.values.fecha_nacimiento}
                        validation={formik}
                        validationTouched={formik.touched.fecha_nacimiento}
                        validationErrors={formik.errors.fecha_nacimiento}
                        handleInputChange={formik.handleChange}
                        type={'date'}
                    />
                </Col>

                <Col>
                    <SelectGeneric
                        optionSelect={(e: number) => formik.setFieldValue('provincia', parseFloat(e.toString()) || testop[0].value)}
                        options={testop}
                        btnClear={false}
                        validationValue={formik.values.provincia}

                    />

                </Col>
            </Row>
            <Row>
                <Col>
                    <Label for="nombre">Observacion</Label>
                </Col>

                <Col>
                    <Label for="nombre">Fotografia</Label>
                </Col>
            </Row>
            <Row className='mb-2'>

                <Col lg='7'>
                </Col>
                <Col>
                    <div className="avatar-xl p-1">
                        <div className="avatar-title bg-light rounded-pill">
                            <img src={selectedImage} alt={selectedImage} id="customer-img" className="avatar-md rounded-circle object-cover" width={75} height={75} />
                        </div>
                    </div>
                </Col>
                <Col>

                    <div className="text-center float-end">
                        <div className=" d-inline-block  cursor-pointer " >
                            <div className="  bottom-0 end-0">
                                <Label htmlFor="customer-image-input" className="mb-0">
                                    <div className="avatar-xs">
                                        <div className="avatar-title bg-primary  border  text-white py-2 px-1 rounded">
                                            Cargar Imagen
                                        </div>
                                    </div>
                                </Label>
                                <Input className="form-control d-none" id="customer-image-input"
                                    type="file" name="url_imagen"
                                    onChange={handleImageChange}
                                    accept="image/png, image/gif, image/jpeg"

                                />
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default FormPersonal