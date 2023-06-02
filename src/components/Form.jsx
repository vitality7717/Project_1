import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import {
  MapContainer, 
  Marker, 
  Popup, 
  TileLayer,
  CircleMarker, 
  Polygon
} from 'react-leaflet';
import { Tooltip } from 'react-bootstrap';


const colorOptions = {color: 'purple'};
const centerPoligon=[
  [
    [55.808823, 37.463847],
    [55.799910, 37.484745],
    [55.824846, 37.614669],
    [55.845925, 37.638502]
  ]
]
const center=[55.737712, 36.856642]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
  <div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Обратная связь</h1>
      <div className='input-group mb-3'>
          <input
          {...register('lastName', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Фамилия'/>
      </div>
      {errors?.lastName?.type === 'required'&&(
          <p>Обязательно для заполнения</p>
      )}

      {errors?.lastName?.type === 'maxLength'&&(
          <p>Слишком много символов</p>
      )}

      {errors?.lastName?.type === 'pattern'&&(
          <p>Не допустимые симфолы</p>
      )}


      <div className='input-group mb-3'>
          <input
          {...register('firstName', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Имя'/>
      </div>
      {errors?.firstName?.type === 'required'&&(
          <p>Обязательно для заполнения</p>
      )}

      {errors?.firstName?.type === 'maxLength'&&(
          <p>Слишком много символов</p>
      )}

      {errors?.firstName?.type === 'pattern'&&(
          <p>Не допустимые симфолы</p>
      )}


      <div className='input-group mb-3'>
          <input
          {...register('middleName', {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Отчество'/>
      </div>
      {errors?.middleName?.type === 'required'&&(
          <p>Обязательно для заполнения</p>
      )}

      {errors?.middleName?.type === 'maxLength'&&(
          <p>Слишком много символов</p>
      )}

      {errors?.middleName?.type === 'pattern'&&(
          <p>Не допустимые симфолы</p>
      )}


      <div className='input-group mb-3'>
          <input
          {...register('email', {
            required: true,
            maxLength:50,
            pattern: /^[A-Za-z@_-]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Email'/>
      </div>
      {errors?.email?.type === 'required'&&(
          <p>Обязательно для заполнения</p>
      )}

      {errors?.email?.type === 'maxLength'&&(
          <p>Слишком много символов</p>
      )}

      {errors?.email?.type === 'pattern'&&(
          <p>Не допустимые симфолы</p>
      )}

    <div>
      <input className='btn btn-outline-primary' type="submit" />
    </div>
    </form>

<br></br>
    <MapContainer
    center={center}
    zoom={10}
    style={{
      width:'100vw',
      height:"500px"
    }}
    >
      <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=DACFtRCpvUEvx3jqJr0N'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <CircleMarker
      center={center}
      pathOptions={{color: 'black'}}
      radius={10}
      />

  

      <Marker position={center}>
        <Popup>
            Наш центальный офис
        </Popup>
        <Tooltip>
            Наш центальный офис
        </Tooltip>
      </Marker>

      <Polygon positions={centerPoligon} pathOptions={colorOptions}/>
    </MapContainer>
  </div>
  )
}

export default Form