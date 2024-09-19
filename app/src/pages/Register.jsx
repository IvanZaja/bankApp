import { useForm } from 'react-hook-form';
import { createUser } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'all' });

    const onSubmit = async (user) => {
        console.log(user);
        const data = new FormData();
        data.append('name', user.name);
        data.append('lastName', user.lastName);
        data.append('email', user.email);
        data.append('password', user.password);
        data.append('typeId', user.typeId);
        data.append('idNumber', user.idNumber);
        data.append('address', user.address);
        data.append('phone', user.phone);

        try{
            console.log(data)
            await createUser(data);
            console.log('User created');
            navigate('/login');
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div className='ml-10'>
        <h1 className='text-4xl font-semibold mb-5'>Registro</h1>
        <form className='w-64' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
                <label>Nombre</label>
                <input type="text" className='border-b-2' {...register("name", { required: true })}/>
                {errors.name && <span className="text-xs text-red-600">El nombre es obligatorio</span>}
            </div>
            <div className='flex flex-col'>
                <label>Apellidos</label>
                <input type="text" className='border-b-2' {...register("lastName", { required: true })}/>
                {errors.lastName && <span className="text-xs text-red-600">Los apellidos son obligatorios</span>}
            </div>
            <div className='flex flex-col'>
                <label>Tipo de documento</label>
                <select className='border-b-2' {...register("typeId", { required: true })}>
                    <option value="DNI">DNI</option>
                    <option value="NIE">NIE</option>
                    <option value="Pasaporte">Pasaporte</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label>Número de documento</label>
                <input type='text' className='border-b-2' {...register("idNumber", { required: true })}/>
                {errors.idNumber && <span className="text-xs text-red-600">El número de documento es obligatorio</span>}
            </div>
            <div className='flex flex-col'>
                <label>Dirección</label>
                <input type="text" className='border-b-2' {...register("address", { required: true })}/>
                {errors.address && <span className="text-xs text-red-600">La dirección es obligatoria</span>}
            </div>
            <div className='flex flex-col'>
                <label>Teléfono</label>
                <input type="number" className='border-b-2' {...register("phone", { required: true })}/>
                {errors.phone && <span className="text-xs text-red-600">El teléfono es obligatorio</span>}
            </div>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" className='border-b-2' {...register("email", { required: true })}/>
                {errors.email && <span className="text-xs text-red-600">El email es obligatorio</span>}
            </div>
            <div className='flex flex-col'>
                <label>Password</label>
                <input type="password" className='border-b-2' {...register("password", { required: true })}/>
                {errors.password && <span className="text-xs text-red-600">La contraseña es obligatoria</span>}
            </div>
            <button type="submit" className='border-blue-300 border-2 p-3 rounded-xl mt-5'>Register</button>
        </form>
    </div>
  )
}

export default Register